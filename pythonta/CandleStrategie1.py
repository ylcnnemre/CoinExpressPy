import pandas as pd
from tradingview_screener import Query, Column
import StockIndicators as SI
import time
import redis
redis_params = {
    'host': 'localhost',
    'port': 5679,
    'password': 'mypassword*1xw',
    'decode_responses': True
}
redis_client = redis.Redis(**redis_params)


def Tarama_1(val):
    """Bu Tarama Terkedilmiş Bebek Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Candle.AbandonedBaby.Bullish' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_2(val):
    """Bu Tarama Yutan Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Candle.Engulfing.Bullish' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_3(val):
    """Bu Tarama Harami Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Candle.Harami.Bullish' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_4(val):
    """Bu Tarama Tepen Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Candle.Kicking.Bullish' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_5(val):
    """Bu Tarama Uç Yıldız Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Candle.TriStar.Bullish' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_6(val):
    """Bu Tarama Uç Yıldız Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Candle.MorningStar' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_7(val):
    """Bu Tarama Uç Yıldız Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Candle.Marubozu.White' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_8(val):
    """Bu Tarama Uç Yıldız Boğa Mum Formasyonu bulan taramadır."""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('open') < Column('close'),
        Column('Candle.Hammer' + str(val)) == 1
    )
        .get_scanner_data())[1]
    return Tarama


def mainCandleMethod():
    try:
        Check = ["|60", "|120", "|240", "", "|1W"]
        Check_row = ["Saatlik", "2 Saatlik", "4 Saatlik", "Günlük", "Haftalık"]

        all_combined_df = pd.DataFrame()

        for i in range(len(Check)):
            Tarama1 = Tarama_1(Check[i])
            Tarama2 = Tarama_2(Check[i])
            Tarama3 = Tarama_3(Check[i])
            Tarama4 = Tarama_4(Check[i])
            Tarama5 = Tarama_5(Check[i])
            Tarama6 = Tarama_6(Check[i])
            Tarama7 = Tarama_7(Check[i])
            Tarama8 = Tarama_8(Check[i])

            tarama_dict = {
                'Terkedilmiş Bebek Boğa Mum Formasyonu': Tarama1,
                'Yutan Boğa Mum Formasyonu': Tarama2,
                'Harami Boğa Mum Formasyonu': Tarama3,
                'Tepen Boğa Mum Formasyonu': Tarama4,
                'Uç Yıldız Boğa Mum Formasyonu': Tarama5,
                'Sabah Yıldızı Mum Formasyonu': Tarama6,
                'Beyaz Maribozu Mum Formasyonu': Tarama7,
                'Yeşil Çekiç Mum Formasyonu': Tarama8}

            for name, df in tarama_dict.items():
                df['Taramalar'] = name
                df['Periyot'] = Check_row[i]

            tarama_list = [Tarama1, Tarama2, Tarama3,
                           Tarama4, Tarama5, Tarama6, Tarama7, Tarama8]
            combined_df = pd.concat(tarama_list, ignore_index=True)
            combined_df['close'] = round(combined_df['close'], 2)
            combined_df['Perf.W'] = round(combined_df['Perf.W'], 2)
            combined_df['change'] = round(combined_df['change'], 2)
            all_combined_df = pd.concat(
                [all_combined_df, combined_df], ignore_index=True)

        return all_combined_df
    except Exception as ex:
        print("exxx", ex)
        redis_client.delete("strId51")


def dss_bresser_scalper(exchange="BIST", periyot="1D"):
    datas = SI.Stocks(exchange)
    Titles = ['name', 'close', 'entrySignal']
    df_signals = pd.DataFrame(columns=Titles)
    for i in range(0, 30):
        try:
            data = SI.TVGet(datas[i], exchange, periyot, 100)
            data['DSS'] = SI.dss_bresser_scalper(
                data['high'], data['low'], data['close'])
            Stochastic = SI.stoch_rsi(data['close'])
            data[['STOCH_FAST', 'STOCH_SLOW']] = Stochastic[['fast', 'slow']]
            Buy = False
            Signals = data.tail(2)
            Signals = Signals.reset_index()
            Buy = (Signals.loc[1, 'DSS'] < 20.0) and (Signals.loc[1, 'STOCH_SLOW'] < 20.0) and (
                Signals.loc[1, 'STOCH_FAST'] > Signals.loc[1, 'STOCH_SLOW'])
            Last_Price = Signals.loc[1, 'close']
            L1 = [datas[i], Last_Price, str(Buy)]
            df_signals.loc[len(df_signals)] = L1
        except Exception as ex:
            print("Exception--dssBress -> ", ex)
            redis_client.delete("strId52")
    df_True = df_signals[(df_signals['entrySignal'] == 'True')]
    print("dfTrue", df_True)
    return df_True




