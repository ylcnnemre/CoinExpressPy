import pandas as pd
import json
from typing import List, Any


def dfToJsonConvert(data):
    df = pd.DataFrame(data)
    json_str = df.to_json(orient='records')
    jsondata = json.loads(json_str)
    return jsondata[1]["0"]

def jsonConvertCustom(data):
    df = pd.DataFrame(data)
    json_str = df.to_json(orient='records')
    jsondata = json.loads(json_str)
    return jsondata

def intervalControl(interval):
    if interval == "1m":
        return "|1"
    elif interval == "5m":
        return "|5"
    elif interval == "15m":
        return "|15"
    elif interval == "30m":
        return "|30"
    elif interval == "1h":
        return "|60"
    elif interval == "2h":
        return "|120"
    elif interval == "4h":
        return "|240"
    elif interval == "1w":
        return "|1W"
    elif interval == "1m":
        return "|1M"
    return ""


def convertCondition(data: List[dict[str, Any]], interval="1d"):
    formatted = []
    for i in data:
        intervalTemp = intervalControl(interval)
        tempdata = {}
        if (i["column"] != "name"):
            tempdata["column"] = i["column"] + intervalTemp
            tempdata["operator"] = i["operator"]
            if (isinstance(i["value"], str)):
                tempdata["value"] = i["value"] + intervalTemp
            else:
                tempdata["value"] = i["value"]
        else:
            tempdata["column"] = i["column"]
            tempdata["operator"] = i["operator"]
            tempdata["value"] = i["value"]
        formatted.append(tempdata)
    print("formatted", formatted)
    return formatted
