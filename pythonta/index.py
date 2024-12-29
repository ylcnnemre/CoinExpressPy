from tradingview_ta import TA_Handler, Interval
import pandas as pd
import json

def getStockData():
    handler = TA_Handler(
        symbol="THYAO",
        exchange="BIST",
        screener="turkey",
        interval=Interval.INTERVAL_1_DAY
    )
    
    analysis = handler.get_analysis()
    data = {
        "name": "THYAO",
        "close": analysis.indicators["close"],
        "change": analysis.indicators["change"]
    }
    
    return data

res = getStockData()
print("res", res)
