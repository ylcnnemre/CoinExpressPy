/*  const tarama_listesi = [
    {
        "key": "Strateji_1",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık performansı 0 ila 15% arasında, RSI(14) 50 ila 55 arasında, açılış fiyatı güncel fiyatın altında, fiyat yukarı keser Basit Haraketli Ortalama 20."
    },
    {
        "key": "Strateji_2",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık performansı 0 ila 15% arasında, RSI(14) 50 ila 55 arasında, ADX(14) 30 ila 60 arasında, Stokastik RSI Hızlı < 20 ve Stokastik RSI Hızlı yukarı keser Stokastik RSI Yavaş."
    },
    {
        "key": "Strateji_3",
        "tag": "",
        "indicators": [""],
        "description": "RSI(14) > 50, Aylık performansı > 20%, Basit Hareketli Ortalama (5) < Fiyat, Basit Hareketli Ortalama (20) < Fiyat, Basit Hareketli Ortalama (200) < Fiyat, Göreceli Hacim > 1.5, Momentum > 1, Piyasa Değeri > 2 Milyar."
    },
    {
        "key": "Strateji_4",
        "tag": "",
        "indicators": [""],
        "description": "RSI(14) > 55, Üstel Hareketli Ortalama (5) < Fiyat, Üstel Hareketli Ortalama (20) < Fiyat, Üstel Hareketli Ortalama (50) < Fiyat, Hacim Aırlıklı Hareketli Ortalama < Fiyat, Göreceli Hacim > 1.3, Emtia Kanal Endeksi (CCI20) > 100, Ichimoku Dönüşüm Hattı < Ichimoku Ana Hattı."
    },
    {
        "key": "Strateji_5",
        "tag": "",
        "indicators": [""],
        "description": "Hacim > 10 Milyon, Ortalama Hacim > 10 Milyon, Göreceli Hacim > 1.7, Bollinger Band Upper < Fiyat, Parabolik SAR <Fiyat, Macd > Macd Sinyal, Stokastik RSI Hızlı > Stokastik RSI YAvaş."
    },
    {
        "key": "Strateji_6",
        "tag": "",
        "indicators": [""],
        "description": "Hacim > 5 Milyon, Haftalık Değişim < 0%, Hull Hareketli Ortalama < Fiyat, Stokastik RSI Hızlı yukarı Keser Stokastik RSI Yavaş."
    },
    {
        "key": "Strateji_7",
        "tag": "",
        "indicators": [""],
        "description": "Momentum 1 ila 4 arasında, Göreceli hacim >1.5, Parabolik SAR <Fiyat, Stokastik RSI Hızlı > Stokastik RSI Yavaş, Ichimoku Dönüşüm Hattı > Ichimoku Ana Hattı, Ichimoku Ana Hattı < Fiyat, Ichimoku Senkou A >Ichımoku Senkou B."
    },
    {
        "key": "Strateji_8",
        "tag": "",
        "indicators": [""],
        "description": "Göreceli hacim >1.5, Haftalık Değişim 3 ila 15 arasında, Williams Yüzde Aralığ -100 ila -70 arasında."
    },
    {
        "key": "Strateji_9",
        "tag": "",
        "indicators": [""],
        "description": "Hacim > 1 Milyon, Göreceli hacim >1.5, Haftalık Değişim < 15%, Açılış Fiyatı Güncel Fiyatın Altında, Chaikin Para Akışı -0.2 ila 0.3 arasında, RSI 45 ila 60 arasında, RSI7 < 70, Ichimoku Dönüşüm Hattı < Fiyat, Stokastik RSI Hızlı >= Stokastik RSI Yavaş."
    },
    {
        "key": "Strateji_10",
        "tag": "",
        "indicators": [""],
        "description": "Hacim > 5 Milyon, Göreceli hacim >1.3, Açılış Fiyatı Güncel Fiyatın Altında, Basit Haraketli ortalama 5 >Basit Haraketli Ortalama 100, RSI 45 ila 60 arasında, RSI7 40 ila 65 arasında, Stokastik RSI Hızlı >= Stokastik RSI Yavaş."
    },
    {
        "key": "Strateji_11",
        "tag": "",
        "indicators": [""],
        "description": "Göreceli hacim >1.3, Haftalık Değişim < 15%, Ichimoku Dönüşüm Hattı yukarı keser Ichimoku Ana Hattı."
    },
    {
        "key": "Strateji_12",
        "tag": "",
        "indicators": [""],
        "description": "Açılış Fiyatı Güncel Fiyatın Altında, RSI 30 ila 40 arasında, MACD Yukarı keser MACD Sinyal, MACD Sinyal < 0."
    },
    {
        "key": "Strateji_13",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık Değişim < 15%, Fiyat Yukarı Keser Üstel Hareketli Ortalama 20, ADX 30 ila 40 arasında."
    },
    {
        "key": "Strateji_14",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık Değişim < 15%, Açılış Fiyatı Güncel Fiyatın Altında, Fiyat Yukarı Keser Basit Hareketli Ortalama 20, RSI 50 ila 55 Arasında."
    },
    {
        "key": "Strateji_15",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık Değişim < 15%, Fiyat Yukarı Keser Ichimoku Dönüşüm Hattı, Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş."
    },
    {
        "key": "Strateji_16",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık Değişim < 15%, Üstel Haraketli Ortalama 5 yukarı keser Üstel Hareketli Ortalama 50."
    },
    {
        "key": "Strateji_17",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık Değişim < 15%, MACD < 0, MACD yukarı keser MACD Sinyal."
    },
    {
        "key": "Strateji_18",
        "tag": "",
        "indicators": [""],
        "description": "Açılış < Üstel Hareketli Ortalama, Fiyat Yukarı keser Üstel Hareketli Ortalama."
    },
    {
        "key": "Strateji_19",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık Değişim < 20%, Fiyat > Basit Hareketli Ortalama 200, Hacim Ağırlıklı Ortalama Fiyat < Fiyat, Hacim Ağırlıklı Hareketli Ortalama < Fiyat."
    },
    {
        "key": "Strateji_20",
        "tag": "",
        "indicators": [""],
        "description": "Fiyat Yukarı Keser Basit Hareketli Ortalama 50, Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş, Stokastik RSI Yavaş <20."
    },
    {
        "key": "Strateji_21",
        "tag": "",
        "indicators": [""],
        "description": "Fiyat Yukarı Keser Basit Hareketli Ortalama 50, Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş, Stokastik RSI Yavaş <20."
    },
    {
        "key": "Strateji_22",
        "tag": "",
        "indicators": [""],
        "description": "Parabolik SAR < Fiyat, Üstel Haraketli Ortalama 10 Yukarı Keser Üstel Haraketli Ortalama 20."
    },
    {
        "key": "Strateji_23",
        "tag": "",
        "indicators": [""],
        "description": "Fiyat > Bollinger Alt Bandı, En düşük Fiyat <Bollinger Alt Bandı, Stokastik RSI Hızlı >= Stokastik RSI yavaş."
    },
    {
        "key": "Strateji_24",
        "tag": "",
        "indicators": [""],
        "description": "Pozitif Yönsel Gösterge Yuakrı Keser Negatif Yönsel Gösterge, Göreceli Hacim > 1.3, MACD < MACD Sinyal, Chaikin Para Akışı < 0, Stokastik RSI Hızlı > Stokastik RSI yavaş."
    },
    {
        "key": "Strateji_25",
        "tag": "",
        "indicators": [""],
        "description": "Haftalık Performansı < 15%, Göreceli Hacim > 1.5, Üstel Haraketli Ortalama 5 < Fiyat, Üstel Haraketli Ortalama 20 < Üstel Haraketli Ortalama 5, Üstel Haraketli Ortalama 50 < Üstel Haraketli Ortalama 20, MACD > MACD Sinyal, Parabolik SAR Aşağı Keser Fiyat, Emtia Kanal Endeksi >=90."
    },
    {
        "key": "Strateji_26",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% RSI 30 ila 55 arasında MACD Yukarı Keser MACD Sinyal MACD Sinyal < 0 Taramasıdır. #Swing Trade 3 nolu strateji taraması olarak da bilinir."
    },
    {
        "key": "Strateji_27",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% ATR < 0.2 MACD Yukarı Keser MACD Sinyal Taramasıdır. #Richards Dennis Kaplumbağası MACD kesişimi olarak da bilinir."
    },
    {
        "key": "Strateji_28",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Fiyat Yukarı Keser Basit Haraketli Ortalama 50 Stokastik RSI Hızlı Yukarı Keser Stokastik RSI Yavaş Stokastik RSI Yavaş < 0 Taramasıdır. #Stokastik RSI 40 ı altında al verirken Fiyat yukarı keser SMA50 #bist hisselerinin taranması olarak da bilinir."
    },
    {
        "key": "Strateji_29",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Stokastik RSI Hızlı > Stokastik RSI Yavaş Stokastik RSI Yavaş < 50 Hull Haraketli Ortalama 9 Yukarı Keser Basit Haraketli Ortalama Taramasıdır. #HUll9 X SMA20 Statejisi olarak da bilinir."
    },
    {
        "key": "Strateji_30",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 RSI14 45 ile 60 arasında RSI7 < 70 Stokastik RSI Hızlı > Stokastik RSI Yavaş Chaikin Para Akışı -0.2 ila 0.3 arasında Ichimoku Dönüşüm Hattı Aşağı Keser Fiyat Hull Haraketli Ortalama 9 Küçük Fiyat Taramasıdır. #Fiyat hull9 üzerindeyken tenkanseni yukarı kesen #bist hisselerinin taraması olarakda bilinir."
    },
    {
        "key": "Strateji_31",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 Fiyat >= Basit Haraketli Ortalama 5 Basit Haraketli Ortalama 10 > Basit Haraketli Ortalama20 Macd Yukarı Keser MACD Sinyali Taramasıdır. #Swint Trade 2 nolu stratejisine uyan #bist hisselerinin taraması olarakda bilinir."
    },
    {
        "key": "Strateji_32",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 Fiyat > Üstel Haraketli Ortalama 5 Fiyat > Üstel Haraketli Ortalama 10 Fiyat > Üstel Haraketli Ortalama 20 Fiyat > Üstel Haraketli Ortalama 30 Fiyat > Üstel Haraketli Ortalama 50 Fiyat > Üstel Haraketli Ortalama 100 Fiyat > Üstel Haraketli Ortalama 200 Piyasa Değeri <50M Taramasıdır. #EMA lar üzerinde hacim patlaması yapan #bist hisselerinin taraması olarak da bilinir."
    },
    {
        "key": "Strateji_33",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Göreceli Hacim > 1.0 Macd Yukarı Keser Macd Sinyal Stokastik RSI Hızlı Yukarı keser Stokastik RSI Yavaş RSI14 50 ile 55 arasında Taramasıdır. #Borsa hisselerine genel bir bakış için kullanılır."
    },
    {
        "key": "Strateji_34",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Macd Yukarı Keser Macd Sinyal Macd Sinyal <0 Stokastik RSI Hızlı Yukarı keser Stokastik RSI Yavaş Stokastik RSI Yavaş <20 Taramasıdır. #Kısa vade için genel tarama olarak kullanılabilir."
    },
    {

        "key": "Strateji_35",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% RSI 30 ila 45 arasında Macd < 0 Macd Yukarı Keser Macd Sinyal Macd Sinyal <0 Taramasıdır. #Kısa vadeli Al-sat yapılabilir #bist hisselerinin taraması olarak da bilinir."
    },
    {

        "key": "Strateji_36",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Macd Yukarı Keser Macd Sinyal Macd Sinyal < 0 Açılış Fiyatı >= Üstel Hareketli Ortalama 5 Açılış Fiyatı >= Üstel Hareketli Ortalama 10 Açılış Fiyatı >= Üstel Hareketli Ortalama 20 Açılış Fiyatı >= Üstel Hareketli Ortalama 50 Açılış Fiyatı >= Üstel Hareketli Ortalama 100 Açılış Fiyatı >= Üstel Hareketli Ortalama 200 Taramasıdır. #EMA lar üzerinde hacim patlaması yapan #bist hisselerinin taraması olarak da bilinir."
    },
    {

        "key": "Strateji_37",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Macd > Macd Sinyal Macd > 0 Macd Yukarı Keser Macd Sinyal Taramasıdır. #Yükselen trendin devam ettiğini gösterir #bist hisselerinin taraması olarak da bilinir."
    },
    {

        "key": "Strateji_38",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Fiyat > Basit Hareketli Ortalama 20 Stokastik RSI Hızlı > Stokastik RSI Yavaş Taramasıdır. #RSI ve Stokastik RSI deneyeneleri genel bir bakış için kullanılır."
    },
    {

        "key": "Strateji_39",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Stokastik RSI Hızlı > Stokastik RSI Yavaş Stokastik RSI Yavaş < 20 Taramasıdır. #Al sinyali olarak kullanılabilir #bist hisselerinin taraması olarak da bilinir."
    },
    {

        "key": "Strateji_40",
        "tag": "",
        "indicators": [""],
        "description": "Bu Tarama Günlük Periyotta Haftalık Performansı < 15% Fiyat < Bollinger Alt Bandı Taramasıdır. #Dip tespiti ve al sinyali olarak kullanılabilir #bist hisselerinin taraması olarak da bilinir."
    },
    {

        "key": "Strateji_41",
        "tag": "",
        "indicators": [""],
        "description": "EMA 20-50 Taraması by Anka_Analiz"
    },
    {

        "key": "Strateji_42",
        "tag": "",
        "indicators": [""],
        "description": "ADX+CCI Taraması by Anka_Analiz"
    },
    {

        "key": "Strateji_43",
        "tag": "",
        "indicators": [""],
        "description": "RSI14 x SMA14 kesişimi by Anka_Analiz"
    },
    {

        "key": "Strateji_44",
        "tag": "",
        "indicators": [""],
        "description": "MACD + Stokastik RSI Kesişimi by Anka_Analiz"
    },
    {

        "key": "Strateji_45",
        "tag": "",
        "indicators": [""],
        "description": "MACD 0 yukarı kesenler by Anka_Analiz"
    },
    {

        "key": "Strateji_46",
        "tag": "",
        "indicators": [""],
        "description": "P.SAR + EMA by Anka_Analiz"
    },
    {

        "key": "Strateji_47",
        "tag": "",
        "indicators": [""],
        "description": "Williams %R by Anka_Analiz"
    },
    {

        "key": "Strateji_48",
        "tag": "",
        "indicators": [""],
        "description": "Düşeni Kıran by Anka_Analiz"
    },
    {

        "key": "Strateji_49",
        "tag": "",
        "indicators": [""],
        "description": "DAHI by Anka_Analiz"
    },
    {
        "key": "Strateji_50",
        "tag": "",
        "indicators": [""],
        "description": "Flame_Ucgen by Anka_Analiz"
    },
    {
        "key": "Strateji_51",
        "tag": "candle",
        "indicators": [],
        "description": "Mum analizi"
    }
]

liste = tarama_listesi.map((el, index) => {
    return {
        id: index + 1,
        ...el,
    }
})

console.log("liste", liste) */

/* const { Moon } = require("lunarphase-js")
const date = new Date()
date.setDate(date.getDate() + 4)
const phase = Moon.lunarPhase(date)
const age = Moon.lunarAge(date)
const percent = Moon.lunarAgePercent(date)
const distance = Moon.lunarDistance(date)
console.log("date => ", date)
console.log("phaxx", phase)
console.log("age => ", age)
console.log("percent=> ", percent)
console.log("distance=>", distance) */


/* const phaseFormat = (phaseNumber) => {
    if (phaseNumber == 0){
        return "New Moon"
    }
    else if(phaseNumber > )
} */

/* const SunCalc = require("suncalc")

const sunc = SunCalc.getMoonIllumination(date)

console.log("sunc", sunc) */

const date = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log(dayNames[date.getDay()]);  // "Monday" (Pazartesi)