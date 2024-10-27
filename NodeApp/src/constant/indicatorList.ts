interface IindicatorList {
    indicatorName: string,
    lang?: {
        en: string
        tr: string
    }
    condition: {
        name: string, langCondition?: {
            en: string,
            tr: string,
        }, type: string, values?: any
    }[]
}

const langConditionList = {
    "less": {
        "en": "less",
        "tr": "küçüktür"
    },
    "greater": {
        "en": "greater",
        "tr": "büyüktür"
    },
    "crosses_above": {
        "en": "crosses_above",
        "tr": "yukarı keser"
    },
    "crosses_below": {
        "en": "crosses_below",
        "tr": "aşağı keser"
    }
}


export const mobileIndicatorList: Array<IindicatorList> = [
    {
        indicatorName: "change",
        lang: {
            "en": "Change",
            "tr": "Değişim",
        },
        condition: [
            {
                name: "less",
                type: "input",
                langCondition: {
                    tr: "küçüktür",
                    en: "less",
                }
            },
            {
                "name": "greater",
                "type": "input",
                langCondition: {
                    tr: "büyüktür",
                    en: "greater",
                },
            },
            {
                name: "between",
                langCondition: {
                    tr: "arasında",
                    en: "between",
                },
                type: "range",
            }
        ]
    },
    {
        indicatorName: "close",
        lang: {
            "en": "Close",
            "tr": "Kapanış",
        },
        condition: [
            {
                name: "less",
                type: "select",
                langCondition: {
                    tr: "küçüktür",
                    en: "less",
                },
                values: [
                    {
                        "key": "open",
                        "tr": "açılış",
                        "en": "open"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                "name": "greater",
                "type": "select",
                langCondition: {
                    tr: "büyüktür",
                    en: "greater",
                },
                values: [
                    {
                        "key": "open",
                        "tr": "açılış",
                        "en": "open"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                name: "crosses_below",
                langCondition: {
                    tr: "aşağı keser",
                    en: "crosess below",
                },
                type: "select",
                values: [
                    {
                        "key": "open",
                        "tr": "açılış",
                        "en": "open"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            },
            {
                name: "crosses_above",
                langCondition: {
                    tr: "yukarı keser",
                    en: "crosse above",
                },
                type: "select",
                values: [
                    {
                        "key": "open",
                        "tr": "açılış",
                        "en": "open"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            }
        ]
    },
    {
        indicatorName: "open",
        lang: {
            "en": "Open",
            "tr": "Açılış",
        },
        condition: [
            {
                name: "less",
                type: "select",
                langCondition: {
                    tr: "küçüktür",
                    en: "less",
                },
                values: [
                    {
                        "key": "close",
                        "tr": "kapanış",
                        "en": "close"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                "name": "greater",
                langCondition: {
                    tr: "büyüktür",
                    en: "greater",
                },
                "type": "select",
                values: [
                    {
                        "key": "close",
                        "tr": "kapanış",
                        "en": "close"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"

                ]
            },
            {
                name: "crosses_below",
                langCondition: {
                    tr: "aşağı keser",
                    en: "crosses below",
                },
                type: "select",
                values: [
                    {
                        "key": "close",
                        "tr": "kapanış",
                        "en": "close"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            },
            {
                name: "crosses_above",
                langCondition: {
                    tr: "yukarı keser",
                    en: "crosses above",
                },
                type: "select",
                values: [
                    {
                        "key": "close",
                        "tr": "kapanış",
                        "en": "close"
                    },
                    {
                        "key": "high",
                        "tr": "yüksek",
                        "en": "high"
                    },
                    {
                        "key": "low",
                        "tr": "düşük",
                        "en": "low"
                    },
                    "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"
                ]
            }
        ]
    },
    {
        indicatorName: "Perf.W",
        lang: {
            "en": "Weekly Performence",
            "tr": "Haftalık Performans",
        },
        condition: [
            {
                name: "less",
                langCondition: {
                    en: "less",
                    tr: "küçüktür"
                },
                type: "input",
            },
            {
                "name": "greater",
                langCondition: {
                    en: "greater",
                    tr: "büyüktür"
                },
                "type": "input",
            },
            {
                name: "between",
                langCondition: {
                    en: "between",
                    tr: "arasında"
                },
                type: "range",
            },
        ]
    },
    {
        indicatorName: "Aroon.Up",
        lang: {
            "en": "Aroon Up",
            "tr": "Aroon Up",
        },
        condition: [
            {
                name: "less",
                langCondition: {
                    en: "less",
                    tr: "küçüktür"
                },
                type: "input",
            },
            {
                "name": "greater",
                langCondition: {
                    en: "greater",
                    tr: "büyüktür"
                },
                "type": "input",
            },
            {
                name: "between",
                langCondition: {
                    en: "between",
                    tr: "arasında"
                },
                type: "range",
            },
        ]
    },
    {
        indicatorName: "Aroon.Down",
        lang: {
            "en": "Aroon Down",
            "tr": "Aroon Down",
        },
        condition: [
            {
                name: "less",
                langCondition: {
                    en: "less",
                    tr: "küçüktür"
                },
                type: "input",
            },
            {
                "name": "greater",
                langCondition: {
                    en: "greater",
                    tr: "büyüktür"
                },
                "type": "input",
            },
            {
                name: "between",
                langCondition: {
                    en: "between",
                    tr: "arasında"
                },
                type: "range",
            },
        ]
    },
    {
        indicatorName: "ADX",
        lang: {
            "en": "ADX(14)",
            "tr": "ADX(14)",
        },
        condition: [
            {
                name: "less",
                langCondition: {
                    en: "less",
                    tr: "küçüktür"
                },
                type: "input",
            },
            {
                "name": "greater",
                langCondition: {
                    en: "greater",
                    tr: "büyüktür"
                },
                "type": "input",
            },
            {
                name: "between",
                langCondition: {
                    en: "between",
                    tr: "arasında"
                },
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
        lang: {
            "en": "Stochastic RSI Fast",
            "tr": "Stokastik RSI Hızlı",
        },
        condition: [
            {
                name: "less",
                type: "select",
                values: [{
                    "key": "Stoch.RSI.D",
                    "en": "Stochastic RSI Slow",
                    "tr": "Stokastik RSI Yavaş"
                }]
            },
            {
                "name": "greater",
                "type": "select",
                values: [{
                    "key": "Stoch.RSI.D",
                    "en": "Stochastic RSI Slow",
                    "tr": "Stokastik RSI Yavaş"
                }]
            },
            {
                name: "crosses_above",
                type: "select",
                values: [{
                    "key": "Stoch.RSI.D",
                    "en": "Stochastic RSI Slow",
                    "tr": "Stokastik RSI Yavaş"
                }]
            },
            {
                name: "crosses_below",
                type: "select",
                values: [{
                    "key": "Stoch.RSI.D",
                    "en": "Stochastic RSI Slow",
                    "tr": "Stokastik RSI Yavaş"
                }]
            },
        ]
    },
    /* {
        indicatorName: "relative_volume_10d_calc",
        lang: {
            "en": "",
            "tr": ""
        },
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
    }, */
    {
        indicatorName: "Mom",
        lang: {
            "en": "Momentum",
            "tr": "Momentum",
        },
        condition: [
            {
                name: "less",
                langCondition: {
                    "en": "less",
                    "tr": "küçüktür"
                },
                type: "input",
            },
            {
                "name": "greater",
                langCondition: {
                    "en": "greater",
                    "tr": "büyüktür"
                },
                "type": "input",
            },
            {
                name: "between",
                langCondition: {
                    "en": "between",
                    "tr": "arasında"
                },
                type: "range",
            },
        ]
    },
    {
        indicatorName: "W.R",
        lang: {
            "en": "Williams Percent Range(14)",
            "tr": "Williams Yüzde Aralığı(14)"
        },
        condition: [
            {
                name: "less",
                langCondition: {
                    "en": "less",
                    "tr": "küçüktür"
                },
                type: "input",
            },
            {
                "name": "greater",
                langCondition: {
                    "en": "greater",
                    "tr": "büyüktür"
                },
                "type": "input",
            },
            {
                name: "between",
                type: "range",
                langCondition: {
                    "en": "between",
                    "tr": "arasında"
                },
            },
        ]
    },
    {
        indicatorName: "RSI",
        lang: {
            "en": "RSI(14)",
            "tr": "RSI(14)"
        },
        condition: [{
            name: "less",
            langCondition: {
                "en": "less",
                "tr": "küçüktür"
            },
            type: "input"
        }, {
            name: "greater",
            langCondition: {
                "en": "greater",
                "tr": "büyüktür"
            },
            type: "input"
        },
        {
            name: "crosses_below",
            langCondition: {
                "en": "crosses below",
                "tr": "aşağı keser"
            },
            type: "input",
        },
        {
            name: "crosses_above",
            langCondition: {
                "en": "crosess above",
                "tr": "yukarı keser"
            },
            type: "input"
        },
        {
            name: "between",
            langCondition: {
                "en": "between",
                "tr": "arasında"
            },
            type: "range"
        }
        ]
    },
    {
        indicatorName: "MACD.macd",
        lang: {
            "en": "MACD Level (12,26)",
            "tr": "MACD Seviyesi (12,26)"
        },
        condition: [
            {
                "name": "less",
                langCondition: {
                    "en": "less",
                    "tr": "küçüktür"
                },
                "type": "select",
                values: [
                    {
                        "key": "close",
                        "en": "close",
                        "tr": "kapanış",
                    },
                    {
                        "key": "open",
                        "en": "open",
                        "tr": "açılış",
                    },
                    {
                        "key": "high",
                        "en": "high",
                        "tr": "yüksek",
                    },
                    {
                        "key": "low",
                        "en": "low",
                        "tr": "düşük"
                    },
                    {
                        "key": "MACD.signal",
                        "en": "MACD Signal (12,26)",
                        "tr": "MACD Sinyali (12,26)"
                    }]
            },
            {
                "name": "greater",
                langCondition: {
                    "en": "greater",
                    tr: "büyüktür",
                },
                "type": "select",
                values: [
                    {
                        "key": "close",
                        "en": "close",
                        "tr": "kapanış",
                    },
                    {
                        "key": "open",
                        "en": "open",
                        "tr": "açılış",
                    },
                    {
                        "key": "high",
                        "en": "high",
                        "tr": "yüksek",
                    },
                    {
                        "key": "low",
                        "en": "low",
                        "tr": "düşük"
                    },
                    {
                        "key": "MACD.signal",
                        "en": "MACD Signal (12,26)",
                        "tr": "MACD Sinyali (12,26)"
                    }
                ]
            },
            {
                "name": "crosses_below",
                langCondition: {
                    "en": "crosess below",
                    tr: "aşağı keser",
                },
                "type": "select",
                values: [
                    {
                        "key": "close",
                        "en": "close",
                        "tr": "kapanış",
                    },
                    {
                        "key": "open",
                        "en": "open",
                        "tr": "açılış",
                    },
                    {
                        "key": "high",
                        "en": "high",
                        "tr": "yüksek",
                    },
                    {
                        "key": "low",
                        "en": "low",
                        "tr": "düşük"
                    },
                    {
                        "key": "MACD.signal",
                        "en": "MACD Signal (12,26)",
                        "tr": "MACD Sinyali (12,26)"
                    }
                ]
            },
            {
                "name": "crosses_above",
                langCondition: {
                    "en": "crosses above",
                    tr: "yukarı keser",
                },
                "type": "select",
                values: [
                    {
                        "key": "close",
                        "en": "close",
                        "tr": "kapanış",
                    },
                    {
                        "key": "open",
                        "en": "open",
                        "tr": "açılış",
                    },
                    {
                        "key": "high",
                        "en": "high",
                        "tr": "yüksek",
                    },
                    {
                        "key": "low",
                        "en": "low",
                        "tr": "düşük"
                    },
                    {
                        "key": "MACD.signal",
                        "en": "MACD Signal (12,26)",
                        "tr": "MACD Sinyali (12,26)"
                    }
                ]
            },
            {
                "name": "between",
                langCondition: {
                    "en": "between",
                    tr: "arasında",
                },
                "type": "range",
            }
        ]
    },
    {
        indicatorName: "MACD.signal",
        lang: {
            "en": "MACD Signal (12,26)",
            "tr": "MACD Sinyali (12,26)"
        },
        condition: [
            {
                "name": "less",
                langCondition: {
                    "en": "less",
                    "tr": "küçüktür"
                },
                "type": "select",
                values: [
                    {
                        "key": "close",
                        "en": "close",
                        "tr": "kapanış",
                    },
                    {
                        "key": "open",
                        "en": "open",
                        "tr": "açılış",
                    },
                    {
                        "key": "high",
                        "en": "high",
                        "tr": "yüksek",
                    },
                    {
                        "key": "low",
                        "en": "low",
                        "tr": "düşük"
                    },
                    {
                        "key": "MACD.macd",
                        "en": "MACD Level (12,26)",
                        "tr": "MACD Seviyesi (12,26)"
                    }
                ]
            },
            {
                "name": "greater",
                "type": "select",
                langCondition: {
                    "en": "greater",
                    "tr": "büyüktür"
                },
                values: [
                    {
                        "key": "close",
                        "en": "close",
                        "tr": "kapanış",
                    },
                    {
                        "key": "open",
                        "en": "open",
                        "tr": "açılış",
                    },
                    {
                        "key": "high",
                        "en": "high",
                        "tr": "yüksek",
                    },
                    {
                        "key": "low",
                        "en": "low",
                        "tr": "düşük"
                    },
                    {
                        "key": "MACD.macd",
                        "en": "MACD Level (12,26)",
                        "tr": "MACD Seviyesi (12,26)"
                    }
                ]
            },
            {
                "name": "crosses_below",
                "type": "select",
                langCondition: {
                    "en": "crosses below",
                    "tr": "aşağı keser"
                },
                values: [
                    {
                        "key": "close",
                        "en": "close",
                        "tr": "kapanış",
                    },
                    {
                        "key": "open",
                        "en": "open",
                        "tr": "açılış",
                    },
                    {
                        "key": "high",
                        "en": "high",
                        "tr": "yüksek",
                    },
                    {
                        "key": "low",
                        "en": "low",
                        "tr": "düşük"
                    },
                    {
                        "key": "MACD.macd",
                        "en": "MACD Level (12,26)",
                        "tr": "MACD Seviyesi (12,26)"
                    }
                ]
            },
            {
                "name": "crosses_above",
                "type": "select",
                langCondition: {
                    "en": "crosses above",
                    "tr": "yukarı keser"
                },
                values: [{
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                },
                {
                    "key": "MACD.macd",
                    "en": "MACD Level (12,26)",
                    "tr": "MACD Seviyesi (12,26)"
                }]
            },
            {
                "name": "between",
                langCondition: {
                    "en": "between",
                    tr: "arasında",
                },
                "type": "range",
            }
        ]
    },
    {
        indicatorName: "P.SAR",
        lang: {
            "en": "Parabolic Sar",
            "tr": "Parabolic Sar"
        },
        condition: [{
            "name": "less",
            "langCondition": {
                "en": "less",
                "tr": "küçükür"
            },
            "type": "select",
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }]
        },
        {
            "name": "greater",
            langCondition: {
                "en": "greater",
                "tr": "büyüktür"
            },
            "type": "select",
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }
            ]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: {
                "en": "crosses below",
                "tr": "aşağı keser"
            },
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }
            ]
        },
        {
            name: "crosses_above",
            type: "select",
            langCondition: {
                "en": "crosses above",
                "tr": "yukarı keser"
            },
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }
            ]
        }
        ]
    },
    {
        indicatorName: "BB.lower",
        lang: {
            "en": "Bollinger Lower Band",
            "tr": "Bollinger Alt Bandı"
        },
        condition: [{
            "name": "less",
            "langCondition": {
                "en": "less",
                "tr": "küçükür"
            },
            "type": "select",
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }]
        },
        {
            "name": "greater",
            "langCondition": {
                "en": "greater",
                "tr": "küçükür"
            },
            "type": "select",
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: {
                "en": "crosses below",
                "tr": "aşağı keser"
            },
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }
            ]
        },
        {
            name: "crosses_above",
            type: "select",
            langCondition: {
                "en": "crosses above",
                "tr": "yukarı keser"
            },
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }
            ]
        }
        ]
    },
    {
        indicatorName: "BB.upper",
        lang: {
            "en": "Bollinger Upper Band",
            "tr": "Bollinger Üst Bandı"
        },
        condition: [{
            "name": "less",
            "langCondition": {
                "en": "less",
                "tr": "küçükür"
            },
            "type": "select",
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }]
        },
        {
            "name": "greater",
            "langCondition": {
                "en": "greater",
                "tr": "küçükür"
            },
            "type": "select",
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: {
                "en": "crosses below",
                "tr": "aşağı keser"
            },
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }
            ]
        },
        {
            name: "crosses_above",
            type: "select",
            langCondition: {
                "en": "crosses above",
                "tr": "yukarı keser"
            },
            values: [
                {
                    "key": "close",
                    "en": "close",
                    "tr": "kapanış",
                },
                {
                    "key": "open",
                    "en": "open",
                    "tr": "açılış",
                },
                {
                    "key": "high",
                    "en": "high",
                    "tr": "yüksek",
                },
                {
                    "key": "low",
                    "en": "low",
                    "tr": "düşük"
                }
            ]
        }
        ]
    },
    {
        indicatorName: "Candle",
        lang: {
            "en": "Candle",
            "tr": "Mum"
        },
        condition: [
            {
                name: 'equal',
                langCondition: {
                    "en": "equal",
                    "tr": "eşittir"
                },
                type: 'select',
                values: [
                    {
                        "key": "Candle.EveningStar",
                        "en": "Evening Star",
                        "tr": "Akşam Yıldızı"
                    },
                    {
                        "key": "Candle.HangingMan",
                        "en": "Hanging Man",
                        "tr": "Asılmış Adam"
                    },
                    {
                        "key": "Candle.Engulfing.Bearish",
                        "en": "Engulfing Bearish",
                        "tr": "Ayı Dönüşü"
                    },
                    {
                        "key": "Candle.Marubozu.White",
                        "en": "Marubozu White",
                        "tr": "Beyaz  Marubozu"
                    },
                    {
                        "key": "Candle.Doji",
                        "en": "Doji",
                        "tr": "Doji"
                    },
                    {
                        "key": "Candle.Doji.Dragonfly",
                        "en": "Dragonfly Doji",
                        "tr": "Dragonfly Doji"
                    },
                    {
                        "key": "Candle.SpinningTop.White",
                        "en": "Spinning Top White",
                        "tr": "Dönen Üst Beyaz"
                    },
                    {
                        "key": "Candle.SpinningTop.Black",
                        "en": "Spinning Top Black",
                        "tr": "Dönen Üst Siyah"
                    },
                    {
                        "key": "Candle.Harami.Bearish",
                        "en": "Bearish Harami",
                        "tr": "Düşen Harami"
                    },
                    {
                        "key": "Candle.ShootingStar",
                        "tr": "Kayan Yıldız",
                        "en": "Shooting Star"
                    },
                    {
                        "key": "Candle.AbandonedBaby.Bullish",
                        "tr": "Kimsesiz Çocuk Boğa",
                        "en": "AbandonedBaby Bullish"
                    },
                    {
                        "key": "Candle.AbandonedBaby.Bearish",
                        "tr": "Kimsesiz Çocuk Ayı",
                        "en": "AbandonedBaby Bearish"
                    },
                    {
                        "key": "Candle.Doji.Gravestone",
                        "tr": "Mezartaşı Doji",
                        "en": "Doji Gravestone"
                    },
                    {
                        "key": "Candle.Doji.Gravestone",
                        "tr": "Mezartaşı Doji",
                        "en": "Doji Gravestone"
                    },
                    {
                        "key": "Candle.MorningStar",
                        "en": "Morning Star",
                        "tr": "Sabah Yıldızı"
                    },
                    {
                        "key": "Candle.Marubozu.Black",
                        "en": "Marubozu Black",
                        "tr": "Siyah  Marubozu"
                    },
                    {
                        "key": "Candle.Kicking.Bearish",
                        "en": "Kicking Bearish",
                        "tr": "Tekme Ayı"
                    },
                    {
                        "key": "Candle.Kicking.Bullish",
                        "en": "Kicking Bullish",
                        "tr": "Tekme Boğa"
                    },
                    {
                        "key": "Candle.InvertedHammer",
                        "en": "Inverted Hammer",
                        "tr": "Ters Çekiç"
                    },
                    {
                        "key": "Candle.LongShadow.Lower",
                        "en": "LongShadow Lower",
                        "tr": "Uzun Alt Gölge"
                    },
                    {
                        "key": "Candle.LongShadow.Upper",
                        "en": "LongShadow Upper",
                        "tr": "Uzun Üst Gölge"
                    },
                    {
                        "key": "Candle.Engulfing.Bullish",
                        "en": "Engulfing Bullish",
                        "tr": "Yükselen Engulfing"
                    },
                    {
                        "key": "Candle.Harami.Bullish",
                        "en": "Bullish Harami",
                        "tr": "Yükselen Harami"
                    },
                    {
                        "key": "Candle.Hammer",
                        "en": "Hammer",
                        "tr": "Çekiç"
                    },
                    {
                        "key": "Candle.3WhiteSoldiers",
                        "en": "three white soldier",
                        "tr": "Üç Beyaz Asker"
                    },
                    {
                        "key": "Candle.3BlackCrows",
                        "en": "three black crows",
                        "tr": "Üç Siyah Karga"
                    },
                    {
                        "key": "Candle.TriStar.Bearish",
                        "en": "TriStar Bearish",
                        "tr": "Üç Yıldız Ayı"
                    },
                    {
                        "key": "Candle.TriStar.Bullish",
                        "en": "TriStar Bullish",
                        "tr": "Üç Yıldız Boğa"
                    },

                ]
            }
        ]
    },
    {
        indicatorName: "HullMA9",
        lang: {
            "en": "HullHO(9)",
            "tr": "HullMA(9)"
        },
        condition: [{
            name: "less",
            langCondition: {
                "en": "less",
                "tr": "küçüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            langCondition: {
                en: "greater",
                tr: "büyüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: {
                "en": "crosses below",
                "tr": "yukarı keser"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: {
                "tr": "yukarı keser",
                "en": "crosses above"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }
                , "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "HullMA20",
        lang: {
            "en": "HullHO(20)",
            "tr": "HullMA(20)"
        },
        condition: [{
            name: "less",
            langCondition: {
                "en": "less",
                "tr": "küçüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            langCondition: {
                en: "greater",
                tr: "büyüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: {
                "en": "crosses below",
                "tr": "yukarı keser"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: {
                "tr": "yukarı keser",
                "en": "crosses above"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }
                , "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "SMA5",
        lang: {
            "en": "SMA5",
            "tr": "SMA5"
        },
        condition: [{
            name: "less",
            langCondition: {
                "en": "less",
                "tr": "küçüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            langCondition: {
                en: "greater",
                tr: "büyüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: {
                "en": "crosses below",
                "tr": "yukarı keser"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: {
                "tr": "yukarı keser",
                "en": "crosses above"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }
                , "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "SMA10",
        lang: {
            "en": "SMA10",
            "tr": "SMA10"
        },
        condition: [{
            name: "less",
            langCondition: {
                "en": "less",
                "tr": "küçüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            langCondition: {
                "en": "greater",
                "tr": "büyüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: {
                "en": "crosses below",
                "tr": "aşağı keser"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: {
                "en": "crosses above",
                "tr": "yukarı keser"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "SMA20",
        lang: {
            "en": "SMA20",
            "tr": "SMA20"
        },
        condition: [{
            name: "less",
            langCondition: {
                en: "less",
                tr: "küçüktür"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: {
                en: "greater",
                tr: "büyüktür"
            },
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: {
                en: "crosses below",
                tr: "aşağı keser"
            },
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            langCondition: {
                en: "crosses above",
                tr: "yukarı keser"
            },
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "SMA30",
        lang: {
            "en": "SMA30",
            "tr": "SMA30"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: {
                en: "less",
                tr: "küçüktür"
            },
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: {
                en: "greater",
                tr: "büyüktür"
            },
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: {
                en: "crosses below",
                tr: "aşağı keser"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: {
                en: "crosses above",
                tr: "yukarı keser"
            },
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "SMA50",
        lang: {
            "en": "SMA50",
            "tr": "SMA50"
        },
        condition: [{
            name: "less",
            langCondition: langConditionList["less"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: langConditionList["crosses_below"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "SMA100",
        lang: {
            "en": "SMA100",
            "tr": "SMA100",
        },
        condition: [{
            name: "less",
            langCondition: langConditionList["less"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: langConditionList["crosses_below"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "SMA200",
        lang: {
            "en": "SMA200",
            "tr": "SMA200",
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            langCondition: langConditionList["greater"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: langConditionList["crosses_below"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]

    },
    {
        indicatorName: "EMA5",
        lang: {
            "en": "EMA5",
            "tr": "EMA5"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: langConditionList["crosses_below"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA10",
        lang: {
            "en": "EMA10",
            "tr": "EMA10"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, , "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, , "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: langConditionList["crosses_below"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, , "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA20", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA20",
        lang: {
            "en": "EMA20",
            "tr": "EMA20"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: langConditionList["crosses_below"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA30", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA30",
        lang: {
            en: "EMA30",
            tr: "EMA30"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: langConditionList["crosses_below"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA50", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA50",
        lang: {
            "en": "EMA50",
            "tr": "EMA50"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: langConditionList["crosses_below"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        },
        {
            name: "crosses_above",
            type: "select",
            langCondition: langConditionList["crosses_above"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA100", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA100",
        lang: {
            "en": "EMA100",
            "tr": "EMA100"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        }, {
            name: "greater",
            langCondition: langConditionList["greater"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        },
        {
            name: "crosses_below",
            langCondition: langConditionList["crosses_below"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        },
        {
            name: "crosses_above",
            langCondition: langConditionList["crosses_above"],
            type: "select",
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA200"]
        }
        ]
    },
    {
        indicatorName: "EMA200",
        lang: {
            "en": "EMA200",
            "tr": "EMA200"
        },
        condition: [{
            name: "less",
            type: "select",
            langCondition: langConditionList["less"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        }, {
            name: "greater",
            type: "select",
            langCondition: langConditionList["greater"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        },
        {
            name: "crosses_below",
            type: "select",
            langCondition: langConditionList["crosses_below"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        },
        {
            name: "crosses_above",
            type: "select",
            langCondition: langConditionList["crosses_above"],
            values: [{
                "key": "close",
                "en": "close",
                "tr": "kapanış",
            },
            {
                "key": "open",
                "en": "open",
                "tr": "açılış",
            },
            {
                "key": "high",
                "en": "high",
                "tr": "yüksek",
            },
            {
                "key": "low",
                "en": "low",
                "tr": "düşük"
            }, "SMA5", "SMA10", "SMA20", "SMA30", "SMA50", "SMA100", "SMA200", "EMA5", "EMA10", "EMA20", "EMA30", "EMA50", "EMA100"]
        }
        ]
    },
]