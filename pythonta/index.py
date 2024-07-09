from tradingview_screener import Query, Column
import pandas as pd
import json
from utils import dfToJsonConvert


def getStockData():

    query = Query().set_markets("turkey")
    # Sorguda seçilecek kolonları belirleyin
    query = query.select("name", "close", "change")
    query.offset(0).limit(100)
    # Verileri
    data = query.get_scanner_data()

    return data


res = getStockData()
print("res", res)
