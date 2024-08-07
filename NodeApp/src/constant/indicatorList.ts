export const mobileIndicatorList: Array<{ indicatorName: string, condition: { name: string, type: string, values?: any }[] }> = [
    {
        indicatorName: "close",
        condition: [
            {
                name: "less",
                type: "select",
                values: ["open", "high", "low",
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                "name": "greater",
                "type": "select",
                values: ["open", "high", "low",
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                name: "crosses_below",
                type: "select",
                values: [
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            },
            {
                name: "crosses_above",
                type: "select",
                values: [
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            }
        ]
    },
    {
        indicatorName: "open",
        condition: [
            {
                name: "less",
                type: "select",
                values: ["close", "high", "low",
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                "name": "greater",
                "type": "select",
                values: ["close", "high", "low",
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                name: "crosses_below",
                type: "select",
                values: [
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            },
            {
                name: "crosses_above",
                type: "select",
                values: [
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            }
        ]
    },
    {
        indicatorName: "Perf.W",
        condition: [
            {
                name: "less",
                type: "input",
            },
            {
                "name": "greater",
                "type": "input",
            },
            {
                name: "between",
                type: "range",
            },
        ]
    },
    {
        indicatorName: "ADX",
        condition: [
            {
                name: "less",
                type: "input",
            },
            {
                "name": "greater",
                "type": "input",
            },
            {
                name: "between",
                type: "range",
            },
        ]
    },

    /* {
        indicatorName: "average_volume_10d_calc",
        condition: [
            {
                "name": "between",
                "type": "range"
            }
        ]
    }, */
    {
        indicatorName: "Stoch.RSI.K",
        condition: [
            {
                name: "less",
                type: "select",
                values: ["Stoch.RSI.D"]
            },
            {
                "name": "greater",
                "type": "select",
                values: ["Stoch.RSI.D"]
            },
            {
                name: "crosses_above",
                type: "select",
                values: ["Stoch.RSI.D"]
            },
            {
                name: "crosses_below",
                type: "select",
                values: ["Stoch.RSI.D"]
            },
        ]
    },
    {
        indicatorName: "relative_volume_10d_calc",
        condition: [
            {
                name: "less",
                type: "input",
            },
            {
                "name": "greater",
                "type": "input",
            },
            {
                name: "between",
                type: "range",
            },
        ]
    },
    {
        indicatorName: "Mom",
        condition: [
            {
                name: "less",
                type: "input",
            },
            {
                "name": "greater",
                "type": "input",
            },
            {
                name: "between",
                type: "range",
            },
        ]
    },
    {
        indicatorName: "W.R",
        condition: [
            {
                name: "less",
                type: "input",
            },
            {
                "name": "greater",
                "type": "input",
            },
            {
                name: "between",
                type: "range",
            },
        ]
    },
    {
        indicatorName: "RSI",

        condition: [{
            name: "less",
            type: "input"
        }, {
            name: "greater",
            type: "input"
        },
        {
            name: "crosses_below",
            type: "input",
        },
        {
            name: "crosses_above",
            type: "input"
        },
        {
            name: "between",
            type: "range"
        }
        ]
    },
    {
        indicatorName: "MACD.macd",
        condition: [
            {
                "name": "less",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.signal"]
            },
            {
                "name": "greater",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.signal"]
            },
            {
                "name": "crosses_below",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.signal"]
            },
            {
                "name": "crosses_above",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.signal"]
            }
        ]
    },
    {
        indicatorName: "MACD.signal",
        condition: [
            {
                "name": "less",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.macd"]
            },
            {
                "name": "greater",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.macd"]
            },
            {
                "name": "crosses_below",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.macd"]
            },
            {
                "name": "crosses_above",
                "type": "select",
                values: ["close", "open", "high", "low", "MACD.macd"]
            }
        ]
    },
    {
        indicatorName: "P.SAR",
        condition: [{
            "name": "less",
            "type": "select",
            values: ["close", "open", "high", "low"]
        },
        {
            "name": "greater",
            "type": "select",
            values: ["close", "open", "high", "low"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "open", "low", "high"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "open", "low", "high"]
        }
        ]
    },
    {
        indicatorName: "BB.lower",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "open", "low", "high"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "open", "low", "high"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "open", "low", "high"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "open", "low", "high"]
        }
        ]
    },
    {
        indicatorName: "BB.upper",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "open", "low", "high"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "open", "low", "high"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "open", "low", "high"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "open", "low", "high"]
        }
        ]
    },
    {
        indicatorName: "Candle",
        condition: [
            {
                name: 'equal',
                type: 'select',
                values: [
                    "Candle.EveningStar",
                    "Candle.HangingMan",
                    "Candle.Engulfing.Bearish",
                    "Candle.Marubozu.White",
                    "Candle.Doji",
                    "Candle.Doji.Dragonfly",
                    "Candle.SpinningTop.White",
                    "Candle.SpinningTop.Black",
                    "Candle.Harami.Bearish",
                    "Candle.ShootingStar",
                    "Candle.AbandonedBaby.Bearish",
                    "Candle.Doji.Gravestone",
                    "Candle.MorningStar",
                    "Candle.AbandonedBaby.Bullish",
                    "Candle.Marubozu.Black",
                    "Candle.Kicking.Bearish",
                    "Candle.Kicking.Bullish",
                    "Candle.InvertedHammer",
                    "Candle.LongShadow.Lower",
                    "Candle.LongShadow.Upper",
                    "Candle.Engulfing.Bullish",
                    "Candle.Harami.Bullish",
                    "Candle.Hammer",
                    "Candle.3WhiteSoldiers",
                    "Candle.3BlackCrows",
                    "Candle.TriStar.Bearish",
                    "Candle.TriStar.Bullish"
                ]
            }
        ]
    },
    {
        indicatorName: "SMA5",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "SMA10",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "SMA20",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "SMA30",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "SMA50",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "SMA100",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "SMA200",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "EMA5",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA10",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA20",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA30",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA50",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA100",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA200",
        condition: [{
            name: "less",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        }, {
            name: "greater",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        },
        {
            name: "crosses_below",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        },
        {
            name: "crosses_above",
            type: "select",
            values: ["close", "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        }
        ]
    },
]