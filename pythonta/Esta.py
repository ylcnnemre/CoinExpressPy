from backtesting import Backtest, Strategy
import StockIndicators as SI
import pandas as pd
import os
from concurrent.futures import ThreadPoolExecutor, as_completed

exchange = 'BIST'
periyot = '1D'

datas = SI.Stocks(exchange)


Titles = ['name', 'close', 'successRate', 'status']
df_signals = pd.DataFrame(columns=Titles)


class MyStrategy(Strategy):
    def init(self):
        pass

    def next(self):
        if self.data['Entry'] == True and not self.position:
            self.buy()

        elif self.data['Exit'] == True:
            self.position.close()


def process_data_range_esta(start, end, exchange, periyot, datas):
    Titles = ['Hisse Adı', 'Son Fiyat', 'Başarı Oranı', 'Son Durum']
    df_signals = pd.DataFrame(columns=Titles)
    for i in range(start, end):
        try:
            # Input parameters
            k_period = 34
            fast_period = 3
            slow_period = 5
            signal_period = 2
            atr_multiplier = 2.2
            atr_period = 17
            tp1 = 10 / 100
            tp2 = 20 / 100

            data = SI.TVGet(datas[i], exchange, periyot, 1000)
            ESTA = SI.ESTA(data, k_period, fast_period, slow_period,
                           signal_period, atr_multiplier, atr_period, tp1, tp2)

            ESTA.rename(columns={'open': 'Open', 'high': 'High', 'low': 'Low',
                                 'close': 'Close', 'volume': 'Volume'}, inplace=True)
            ESTA['datetime'] = pd.to_datetime(ESTA['datetime'])
            ESTA.set_index('datetime', inplace=True)
            bt = Backtest(ESTA, MyStrategy, cash=100000, commission=0.001)
            Stats = bt.run()
            Signals = ESTA.tail(1)
            Last_Price = Signals.iloc[0]['Close']
            Status = Signals.iloc[0]['Trade']
            L1 = [datas[i], Last_Price, round(
                Stats.loc['Win Rate [%]'], 2), Status]
            df_signals.loc[len(df_signals)] = L1
            print(L1)
        except Exception as e:
            print(f"An error occurred for stock {datas[i]}: {e}")

    return df_signals


def EstaAnalysis():
    num_threads = 3  # Change this to the desired number of threads
    data_length = 200  # len(datas)
    step = data_length // num_threads
    futures = []

    with ThreadPoolExecutor(max_workers=num_threads) as executor:
        for i in range(num_threads):
            start = i * step
            end = (i + 1) * step if i < num_threads - 1 else data_length
            futures.append(executor.submit(process_data_range_esta,
                           start, end, exchange, periyot, datas))

        results = []
        for future in as_completed(futures):
            results.append(future.result())

    df_signals = pd.concat(results)
    df_True = df_signals[df_signals['Son Durum'] == 'AL']
    return df_True


# Örnek kullanım
""" if __name__ == "__main__":
    df_true_signals = EstaAnalysis()
    print(df_true_signals) """


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