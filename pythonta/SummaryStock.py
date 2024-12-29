from tradingview_ta import TA_Handler, Interval, Exchange

def getInterval(interval: str):
    if interval == "1d":
        return Interval.INTERVAL_1_DAY
    elif interval == "1w":
        return Interval.INTERVAL_1_WEEK
    elif interval == "1m":
        return Interval.INTERVAL_1_MONTH
    elif interval == "1h":
        return Interval.INTERVAL_1_HOUR
    elif interval == "4h":
        return Interval.INTERVAL_4_HOURS
    elif interval == "15m":
        return Interval.INTERVAL_15_MINUTES
    elif interval == "5m":
        return Interval.INTERVAL_5_MINUTES
    elif interval == "1m":
        return Interval.INTERVAL_1_MINUTE
    else:
        return Interval.INTERVAL_1_DAY


def getSummary(symbol: str, market: str, interval: Interval):
    if market == "crypto":
        stock = TA_Handler(
            symbol=symbol,
            screener="crypto",
            exchange="BINANCE",
            interval=getInterval(interval)
        )
    elif market == "stock":
        stock = TA_Handler(
            symbol=symbol,
            screener="turkey",
            exchange="BIST",
            interval=getInterval(interval)
        )
    else:
        return {
            "error": True,
            "message": "Invalid market"
        }
    return {
        "interval" : interval,
        "summary" : stock.get_analysis().summary,
        "indicators" : stock.get_indicators()
    }
