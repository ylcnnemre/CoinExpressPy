import asyncio
import json
import redis
import aio_pika
from concurrent.futures import ThreadPoolExecutor
from GetStockMethods import getStockData
from strategies import runStrategy, tarama_listesi
from constant import defaultColumns, defaultInterval, defaultMarket
from utils import convertCondition, jsonConvertCustom
import aiormq

# Redis bağlantısı
redis_params = {
    'host': 'localhost',
    'port': 5679,
    'password': 'mypassword*1xw',
    'decode_responses': True
}

# ThreadPoolExecutor oluştur
executor = ThreadPoolExecutor()


async def on_request(channel: aio_pika.abc.AbstractChannel, message: aio_pika.IncomingMessage):
    async with message.process():
        try:
            body = json.loads(message.body.decode())
            print("body", body)
            redis_client = redis.Redis(**redis_params)
            cached_data = redis_client.get(message.body)
            if cached_data is None:
                market = body.get("market", defaultMarket)
                columns = body.get("columns", defaultColumns)
                interval = body.get("interval", defaultInterval)
                offset = body.get("offset", 0)
                limit = body.get("limit", 200)
                tickers = body.get("tickers")
                conditionList = body.get("conditions")
                sort = body.get("sort", {"name": "change", "ascending": False})
                formatCondition = convertCondition(conditionList, interval)

                # getStockData fonksiyonunu ThreadPoolExecutor içinde çağır
                data = await asyncio.get_event_loop().run_in_executor(
                    executor,
                    getStockData,
                    market,
                    columns,
                    formatCondition,
                    tickers,
                    offset,
                    limit,
                    sort
                )

                response = {
                    "error": False,
                    "message": "",
                    "length": len(data),
                    "items": data
                }

                redis_client.set(message.body, json.dumps(data), ex=5)
            else:
                cachedData = json.loads(cached_data)
                response = {
                    "error": False,
                    "message": "",
                    "length": len(cachedData),
                    "items": cachedData
                }

        except Exception as ex:
            response = {
                "error": True,
                "message": str(ex),
                "length": 0,
                "items": None
            }

        await channel.default_exchange.publish(
            aio_pika.Message(
                body=json.dumps(response).encode(),
                correlation_id=message.correlation_id
            ),
            routing_key=message.reply_to
        )


async def handle_strategy_select(channel: aio_pika.abc.AbstractChannel, message: aio_pika.abc.AbstractIncomingMessage):
    async with message.process():
        try:
            body = json.loads(message.body.decode())
            print("bodyyy", body)
            index = body.get("index", 0)
            id = body.get("id", 1)
            tag = body.get("tag", None)
            indicators = body.get("indicators", None)
            key = body.get("key", None)
            filterObj = {
                "id": id,
                "index": index,
                "tag": tag,
                "indicators": indicators,
                "key": key
            }

            redis_client = redis.Redis(**redis_params)
            cachedData = redis_client.get(f"strategy-select-{id}")
            if cachedData is None:
                # runStrategy fonksiyonunu ThreadPoolExecutor içinde çağır
                result = await asyncio.get_event_loop().run_in_executor(
                    executor,
                    runStrategy,
                    filterObj
                )
                parsedData = jsonConvertCustom(result["data"])
                finalData = {
                    "description": result["description"],
                    "data": parsedData
                }
                selectedExp = next(filter(lambda x: x["id"] == id, tarama_listesi), {
                    "expiration": 60
                })
                redis_client.set(
                    f"strategy-select-{id}", json.dumps(finalData), ex=selectedExp["expiration"])
                redis_client.delete(f"strId{id}")
                response = {
                    "error": False,
                    "message": "",
                    "length": len(finalData["data"]),
                    "items": finalData
                }
            else:
                cacheResponse = json.loads(cachedData)
                response = {
                    "error": False,
                    "status": "complete",
                    "message": "",
                    "length": len(cacheResponse["data"]),
                    "items": cacheResponse
                }
                redis_client.delete(f"strId{id}")

        except Exception as ex:
            response = {
                "error": True,
                "status": "complete",
                "message": str(ex),
                "length": 0,
                "items": None
            }

        await channel.default_exchange.publish(
            aio_pika.Message(
                body=json.dumps(response).encode(),
                correlation_id=message.correlation_id
            ),
            routing_key=message.reply_to
        )


