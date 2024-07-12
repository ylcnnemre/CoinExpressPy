import asyncio
import aio_pika

async def main():
    try:
        await asyncio.sleep(10)
        connection = await aio_pika.connect_robust(
            "amqp://guest:12345*x@rabbitmq"
        )
        print("RabbitMQ'ya başarıyla bağlandı.")
        # Bağlantıyı kapat
        await connection.close()
    except Exception as e:
        print(f"RabbitMQ'ya bağlanılamadı: {e}")

print("testPy başladı")

if __name__ == "__main__":
    asyncio.run(main())