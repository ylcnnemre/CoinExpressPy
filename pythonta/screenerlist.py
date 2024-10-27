from tradingview_screener import get_all_symbols,Query



data=Query().select("name").set_markets("germany").get_scanner_data()

print("data=",data)