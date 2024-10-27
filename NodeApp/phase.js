const { getMoonIllumination } = require("suncalc")
const { Moon } = require("lunarphase-js")

const date1 = new Date("2024-07-5")
const res = getMoonIllumination(date1)




const res2 = Moon.lunarPhase(date1)

const phaseCalc = (phaseValue) => {
    let phaseName;
    if (phaseValue === 0 || phaseValue === 1) {
        phaseName = "New Moon";
    } else if (phaseValue > 0 && phaseValue < 0.25) {
        phaseName = "Waxing Crescent";
    } else if (phaseValue === 0.25) {
        phaseName = "First Quarter";
    } else if (phaseValue > 0.25 && phaseValue < 0.5) {
        phaseName = "Waxing Gibbous";
    } else if (phaseValue === 0.5) {
        phaseName = "Full Moon";
    } else if (phaseValue > 0.5 && phaseValue < 0.75) {
        phaseName = "Waning Gibbous";
    } else if (phaseValue === 0.75) {
        phaseName = "Last Quarter";
    } else if (phaseValue > 0.75 && phaseValue < 1) {
        phaseName = "Waning Crescent";
    }
    return phaseName
}


let phase1 = phaseCalc(res.phase)
