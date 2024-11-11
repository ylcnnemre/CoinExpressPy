var Moon = {
    phase: function (year, month, day) {
        var c = e = jd = b = 0;

        if (month < 3) {
            year--;
            month += 12;
        }

        ++month;
        c = 365.25 * year;
        e = 30.6 * month;
        jd = c + e + day - 694039.09; // jd is total days elapsed
        jd /= 29.5305882; // divide by the moon cycle
        b = parseInt(jd); // int(jd) -> b, take integer part of jd
        jd -= b; // subtract integer part to leave fractional part of original jd
        b = Math.round(jd * 8); // scale fraction from 0-8 and round

        if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0

        switch (b) {
            case 0:
                return 'new-moon';
                break;
            case 1:
                return 'waxing-crescent-moon';
                break;
            case 2:
                return 'quarter-moon';
                break;
            case 3:
                return 'waxing-gibbous-moon';
                break;
            case 4:
                return 'full-moon';
                break;
            case 5:
                return 'waning-gibbous-moon';
                break;
            case 6:
                return 'last-quarter-moon';
                break;
            case 7:
                return 'waning-crescent-moon';
                break;
        }
    }
};

const phase = Moon.phase('2024', '11', '11');

console.log("axx", phase)