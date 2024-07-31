from tradingview_screener import Query, Column 
from enum import Enum


def getIntervalType(interval):
    bbUpperField=f"BB.upper"
    bbLowerField = f"BB.lower"
    sma20Field=f"SMA20"
    if interval=="4h" : 
        bbUpperField=f"BB.upper|{240}"
        bbLowerField=f"BB.lower|{240}"
        sma20Field=f"SMA20|{240}"
    elif interval=="1h":
        bbUpperField=f"BB.upper|{60}"
        bbLowerField=f"BB.lower|{60}"
        sma20Field=f"SMA20|{60}"
    return {
        "bbUpperField":bbUpperField,
        "bbLowerField": bbLowerField,
        "sma20Field" : sma20Field
    }
    
def BollingerBandStrategy(interval,market="turkey"):

    result=getIntervalType(interval=interval)
    bbUpperField=result["bbUpperField"] 
    bbLowerField=result["bbLowerField"]
    sma20Field=result["sma20Field"]

    Tarama = (Query().set_markets('turkey').limit(400).order_by("market_cap_basic",ascending=False)
              .select('name', 'change',"close", 'volume', 'Perf.W',bbUpperField,bbLowerField,sma20Field).get_scanner_data())[1]
    print( Tarama)
    resultList=[]
    for index,row in Tarama.iterrows():
        bbUpper= row[bbUpperField]
        bbLower=row[bbLowerField]
        sma20=row[sma20Field]
        result = (bbUpper - bbLower) / sma20
        resultList.append({
            "name" : row["name"],
            "bbWidth" : result * 100
        })
    
    liste=sorted(resultList,key=lambda x : x["bbWidth"])
    print(liste)
    return Tarama


def binanceTest():
    q = Query().set_markets("crypto").select('name', 'market', 'close', 'volume').where(
        Column("exchange") == Column("BINANCE") ,
        Column("name").like("USDT"),
        Column("type").isin(["spot"])
    ).limit(50)
    
    data=q.get_scanner_data()
    print("data",data)
binanceTest()