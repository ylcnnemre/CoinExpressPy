from tradingview_screener import Query, Column
import pandas as pd
import json
from utils import dfToJsonConvert


def getConditions(conditions):
    where_conditions = []
    for condition in conditions:
        col_name = condition['column']
        operator = condition['operator']
        # bazı operatörler değer gerektirmez
        value = condition.get('value', None)
        column = Column(col_name)

        if operator == '>':
            where_conditions.append(column > value)
        elif operator == '<':
            where_conditions.append(column < value)
        elif operator == '==':
            where_conditions.append(column == value)
        elif operator == '!=':
            where_conditions.append(column != value)
        elif operator == 'between':
            where_conditions.append(column.between(value[0], value[1]))
        elif operator == 'crosses_above':
            where_conditions.append(column.crosses_above(value))
        elif operator == 'crosses_below':
            where_conditions.append(column.crosses_below(value))
        elif operator == 'isin':
            where_conditions.append(column.isin(value))
        elif operator == 'like':
            where_conditions.append(column.like(value))
    return where_conditions


def getStockData(market, columns, conditions, tickers: list, offset=0, limit=100, sort={
    "name": "change",
    "ascending": False
}):
    print("selam12313123")
    print("formatCondzx", conditions)
    query = Query().set_markets(market)
    if tickers is not None:
        query.set_tickers(*tickers)
    # Sorguda seçilecek kolonları belirleyin
    query = query.select(*columns)
    query.order_by(sort["name"], ascending=sort["ascending"])
    query.offset(offset).limit(limit)
    if conditions is not None:
        whereCond = getConditions(conditions)
        query = query.where(*whereCond)

    # Verileri alın
    data = query.get_scanner_data()

    result = dfToJsonConvert(data)
    return result


"""  {'column': 'RSI', 'operator': '>', 'value': 50},
    {'column': 'Perf.W', 'operator': 'between', 'value': [0, 15]},
    {'column': 'close', 'operator': 'crosses_above', 'value': 'SMA20'},
    {'column': 'open', 'operator': 'crosses_below', 'value': 'SMA20'},
    {'column': 'type', 'operator': 'isin', 'value': ['stock', 'fund']}, """
