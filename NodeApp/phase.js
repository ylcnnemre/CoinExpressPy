const { getMoonIllumination } = require("suncalc")
const { Moon } = require("lunarphase-js")

const date1 = new Date("2024-07-13")
const res = getMoonIllumination(date1)

const res2 = Moon.lunarPhase(date1)

console.log("res", res)

console.log("lunar=> ", res2)