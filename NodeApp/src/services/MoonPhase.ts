import { Hemisphere, Moon } from "lunarphase-js"


const getMoonPhase = (date: Date) => {
    const phase = Moon.lunarPhase(date,{
        hemisphere : Hemisphere.SOUTHERN
    })

    return phase
}

export {
    getMoonPhase
}