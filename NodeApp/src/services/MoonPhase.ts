import { Hemisphere, Moon } from "lunarphase-js"

const getMoonPhase = (date: Date) => {
    const phase = Moon.lunarPhase(date, {
        hemisphere: Hemisphere.NORTHERN
    })

    return phase
}

const phaseCalculator = (date: Date) => {

    /* const phaseValue = getMoonIllumination(date).phase
    let phaseName: string = "";
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
    return phaseName */
}






export {
    getMoonPhase,
    phaseCalculator
}