async def crypto_on_request(channel: aio_pika.abc.AbstractChannel, message: aio_pika.IncomingMessage):
    async with message.process():
        try:
            body = json.loads(message.body.decode())
            print("body", body)
            redis_client = redis.Redis(**redis_params)
            cached_data = redis_client.get(message.body)
            if cached_data is None:
                market = body.get("market", defaultMarket)
                columns = body.get("columns", defaultColumns)
                interval = body.get("interval", defaultInterval)
                offset = body.get("offset", 0)
                limit = body.get("limit", 200)
                tickers = body.get("tickers")
                conditionList = body.get("conditions")
                sort = body.get("sort", {"name": "change", "ascending": False})
                formatCondition = convertCondition(conditionList, interval)

                # getStockData fonksiyonunu ThreadPoolExecutor içinde çağır
                data = await asyncio.get_event_loop().run_in_executor(
                    executor,
                    getStockData,
                    market,
                    columns,
                    formatCondition,
                    tickers,
                    offset,
                    limit,
                    sort
                )

                response = {
                    "error": False,
                    "message": "",
                    "length": len(data),
                    "items": data
                }

                redis_client.set(message.body, json.dumps(data), ex=5)
            else:
                cachedData = json.loads(cached_data)
                response = {
                    "error": False,
                    "message": "",
                    "length": len(cachedData),
                    "items": cachedData
                }

        except Exception as ex:
            response = {
                "error": True,
                "message": str(ex),
                "length": 0,
                "items": None
            }

        await channel.default_exchange.publish(
            aio_pika.Message(
                body=json.dumps(response).encode(),
                correlation_id=message.correlation_id
            ),
            routing_key=message.reply_to
        )


async def consume_message(queue: aio_pika.abc.AbstractQueue, channel: aio_pika.abc.AbstractChannel):
    async for message in queue:
        if message.routing_key == 'strategies_select':
            asyncio.create_task(handle_strategy_select(channel, message))
        elif message.routing_key == 'rpc_queue':
            asyncio.create_task(on_request(channel, message))
        elif message.routing_key == "crypto_queue":
            asyncio.create_task(crypto_on_request(channel, message))
        else:
            # Bilinmeyen bir routing key durumu
            print(f"Unknown routing key: {message.routing_key}")


async def check_rabbitmq_connection():
    try:
        await asyncio.sleep(5)
        connection = await aio_pika.connect_robust(
            "amqp://guest:12345*x@localhost"
        )
        print("RabbitMQ'ya başarıyla bağlandı.")
        # Bağlantıyı kapat
        await connection.close()
    except Exception as e:
        print(f"RabbitMQ'ya bağlanılamadı: {e}")


async def main() -> None:
    print("PyFilter Başladı")
    await check_rabbitmq_connection()
    connection = await aio_pika.connect("amqp://guest:12345*x@localhost")

    async with connection:
        channel = await connection.channel()

        queue1 = await channel.declare_queue("strategies_select")
        queue2 = await channel.declare_queue("rpc_queue")
        queue3 = await channel.declare_queue("crypto_queue")
        await asyncio.gather(
            consume_message(queue1, channel),
            consume_message(queue2, channel),
            consume_message(queue3, channel)
        )

        print(" [*] Waiting for messages. To exit press CTRL+C")
        await asyncio.Future()


print("selam")

if __name__ == "__main__":
    asyncio.run(main())


""" node-app:
    build:
      context: .
      dockerfile: dockerfile
    ports:
      - '5000:5000'
    restart: always
    volumes:
      - .:/usr/src/app
    depends_on:
      - mongodb
      - rabbitmq
      - redis
      - python-app
    networks:
      - mynetwork """
