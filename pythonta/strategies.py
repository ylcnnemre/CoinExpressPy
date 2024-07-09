import redis
from tradingview_screener import Query, Column
import pandas as pd
from CandleStrategie1 import mainCandleMethod, dss_bresser_scalper
from TrendMagic import TrendMagic
from ChandlierExit import ChandlierExit
from Harsi import Harsi
from Esta import EstaAnalysis

def Tarama_1():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı 0 ila 15% Arasında
    RSI(14) 50 ila 55 Arasında
    Açılış Fiyatı Güncel Fiyatın Altında
    Fiyat  Yukarı Keser Basit Haraketli Ortalama 20
    Taramasıdır.
    #Bollinger orta bandından dönerken RSI ı yükselen #bist hisseleri taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI').between(50, 65),
        Column('Perf.W').between(0, 15),
        Column('close') > Column('open'),
        Column('close').crosses_above('SMA20'),
        Column('relative_volume_10d_calc') > 1.0,
    )
        .get_scanner_data())[1]
    print("TARAMA => ", Tarama)
    return Tarama


def Tarama_2():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı 0 ila 15% Arasında
    RSI14 50 ila 55 Arasında
    ADX14 30 ila 60 arasında
    Stockastik RSI Hızlı < 20
    Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş
    Taramasıdır.
    #Üçgen-Flama bulan tarama olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI').between(50, 65),
        Column('Perf.W').between(0, 15),
        Column('ADX').between(30, 60),
        Column('Stoch.RSI.K') < 20.0,
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D')),
        Column('relative_volume_10d_calc') > 1.0
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_3():
    """Bu Tarama Günlük Periyotta
    RSI(14) > 50
    Aylık performansı > 20%
    Basit Hareketli Ortalama (5) < Fiyat
    Basit Hareketli Ortalama (20) < Fiyat
    Basit Hareketli Ortalama (200) < Fiyat
    Göreceli Hacim > 1.5
    Momentum > 1
    Piyasa Değeri > 2 Milyar
    Taramasıdır.
    #Driehaus'un momentum stratejisie uyan #bist hisselerinin taramaası (PD'ye göre)
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI') > 50,
        Column('Perf.1M') > 20,
        Column('Mom') > 1.0,
        Column('SMA5') < Column('close'),
        Column('SMA20') < Column('close'),
        Column('SMA200') < Column('close'),
        Column('relative_volume_10d_calc') > 1.5,
        Column('market_cap_basic') > 2E9
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_4():
    """Bu Tarama Günlük Periyotta
    RSI(14) > 55
    Üstel Hareketli Ortalama (5) < Fiyat
    Üstel Hareketli Ortalama (20) < Fiyat
    Üstel Hareketli Ortalama (50) < Fiyat
    Hacim Aırlıklı Hareketli Ortalama <Fiyat
    Göreceli Hacim > 1.3
    Emtia Kanal Endeksi (CCI20) > 100
    Ichimoku Dönüşüm Hattı < Ichimoku Ana Hattı
    Taramasıdır.
    #Düşeni Kıran #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI') > 55,
        Column('EMA5') < Column('close'),
        Column('EMA20') < Column('EMA5'),
        Column('EMA50') < Column('EMA20'),
        Column('VWAP') < Column('close'),
        Column('CCI20') > 100,
        Column('relative_volume_10d_calc') > 1.3,
        Column('Ichimoku.CLine') < (Column('Ichimoku.BLine'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_5():
    """Bu Tarama Günlük Periyotta
    Hacim > 10 Milyon
    Ortalama Hacim >10 Milyon
    Göreceli Hacim > 1.7
    Bollinger Band Upper < Fiyat
    Parabolik SAR <Fiyat
    Macd > Macd Sinyal
    Stokastik RSI Hızlı > Stokastik RSI YAvaş
    Taramasıdır.
    #Bollinger üst bandı üstündeki #bist hisselerinin taraması olarakda bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('volume') > 10E6,
        Column('average_volume_10d_calc') > 10E6,
        Column('relative_volume_10d_calc') > 1.7,
        Column('BB.upper') < Column('close'),
        Column('P.SAR') < Column('close'),
        Column('Stoch.RSI.K') > (Column('Stoch.RSI.D')),
        Column('MACD.macd') > Column('MACD.signal')
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_6():
    """Bu Tarama Günlük Periyotta
    Hacim > 5 Milyon
    Haftalık Değişim < 0%
    Hull Hareketli Ortalama < Fiyat
    Stokastik RSI Hızlı yukarı Keser Stokastik RSI Yavaş
    Taramasıdır.
    #Dinlenmesi biten #bist hisselerinin taraması olarakda bilinir. (hacimli)
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('volume') > 5E6,
        Column('Perf.W') < 0,
        Column('EMA5').crosses_above(Column('SMA5')),
        Column('HullMA9') < Column('close'),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_7():
    """Bu Tarama Günlük Periyotta
    Momentum 1 ila 4 arasında
    Göreceli hacim >1.5
    Parabolik SAR <Fiyat
    Stokastik RSI Hızlı > Stokastik RSI Yavaş
    Ichimoku Dönüşüm Hattı > Ichimoku Ana Hattı
    Ichimoku Ana Hattı < Fiyat
    Ichimoku Senkou A >Ichımoku Senkou B
    Taramasıdır.
    #Ichimoku göstergeleri olumlu olan #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Mom').between(1, 4),
        Column('P.SAR') < Column('close'),
        Column('MACD.macd') > Column('MACD.signal'),
        Column('Stoch.RSI.K') > Column('Stoch.RSI.D'),
        Column('Ichimoku.BLine') < Column('close'),
        Column('Ichimoku.CLine') > Column('Ichimoku.BLine'),
        Column('Ichimoku.Lead1') > Column('Ichimoku.Lead2'),
        Column('relative_volume_10d_calc') > 1.5
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_8():
    """Bu Tarama Günlük Periyotta
    Göreceli hacim >1.5
    Haftalık Değişim 3 ila 15 arasında
    Williams Yüzde Aralığ -100 ila -70 arasında
    Taramasıdır.
    #Williams %R ile dipten dönen #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('W.R').between(-100, -70),
        Column('Perf.W').between(3, 15),
        Column('relative_volume_10d_calc') > 1.5
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_9():
    """Bu Tarama Günlük Periyotta
    Hacim > 1 Milyon
    Göreceli hacim >1.5
    Haftalık Değişim < 15%
    Açılış Fiyatı Güncel Fiyatın Altında
    Chaikin Para Akışı -0.2 ila 0.3 arasında
    RSI 45 ila 60 arasında
    RSI7 < 70
    Ichimoku Dönüşüm Hattı < Fiyat
    Stokastik RSI Hızlı >= Stokastik RSI Yavaş
    Taramasıdır.
    #Hull ortalaması üzerinde ve tenkansen üzerinde olan #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('volume') > 1E6,
        Column('close') > Column('open'),
        Column('ChaikinMoneyFlow').between(-0.2, 0.3),
        Column('HullMA9') < Column('close'),
        Column('relative_volume_10d_calc') > 1.5,
        Column('Perf.W') < 15,
        Column('RSI').between(45, 60),
        Column('RSI7') < 70,
        Column('Stoch.RSI.K') >= Column('Stoch.RSI.D'),
        Column('Ichimoku.CLine') < Column('close')

    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_10():
    """Bu Tarama Günlük Periyotta
    Hacim > 5 Milyon
    Göreceli hacim >1.3
    Açılış Fiyatı Güncel Fiyatın Altında
    Basit Haraketli ortalama 5 >Basit Haraketli Ortalama 100
    RSI 45 ila 60 arasında
    RSI7 40 ila 65 arasında
    Stokastik RSI Hızlı >= Stokastik RSI Yavaş
    Taramasıdır.
    #Hull ortalaması üzerinde SMA in SMA100 üzerinde olduğu #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('volume') > 5E6,
        Column('close') > Column('open'),
        Column('HullMA9') < Column('close'),
        Column('relative_volume_10d_calc') > 1.3,
        Column('RSI').between(40, 65),
        Column('RSI7').between(40, 65),
        Column('SMA5') > Column('SMA100'),
        Column('Stoch.RSI.K') >= Column('Stoch.RSI.D')
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_11():
    """Bu Tarama Günlük Periyotta
    Göreceli hacim >1.3
    Haftalık Değişim < 15%
    Ichimoku Dönüşüm Hattı yukarı keser Ichimoku Ana Hattı
    Taramasıdır.
    #Tenkansen Kijunseni yukarı kesen #bist hisseleri taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('relative_volume_10d_calc') > 1.3,
        Column('Ichimoku.CLine').crosses_above(
            Column('Ichimoku.BLine'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_12():
    """Bu Tarama Günlük Periyotta
    Açılış Fiyatı Güncel Fiyatın Altında
    RSI 30 ila 40 arasında
    MACD Yukarı keser MACD Sinyal
    MACD Sinyal < 0
    Taramasıdır.
    #RSI 30 seviyesinin üzerinde al verirken Macd 0 'ın altında al veren #bist hisselerinin taraması
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI').between(30, 40),
        Column('change') > 0,
        Column('MACD.macd').crosses_above(Column('MACD.signal')),
        Column('MACD.signal') < 0
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_13():
    """Bu Tarama Günlük Periyotta
    Haftalık Değişim < 15%
    Fiyat Yukarı Keser Üstel Hareketli Ortalama 20
    ADX 30 ila 40 arasında
    Taramasıdır.
    #ADX30 'un hemen üzerindeyken EMA20'yi yukarı kesen #bist hisseleriin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('close').crosses_above('EMA20'),
        Column('ADX').between(30, 40)
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_14():
    """Bu Tarama Günlük Periyotta
    Haftalık Değişim < 15%
    Açılış Fiyatı Güncel Fiyatın Altında
    Fiyat Yukarı Keser Basit Hareketli Ortalama 20
    RSI 50 ila 55 Arasında
    Taramasıdır.
    #RSI hemen 50 seviyesi üzerindeyken bollinger orta bandını yukarı kesen #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('close') > Column('open'),
        Column('close').crosses_above('SMA20'),
        Column('RSI').between(50, 55)
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_15():
    """Bu Tarama Günlük Periyotta
    Haftalık Değişim < 15%
    Fiyat Yukarı Keser Ichimoku Dönüşüm Hattı
    Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş
    Taramasıdır.
    #Fiyat tenkansen'i yukarı keserken stokastik rsi al veren #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('relative_volume_10d_calc') > 1.3,
        Column('close').crosses_above('Ichimoku.CLine'),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_16():
    """Bu Tarama Günlük Periyotta
    Haftalık Değişim < 15%
    Üstel Haraketli Ortalama 5 yukarı keser Üstel Hareketli Ortalama 50
    Taramasıdır. (ANKA CROSS)
    #Üstel Hareketli ortalama 5 in üstel hareketli ortalama 50 yi yukarı kesen #bist hisselerinin taraması olarak da bilinir.(By AnkaCross)
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('EMA5').crosses_above('EMA50')
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_17():
    """Bu Tarama Günlük Periyotta
    Haftalık Değişim < 15%
    MACD < 0
    MACD yukarı keser MACD Sinyal
    Taramasıdır.
    #MACD negatif bölgede al veren #bist hisselerinin taraması
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('relative_volume_10d_calc') > 1.3,
        Column('Perf.W') < 15,
        Column('MACD.macd') < 0,
        Column('MACD.macd').crosses_above(Column('MACD.signal'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_18():
    """Bu Tarama Günlük Periyotta
    Açılış < Üstel Hareketli Ortalama
    Fiyat Yukarı keser Üstel Hareketli Ortalama

    Taramasıdır.
    #EMA200'ü yukarı kesmiş #bist hisselerinin taranması
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('open') < Column('EMA200'),
        Column('close').crosses_above(Column('EMA200'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_19():
    """Bu Tarama Günlük Periyotta
    Haftalık Değişim < 20%
    Fiyat > Basit Hareketli Ortalama 200
    Hacim Ağırlıklı Ortalama Fiyat < Fiyat
    Hacim Ağırlıklı Hareketli Ortalama < Fiyat
    Taramasıdır.
    #HAHO ve HAOF üzerinde olup SMA200 ü yukarı kesmiş #bist hisselerinin taraması olarak da bilinir
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 20,
        Column('close').crosses_above(Column('SMA200')),
        Column('VWAP') < Column('close'),
        Column('VWMA') < Column('close')
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_20():
    """Bu Tarama Günlük Periyotta
    Fiyat Yukarı Keser Basit Hareketli Ortalama 50
    Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş
    Stokastik RSI Yavaş <20
    Taramasıdır.
    #Stokastik RSI 20 nin altında al verirken SMA50 den dönen #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('close').crosses_above(Column('SMA50')),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D')),
        Column('Stoch.RSI.D') < 20
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_21():
    """Bu Tarama Günlük Periyotta
    Fiyat Yukarı Keser Basit Hareketli Ortalama 50
    Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş
    Stokastik RSI Yavaş <20
    Taramasıdır.
    #Stokastik RSI 20 nin altında al Bollinger alt bandıdan döüş veren #bist hisselerinin taranması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('close').crosses_above(Column('BB.lower')),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D')),
        Column('Stoch.RSI.D') < 20
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_22():
    """Bu Tarama Günlük Periyotta
    Parabolik SAR < Fiyat
    Üstel Haraketli Ortalama 10 Yukarı Keser Üstel Haraketli Ortalama 20
    Taramasıdır.
    #Parabolik SAR aldayken EMA10 EMA20 'i yukarı kesen #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('P.SAR') < Column('close'),
        Column('EMA10').crosses_above(Column('EMA20'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_23():
    """Bu Tarama Günlük Periyotta
    Fiyat  > Bollinger Alt Bandı
    En düşük Fiyat <Bollinger Alt Bandı
    Stokastik RSI Hızlı >= Stokastik RSI yavaş
    Taramasıdır.
    #Bollinger alt bandı yada alt altından dönen #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('close') > (Column('BB.lower')),
        Column('low') <= (Column('BB.lower')),
        Column('Stoch.RSI.K') >= Column('Stoch.RSI.D')
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_24():
    """Bu Tarama Günlük Periyotta
    Pozitif Yönsel Gösterge Yuakrı Keser Negatif Yönsel Gösterge
    Göreceli Hacim > 1.3
    MACD < MACD Sinyal
    Chaikin Para Akışı < 0
    Stokastik RSI Hızlı > Stokastik RSI yavaş
    Taramasıdır.
    #Chaikin dipten dönerken DMI al veren #bist hisselerinin tarması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('ADX+DI').crosses_above(Column('ADX-DI')),
        Column('relative_volume_10d_calc') > 1.3,
        Column('MACD.macd') < Column('MACD.signal'),
        Column('ChaikinMoneyFlow') < 0,
        Column('Stoch.RSI.K') > Column('Stoch.RSI.D')
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_25():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Göreceli Hacim > 1.5
    Üstel Haraketli Ortalama 5 < Fiyat
    Üstel Haraketli Ortalama 20 < Üstel Haraketli Ortalama 5
    Üstel Haraketli Ortalama 50 < Üstel Haraketli Ortalama 20
    MACD > MACD Sinyal
    Parabolik SAR Aşağı Keser Fiyat
    Emtia Kanal Endeksi >=90
    Taramasıdır.
    #Alternatif Düşeni kıran #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('relative_volume_10d_calc') > 1.5,
        Column('EMA5') < Column('close'),
        Column('EMA20') < Column('EMA5'),
        Column('EMA50') < Column('EMA20'),
        Column('MACD.macd') > Column('MACD.signal'),
        Column('P.SAR').crosses_below(Column('close')),
        Column('CCI20') >= 90.0
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_26():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    RSI 30 ila 55 arasında
    MACD Yukarı Keser MACD Sinyal
    MACD Sinyal < 0
    Taramasıdır.
    #Swing Trade 3 nolu strateji taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('RSI').between(30, 55),
        Column('MACD.macd').crosses_above(Column('MACD.signal')),
        Column('MACD.signal') < 0.0
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_27():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    ATR < 0.2
    MACD Yukarı Keser MACD Sinyal
    Taramasıdır.
    #Richards Dennis Kaplumbağası MACD kesişimi olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15,
        Column('ATR') < 0.2,
        Column('MACD.macd').crosses_above(Column('MACD.signal'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_28():
    """Bu Tarama Günlük Periyotta
    Fiyat Yukarı Keser Basit Haraketli Ortalama 50
    Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş
    Stokastik RSI Yavaş < 0
    Taramasıdır.
    #Stokastik RSI 40 ı altında al verirken Fiyat yukarı keser SMA50 #bist hisselerinin taranması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('close').crosses_above(Column('SMA50')),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D')),
        Column('Stoch.RSI.D') < 40.0
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_29():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Stokastik RSI Hızlı > Stokastik RSI Yavaş
    Stokastik RSI Yavaş < 50
    Hull Haraketli Ortalama 9 Yukarı Keser Basit Haraketli Ortalama
    Taramasıdır.
    #HUll9 X SMA20 Statejisi olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15.0,
        Column('HullMA9').crosses_above(Column('SMA20')),
        Column('Stoch.RSI.K') > Column('Stoch.RSI.D'),
        Column('Stoch.RSI.D') < 50.0

    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_30():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Göreceli Hacim > 1.0
    RSI14 45 ile 60 arasında
    RSI7 < 70
    Stokastik RSI Hızlı > Stokastik RSI Yavaş
    Chaikin Para Akışı -0.2 ila 0.3 arasında
    Ichimoku Dönüşüm Hattı Aşağı Keser Fiyat
    Hull Haraketli Ortalama 9 Küçük Fiyat
    Taramasıdır.
    #Fiyat hull9 üzerindeyken tenkanseni yukarı kesen #bist hisselerinin taraması olarakda bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15.0,
        Column('relative_volume_10d_calc') > 1.0,
        Column('close') > Column('open'),
        Column('RSI').between(45, 60),
        Column('RSI7') < 70,
        Column('ChaikinMoneyFlow').between(-0.2, 0.3),
        Column('HullMA9') < Column('close'),
        Column('Stoch.RSI.K') >= Column('Stoch.RSI.D'),
        Column('Ichimoku.CLine').crosses_below(Column('close'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_31():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Göreceli Hacim > 1.0
    Fiyat >= Basit Haraketli Ortalama 5
    Basit Haraketli Ortalama 10 > Basit Haraketli Ortalama20
    Macd Yukarı Keser MACD Sinyali
    Taramasıdır.
    #Swint Trade 2 nolu stratejisine uyan #bist hisselerinin taraması olarakda bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15.0,
        Column('relative_volume_10d_calc') > 1.0,
        Column('close') >= Column('SMA5'),
        Column('SMA10') > Column('SMA20'),
        Column('MACD.macd').crosses_above(Column('MACD.signal'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_32():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Göreceli Hacim > 1.0
    Fiyat > Üstel Haraketli Ortalama 5
    Fiyat > Üstel Haraketli Ortalama 10
    Fiyat > Üstel Haraketli Ortalama 20
    Fiyat > Üstel Haraketli Ortalama 30
    Fiyat > Üstel Haraketli Ortalama 50
    Fiyat > Üstel Haraketli Ortalama 100
    Fiyat > Üstel Haraketli Ortalama 200
    Piyasa Değeri <50M
    Taramasıdır.
    #EMA lar üzerinde hacim patlaması yapan #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15.0,
        Column('relative_volume_10d_calc') > 1.0,
        Column('close') > Column('EMA5'),
        Column('close') > Column('EMA10'),
        Column('close') > Column('EMA20'),
        Column('close') > Column('EMA30'),
        Column('close') > Column('EMA50'),
        Column('close') > Column('EMA100'),
        Column('close') > Column('EMA200'),
        Column('market_cap_basic') < 1E7
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_33():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Göreceli Hacim > 1.0
    Macd Yukarı Keser Macd Sinyal
    Stokastik RSI Hızlı Yukarı keser Stokastik RSI Yavaş
    Taramasıdır.
    #Macd ve Stokastik RSI hanüz al vermiş olan #bist hisselerinin taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15.0,
        Column('relative_volume_10d_calc') > 1.0,
        Column('MACD.macd').crosses_above(Column('MACD.signal')),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_34():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Göreceli Hacim > 1.0
    İşlem Hacmi > 5 Milyon
    Fiyat > Açılış
    RSI14 40 ila 65 arasında
    RSI7 40 ila 65 arasında
    Bast Haraketli Ortalama 5 > Basit Haraketli Ortalama 100
    Hull Haraketli Ortalama 9 > Düşük
    Stokastik RSI Hızlı > Stokastik RSI Yavaş
    Taramasıdır.
    #Hull9 u hacimli yukarı kesen #bist hisselerinin taraması
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15.0,
        Column('relative_volume_10d_calc') > 1.0,
        Column('volume') > 5E6,
        Column('close') > Column('open'),
        Column('RSI').between(40, 65),
        Column('RSI7').between(40, 65),
        Column('SMA5') > Column('SMA100'),
        Column('HullMA9') > Column('low'),
        Column('Stoch.RSI.K') > (Column('Stoch.RSI.D'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_35():
    """Bu Tarama Günlük Periyotta
    Fiyat Yukarı Keser Hull Haraketl Ortalama
    Ortalama Gerçek Aralık 0 ila 10 arasında
    Basit Haraketli Ortalama Aşağı Keser Fiyat
    Taramasıdır.
    #Richards Dennis Kaplumbağası hull9 a göre oalrak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('close').crosses_above('HullMA9'),
        Column('ATR').between(0, 10),
        Column('SMA20').crosses_below('close'),
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_36():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı < 15%
    Göreceli Hacim  > 1.0
    RSI(14) 50 ila 55 Arasında
    ADX >20
    Emtia Kanal Endeksi Yukarı Keser -100
    Taramasıdır.
    #ADX CCI Taraması olarak da bilinir.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI').between(50, 65),
        Column('Perf.W') < 50,
        Column('ADX') > 20,
        Column('CCI20').crosses_above(-100),
        Column('relative_volume_10d_calc') > 1.0,
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_37():
    """Bu Tarama Günlük Periyotta
    RSI14 > 55
    Üstel Hareketli Ortalama 5 < Kapanış Fiyatı
    Üstel Hareketli Ortalama 20 < Basit Hareketli Ortalama 5
    Üstel Hareketli Ortalama 50 < Basit Hareketli Ortalama 20
    Emtia Kanal Endeksi CCI(20)  Yukarı Keser 100
    Hacim x Fiyat > 10 Milyon
    Taramasıdır.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI') > 55.0,
        Column('EMA5') < Column('close'),
        Column('EMA20') < Column('SMA5'),
        Column('EMA50') < Column('SMA20'),
        Column('CCI20').crosses_above(100),
        Column('Value.Traded') > 1E7
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_38():
    """Bu Tarama Günlük Periyotta
    RSI (14) >55
    Ortalama Yönsel Endeks (ADX14) >= 19
    Momentum (10) >= 0
    Üstel Hareketli Ortalama (5) < Kapanış Fiyatı
    Üstel Hareketli Ortalama (10) < Kapanış Fiyatı
    Üstel Hareketli Ortalama (20) < Kapanış Fiyatı
    Üstel Hareketli Ortalama (50) < Kapanış Fiyatı
    Üstel Hareketli Ortalama (100) < Kapanış Fiyatı
    Üstel Hareketli Ortalama (200) < Kapanış Fiyatı
    Stokastik %K(14,3,3) >= 50
    Para Akışı (14) > 40
    Chaikin Para Akışı (20) >= -0.7
    Ichimoku Ana Hattı (9,26,52,26) < Fiyat
    Taramasıdır.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI') > 55.0,
        Column('ATR') > 1.0,
        Column('ADX') >= 19.0,
        Column('Mom') >= 0.0,
        Column('EMA5') < Column('close'),
        Column('EMA10') < Column('close'),
        Column('EMA20') < Column('close'),
        Column('EMA50') < Column('close'),
        Column('EMA100') < Column('close'),
        Column('EMA200') < Column('close'),
        Column('Stoch.K') >= 50.0,
        Column('MoneyFlow') >= 40.0,
        Column('ChaikinMoneyFlow') >= -0.7,
        Column('Ichimoku.BLine').crosses_below(Column('close')),
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_39():
    """Bu Tarama Günlük Periyotta
    RSI5 > RSI9
    Hull Haraketli Ortalama (HullMA9) < Kapanış Fiyatı
    Para Akışı (MFI14) > 50
    Üstel Hareketli Ortalama 5 Yukarı Keser Basit Hareketli Ortalama 10
    MACD Seviyesi > MACD Sinyal
    Ichimoku Conversation Line (9,26,52,26) < Kapanış Fiyatı
    Haftalık Ichimoku Ana Hattı (9,26,52,26) < Kapanış Fiyatı
    Bağıl Hacim > 1.00
    Taramasıdır.
    by Özkan FİLİZ"""
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI5') > Column('RSI9'),
        Column('HullMA9') < Column('close'),
        Column('MoneyFlow') >= 50.0,
        Column('EMA5').crosses_above(Column('SMA10')),
        Column('MACD.macd') > Column('MACD.signal'),
        Column('Ichimoku.CLine') < Column('close'),
        Column('Ichimoku.BLine|1W') < Column('close'),
        Column('relative_volume_10d_calc') > 1.0
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_40():
    """Bu Tarama Günlük Periyotta
    Haftalık Performansı 0 ila 15% arasında
    RSI(14) >55
    Göreceli Hacim > 1.0
    Ichimoku Conversation Line (9,26,52,26) < Kapanış Fiyatı
    Hacim Ağırlıklı Ortalama Fiyat <Kapanış Fiyatı
    Emtia Kanal Endeksi (CCI) Yukarı Keser 100
    Taramasıdır.
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('RSI') > 55,
        Column('CCI20').crosses_above(100),
        Column('EMA5') < Column('close'),
        Column('EMA20') < Column('EMA5'),
        Column('EMA50') < Column('EMA20'),
        Column('VWAP') < Column('close'),
        Column('Perf.W').between(0, 15),
        Column('relative_volume_10d_calc|1W') > 1.0,
        Column('Ichimoku.CLine') < (Column('close'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_41():
    """
    EMA 20-50 Taraması by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W',)
              .where(
        Column('Perf.W') < 10,
        Column('change') < 9.5,
        Column('close').crosses_above(Column('EMA20')),
        Column('EMA20') >= Column('EMA50'),
        Column('relative_volume_10d_calc|1W') > 1.7,
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_42():
    """
    ADX+CCI Taraması by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W',)
              .where(
        Column('Perf.W') < 10,
        Column('change') < 9.5,
        Column('ADX') > 20,
        Column('CCI20').crosses_above(100),
        Column('relative_volume_10d_calc') > 1.5,
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_43():
    """
    RSI14 x SMA14 kesişimi by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W',)
              .where(
        Column('Perf.W') < 10,
        Column('change') < 9.5,
        Column('RSI7').crosses_above(Column('RSI')),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D')),
        Column('relative_volume_10d_calc') > 1.5,
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_44():
    """
    MACD + Stokastik RSI Kesişimi by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 10.0,
        Column('change') < 9.5,
        Column('relative_volume_10d_calc') > 1.3,
        Column('MACD.macd').crosses_above(Column('MACD.signal')),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D'))
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_45():
    """
    MACD 0 yukarı kesenler by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 10.0,
        Column('change') < 9.5,
        Column('relative_volume_10d_calc') > 1.5,
        Column('MACD.macd').crosses_above(0),
        Column('MACD.macd') > (Column('MACD.signal')),
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_46():
    """
    P.SAR + EMA by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 10.0,
        Column('change') < 9.5,
        Column('relative_volume_10d_calc') > 1.0,
        Column('P.SAR') < Column('close'),
        Column('EMA10').crosses_above(Column('EMA20')),
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_47():
    """
    Williams %R by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W').between(0, 10),
        Column('change').between(0, 5),
        Column('relative_volume_10d_calc') > 1.0,
        Column('W.R').between(-100, -50),
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_48():
    """
    Düşeni Kıran by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 10,
        Column('change') < 9.5,
        Column('relative_volume_10d_calc') > 1.0,
        Column('EMA5') < Column('close'),
        Column('EMA20') < Column('EMA5'),
        Column('MACD.macd') > Column('MACD.signal'),
        Column('P.SAR').crosses_below(Column('close')),
        Column('CCI20') >= 90,
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_49():
    """
    DAHI by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 10.0,
        Column('relative_volume_10d_calc') > 1.3,
        Column('ADX') > 20,
        Column('ADX+DI') > Column('ADX-DI'),
        Column('Aroon.Up') > 99,
        Column('Aroon.Up') > Column('Aroon.Down'),
        Column('HullMA9') < Column('close'),
        Column('Ichimoku.BLine') < Column('Ichimoku.CLine')
    )
        .get_scanner_data())[1]
    return Tarama


def Tarama_50():
    """
    Flame_Ucgen by Anka_Analiz
    """
    Tarama = (Query().set_markets('turkey')
              .select('name', 'change', 'close', 'volume', 'Perf.W')
              .where(
        Column('Perf.W') < 15.0,
        Column('relative_volume_10d_calc') > 1.0,
        Column('ADX').between(20, 60),
        Column('RSI').between(50, 65),
        Column('Stoch.RSI.K').crosses_above(Column('Stoch.RSI.D')),
    )
        .get_scanner_data())[1]
    return Tarama


redis_params = {
    'host': 'localhost',
    'port': 5679,
    'password': 'mypassword*1xw',
    'decode_responses': True
}
redis_client = redis.Redis(**redis_params)
tarama_listesi = [
    {
        "id": 1,
        "name": Tarama_1,
        "key": "Strateji_1",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık performansı 0 ila 15% arasında, RSI(14) 50 ila 55 arasında, açılış fiyatı güncel fiyatın altında, fiyat yukarı keser Basit Haraketli Ortalama 20."
    },
    {
        "id": 2,
        "name": Tarama_2,
        "key": "Strateji_2",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık performansı 0 ila 15% arasında, RSI(14) 50 ila 55 arasında, ADX(14) 30 ila 60 arasında, Stokastik RSI Hızlı < 20 ve Stokastik RSI Hızlı yukarı keser Stokastik RSI Yavaş."
    },
    {
        "id": 3,
        "name": Tarama_3,
        "key": "Strateji_3",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "RSI(14) > 50, Aylık performansı > 20%, Basit Hareketli Ortalama (5) < Fiyat, Basit Hareketli Ortalama (20) < Fiyat, Basit Hareketli Ortalama (200) < Fiyat, Göreceli Hacim > 1.5, Momentum > 1, Piyasa Değeri > 2 Milyar."
    },
    {
        "id": 4,
        "name": Tarama_4,
        "key": "Strateji_4",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "RSI(14) > 55, Üstel Hareketli Ortalama (5) < Fiyat, Üstel Hareketli Ortalama (20) < Fiyat, Üstel Hareketli Ortalama (50) < Fiyat, Hacim Aırlıklı Hareketli Ortalama < Fiyat, Göreceli Hacim > 1.3, Emtia Kanal Endeksi (CCI20) > 100, Ichimoku Dönüşüm Hattı < Ichimoku Ana Hattı."
    },
    {
        "id": 5,
        "name": Tarama_5,
        "key": "str_5",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Hacim > 10 Milyon, Ortalama Hacim > 10 Milyon, Göreceli Hacim > 1.7, Bollinger Band Upper < Fiyat, Parabolik SAR <Fiyat, Macd > Macd Sinyal, Stokastik RSI Hızlı > Stokastik RSI YAvaş."
    },
    {
        "id": 6,
        "name": Tarama_6,
        "key": "str_6",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Hacim > 5 Milyon, Haftalık Değişim < 0%, Hull Hareketli Ortalama < Fiyat, Stokastik RSI Hızlı yukarı Keser Stokastik RSI Yavaş."
    },
    {
        "id": 7,
        "name": Tarama_7,
        "key": "str_7",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Momentum 1 ila 4 arasında, Göreceli hacim >1.5, Parabolik SAR <Fiyat, Stokastik RSI Hızlı > Stokastik RSI Yavaş, Ichimoku Dönüşüm Hattı > Ichimoku Ana Hattı, Ichimoku Ana Hattı < Fiyat, Ichimoku Senkou A >Ichımoku Senkou B."
    },
    {
        "id": 8,
        "name": Tarama_8,
        "key": "str_8",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Göreceli hacim >1.5, Haftalık Değişim 3 ila 15 arasında, Williams Yüzde Aralığ -100 ila -70 arasında."
    },
    {
        "id": 9,
        "name": Tarama_9,
        "key": "str_9",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Hacim > 1 Milyon, Göreceli hacim >1.5, Haftalık Değişim < 15%, Açılış Fiyatı Güncel Fiyatın Altında, Chaikin Para Akışı -0.2 ila 0.3 arasında, RSI 45 ila 60 arasında, RSI7 < 70, Ichimoku Dönüşüm Hattı < Fiyat, Stokastik RSI Hızlı >= Stokastik RSI Yavaş."
    },
    {
        "id": 10,
        "name": Tarama_10,
        "key": "str_10",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Hacim > 5 Milyon, Göreceli hacim >1.3, Açılış Fiyatı Güncel Fiyatın Altında, Basit Haraketli ortalama 5 >Basit Haraketli Ortalama 100, RSI 45 ila 60 arasında, RSI7 40 ila 65 arasında, Stokastik RSI Hızlı >= Stokastik RSI Yavaş."
    },
    {
        "id": 11,
        "name": Tarama_11,
        "key": "str_11",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Göreceli hacim >1.3, Haftalık Değişim < 15%, Ichimoku Dönüşüm Hattı yukarı keser Ichimoku Ana Hattı."
    },
    {
        "id": 12,
        "name": Tarama_12,
        "key": "str_12",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Açılış Fiyatı Güncel Fiyatın Altında, RSI 30 ila 40 arasında, MACD Yukarı keser MACD Sinyal, MACD Sinyal < 0."
    },
    {
        "id": 13,
        "name": Tarama_13,
        "key": "str_13",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık Değişim < 15%, Fiyat Yukarı Keser Üstel Hareketli Ortalama 20, ADX 30 ila 40 arasında."
    },
    {
        "id": 14,
        "name": Tarama_14,
        "key": "str_14",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık Değişim < 15%, Açılış Fiyatı Güncel Fiyatın Altında, Fiyat Yukarı Keser Basit Hareketli Ortalama 20, RSI 50 ila 55 Arasında."
    },
    {
        "id": 15,
        "name": Tarama_15,
        "key": "str_15",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık Değişim < 15%, Fiyat Yukarı Keser Ichimoku Dönüşüm Hattı, Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş."},
    {
        "id": 16,
        "name": Tarama_16,
        "key": "str_16",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık Değişim < 15%, Üstel Haraketli Ortalama 5 yukarı keser Üstel Hareketli Ortalama 50."},
    {
        "id": 17,
        "name": Tarama_17,
        "key": "str_17",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık Değişim < 15%, MACD < 0, MACD yukarı keser MACD Sinyal."},
    {
        "id": 18,
        "name": Tarama_18,
        "key": "str_18",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Açılış < Üstel Hareketli Ortalama, Fiyat Yukarı keser Üstel Hareketli Ortalama."},
    {
        "id": 19,
        "name": Tarama_19,
        "key": "str_19",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık Değişim < 20%, Fiyat > Basit Hareketli Ortalama 200, Hacim Ağırlıklı Ortalama Fiyat < Fiyat, Hacim Ağırlıklı Hareketli Ortalama < Fiyat."},
    {
        "id": 20,
        "name": Tarama_20,
        "key": "str_20",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Fiyat Yukarı Keser Basit Hareketli Ortalama 50, Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş, Stokastik RSI Yavaş <20."},
    {
        "id": 21,
        "name": Tarama_21,
        "key": "str_21",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Fiyat Yukarı Keser Basit Hareketli Ortalama 50, Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş, Stokastik RSI Yavaş <20."},
    {
        "id": 22,
        "name": Tarama_22,
        "key": "str_22",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Parabolik SAR < Fiyat, Üstel Haraketli Ortalama 10 Yukarı Keser Üstel Haraketli Ortalama 20."},
    {
        "id": 23,
        "name": Tarama_23,
        "key": "str_23",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Fiyat > Bollinger Alt Bandı, En düşük Fiyat <Bollinger Alt Bandı, Stokastik RSI Hızlı >= Stokastik RSI yavaş."},
    {
        "id": 24,
        "name": Tarama_24,
        "key": "str_24",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Pozitif Yönsel Gösterge Yuakrı Keser Negatif Yönsel Gösterge, Göreceli Hacim > 1.3, MACD < MACD Sinyal, Chaikin Para Akışı < 0, Stokastik RSI Hızlı > Stokastik RSI yavaş."},
    {
        "id": 25,
        "name": Tarama_25,
        "key": "str_25",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Haftalık Performansı < 15%, Göreceli Hacim > 1.5, Üstel Haraketli Ortalama 5 < Fiyat, Üstel Haraketli Ortalama 20 < Üstel Haraketli Ortalama 5, Üstel Haraketli Ortalama 50 < Üstel Haraketli Ortalama 20, MACD > MACD Sinyal, Parabolik SAR Aşağı Keser Fiyat, Emtia Kanal Endeksi >=90."},
    {
        "id": 26,
        "name": Tarama_26,
        "key": "str_26",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% RSI 30 ila 55 arasında MACD Yukarı Keser MACD Sinyal MACD Sinyal < 0 Taramasıdır. #Swing Trade 3 nolu strateji taraması olarak da bilinir."},
    {
        "id": 27,
        "name": Tarama_27,
        "key": "str_27",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% ATR < 0.2 MACD Yukarı Keser MACD Sinyal Taramasıdır. #Richards Dennis Kaplumbağası MACD kesişimi olarak da bilinir."},
    {
        "id": 28,
        "name": Tarama_28,
        "key": "str_28",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Fiyat Yukarı Keser Basit Haraketli Ortalama 50 Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş Stokastik RSI Yavaş < 0 Taramasıdır. #Stokastik RSI 40 ı altında al verirken Fiyat yukarı keser SMA50 #bist hisselerinin taranması olarak da bilinir."},
    {
        "id": 29,
        "name": Tarama_29,
        "key": "str_29",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Stokastik RSI Hızlı > Stokastik RSI Yavaş Stokastik RSI Yavaş < 50 Hull Haraketli Ortalama 9 Yukarı Keser Basit Haraketli Ortalama Taramasıdır. #HUll9 X SMA20 Statejisi olarak da bilinir."},
    {
        "id": 30,
        "name": Tarama_30,
        "key": "str_30",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 RSI14 45 ile 60 arasında RSI7 < 70 Stokastik RSI Hızlı > Stokastik RSI Yavaş Chaikin Para Akışı -0.2 ila 0.3 arasında Ichimoku Dönüşüm Hattı Aşağı Keser Fiyat Hull Haraketli Ortalama 9 Küçük Fiyat Taramasıdır. #Fiyat hull9 üzerindeyken tenkanseni yukarı kesen #bist hisselerinin taraması olarakda bilinir."},
    {
        "id": 31,
        "name": Tarama_31,
        "key": "str_31",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 Fiyat >= Basit Haraketli Ortalama 5 Basit Haraketli Ortalama 10 > Basit Haraketli Ortalama20 Macd Yukarı Keser MACD Sinyali Taramasıdır. #Swint Trade 2 nolu stratejisine uyan #bist hisselerinin taraması olarakda bilinir."},
    {
        "id": 32,
        "name": Tarama_32,
        "key": "str_32",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 Fiyat > Üstel Haraketli Ortalama 5 Fiyat > Üstel Haraketli Ortalama 10 Fiyat > Üstel Haraketli Ortalama 20 Fiyat > Üstel Haraketli Ortalama 30 Fiyat > Üstel Haraketli Ortalama 50 Fiyat > Üstel Haraketli Ortalama 100 Fiyat > Üstel Haraketli Ortalama 200 Piyasa Değeri <50M Taramasıdır. #EMA lar üzerinde hacim patlaması yapan #bist hisselerinin taraması olarak da bilinir."},
    {
        "id": 33,
        "name": Tarama_33,
        "key": "str_33",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 Macd Yukarı Keser Macd Sinyal Stokastik RSI Hızlı Yukarı keser Stokastik RSI Yavaş RSI14 50 ile 55 arasında Taramasıdır. #Borsa hisselerine genel bir bakış için kullanılır."},
    {
        "id": 34,
        "name": Tarama_34,
        "key": "str_34",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Macd Yukarı Keser Macd Sinyal Macd Sinyal <0 Stokastik RSI Hızlı Yukarı keser Stokastik RSI Yavaş Stokastik RSI Yavaş <20 Taramasıdır. #Kısa vade için genel tarama olarak kullanılabilir."},
    {
        "id": 35,
        "name": Tarama_35,
        "key": "str_35",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% RSI 30 ila 45 arasında Macd < 0 Macd Yukarı Keser Macd Sinyal Macd Sinyal <0 Taramasıdır. #Kısa vadeli Al-sat yapılabilir #bist hisselerinin taraması olarak da bilinir."},
    {
        "id": 36,
        "name": Tarama_36,
        "key": "str_36",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Macd Yukarı Keser Macd Sinyal Macd Sinyal < 0 Açılış Fiyatı >= Üstel Hareketli Ortalama 5 Açılış Fiyatı >= Üstel Hareketli Ortalama 10 Açılış Fiyatı >= Üstel Hareketli Ortalama 20 Açılış Fiyatı >= Üstel Hareketli Ortalama 50 Açılış Fiyatı >= Üstel Hareketli Ortalama 100 Açılış Fiyatı >= Üstel Hareketli Ortalama 200 Taramasıdır. #EMA lar üzerinde hacim patlaması yapan #bist hisselerinin taraması olarak da bilinir."},
    {
        "id": 37,
        "name": Tarama_37,
        "key": "str_37",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Macd > Macd Sinyal Macd > 0 Macd Yukarı Keser Macd Sinyal Taramasıdır. #Yükselen trendin devam ettiğini gösterir #bist hisselerinin taraması olarak da bilinir."},
    {
        "id": 38,
        "name": Tarama_38,
        "key": "str_38",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Fiyat > Basit Hareketli Ortalama 20 Stokastik RSI Hızlı > Stokastik RSI Yavaş Taramasıdır. #RSI ve Stokastik RSI deneyeneleri genel bir bakış için kullanılır."},
    {
        "id": 39,
        "name": Tarama_39,
        "key": "str_39",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Stokastik RSI Hızlı > Stokastik RSI Yavaş Stokastik RSI Yavaş < 20 Taramasıdır. #Al sinyali olarak kullanılabilir #bist hisselerinin taraması olarak da bilinir."},
    {
        "id": 40,
        "name": Tarama_40,
        "key": "str_40",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Fiyat < Bollinger Alt Bandı Taramasıdır. #Dip tespiti ve al sinyali olarak kullanılabilir #bist hisselerinin taraması olarak da bilinir."},
    {
        "id": 41,
        "name": Tarama_41,
        "key": "str_41",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "EMA 20-50 Taraması by Anka_Analiz"},
    {
        "id": 42,
        "name": Tarama_42,
        "key": "str_42",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "ADX+CCI Taraması by Anka_Analiz"},
    {
        "id": 43,
        "name": Tarama_43,
        "key": "str_43",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "RSI14 x SMA14 kesişimi by Anka_Analiz"},
    {
        "id": 44,
        "name": Tarama_44,
        "key": "str_44",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "MACD + Stokastik RSI Kesişimi by Anka_Analiz"},
    {
        "id": 45,
        "name": Tarama_45,
        "key": "str_45",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "MACD 0 yukarı kesenler by Anka_Analiz"},
    {
        "id": 46,
        "name": Tarama_46,
        "key": "str_46",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "P.SAR + EMA by Anka_Analiz"},
    {
        "id": 47,
        "name": Tarama_47,
        "key": "str_47",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Williams %R by Anka_Analiz"},
    {
        "id": 48,
        "name": Tarama_48,
        "key": "str_48",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Düşeni Kıran by Anka_Analiz"},
    {
        "id": 49,
        "name": Tarama_49,
        "key": "str_49",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "DAHI by Anka_Analiz"},
    {
        "id": 50,
        "name": Tarama_50,
        "key": "str_50",
        "tag": "",
        "indicators": [""],
        "expiration": 20,
        "description": "Flame_Ucgen by Anka_Analiz"
    },
    {
        "id": 51,
        "name": mainCandleMethod,
        "key": "str_51",
        "tag": "candle",
        "indicators": [],
        "expiration": 300,
        "description": "Mum analizi"
    },
    {
        "id": 52,
        "name": dss_bresser_scalper,
        "key": "Dss_Bresser_Scalper",
        "tag": "",
        "indicators": [],
        "expiration": 300,
        "description": "Dss_Bresser_Scalper analiz"
    },
    {
        "id": 53,
        "name": TrendMagic,
        "key": "TrendMagic",
        "tag": "",
        "indicators": [],
        "expiration": 1000,
        "description": "TrendMagic analiz"
    },
    {
        "id": 54,
        "name": ChandlierExit,
        "key": "Chandelier Exit",
        "tag": "",
        "indicators": [],
        "expiration": 1000,
        "description": "Chandelier Exit analiz"
    },
    {
        "id": 55,
        "name": Harsi,
        "key": "Harsi",
        "tag": "",
        "indicators": [],
        "expiration": 1000,
        "description": "heikin ashi rsi"
    },
    {
        "id":56,
        "name" : EstaAnalysis,
        "key": "Esta Analiz",
        "tag" : "",
        "indicators": [],
        "expiration": 1000,
        "description" : "Esta Analiz"
    }
]


def runStrategy(obj: dict):

    selectedStrategy = next(filter(
        lambda x: x["id"] == obj["id"], tarama_listesi), None)
    metod = selectedStrategy["name"]
    sonuc = metod()
    print("sonucccc", sonuc)
    description = selectedStrategy["description"]
    return {
        "data": sonuc,
        "description": description
    }
