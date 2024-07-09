import pandas as pd
import StockIndicators as SI
import time
from concurrent.futures import ThreadPoolExecutor, as_completed


def process_data_range(start, end, exchange, periyot, datas):
    Titles = ['name', 'close', 'entrySignal', "outputSignal"]
    df_signals = pd.DataFrame(columns=Titles)
    for i in range(start, end):
        try:
            data = SI.TVGet(datas[i], exchange, periyot, 100)
            data = SI.chandelier_exit(data)

            Buy = False
            Sell = False
            Signals = data.tail(2)
            Signals = Signals.reset_index()
            Buy = Signals.loc[0,
                              'Entry'] == False and Signals.loc[1, 'Entry'] == True
            Sell = Signals.loc[0,
                               'Exit'] == False and Signals.loc[1, 'Exit'] == True
            Last_Price = Signals.loc[1, 'close']
            L1 = [datas[i], Last_Price, str(Buy), str(Sell)]
            df_signals.loc[len(df_signals)] = L1
            print("L111", L1)
        except Exception as ex:
            print("Exception--Chandlier--", ex)
    return df_signals


def ChandlierExit():
    exchange = 'BIST'
    periyot = '1D'
    datas = SI.Stocks(exchange)
    num_threads = 3  # Change this to the desired number of threads
    data_length = 500  # len(datas)
    step = data_length // num_threads
    futures = []

    with ThreadPoolExecutor(max_workers=num_threads) as executor:
        for i in range(num_threads):
            start = i * step
            end = (i + 1) * step if i < num_threads - 1 else data_length
            futures.append(executor.submit(process_data_range,
                           start, end, exchange, periyot, datas))

        results = []
        for future in as_completed(futures):
            results.append(future.result())

    df_signals = pd.concat(results)
    df_True = df_signals[(df_signals['entrySignal'] == 'True')]
    return df_True



