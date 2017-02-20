import regex from 'xregexp';

const chronoSpecial = {
    'yesterday'(date) {
        date.setDate(date.getDate() - 1);
        return date;
    },
    '1 week ago'(date) {
        date.setDate(date.getDate() - 7);
        return date;
    }
};
const chronoUnitRegex = regex("(?<offset>(\\+|\\-)\\d+) (?<unit>\\w+)");
const unitFunction = {
    millisecond(date, milliseconds) {
        date.setMilliseconds(date.getMilliseconds() + milliseconds);
        return date;
    },
    second(date, seconds) {
        date.setSeconds(date.getSeconds() + seconds);
        return date;
    },
    minute(date, minutes) {
        date.setMinutes(date.getMinutes() + minutes);
        return date;
    },
    hour(date, hours) {
        date.setHours(date.getHours() + hours);
        return date;
    },
    day(date, days) {
        date.setDate(date.getDate() + days);
        return date;
    },
    week(date, weeks) {
        date.setDate(date.getDate() + weeks * 7);
        return date;
    },
    month(date, months) {
        const expected = date.getMonth() + months;
        date.setMonth(expected);
        if (date.getMonth() !== expected) {
            date.setDate(0);
        }
        return date;
    },
    year(date, years) {
        date.setFullYear(date.getFullYear() + years);
        return date;
    },
    decade(date, decades) {
        date.setFullYear(date.getFullYear() + decades * 10);
        return date;
    }
};
const startOf = {
    second(date) {
        date.setMilliseconds(0);
    },
    minute(date) {
        startOf.second(date);
        date.setSeconds(0);
    },
    hour(date) {
        startOf.minute(date);
        date.setMinutes(0);
    },
    day(date) {
        startOf.hour(date);
        date.setHours(0);
    },
    week(date) {
        startOf.day(date);
        date.setDate(date.getDate() - date.getDay());
    },
    month(date) {
        startOf.day(date);
        date.setDate(1);
    },
    year(date) {
        startOf.month(date);
        date.setMonth(0);
    }
};
const endOf = {
    second(date) {
        date.setMilliseconds(999);
    },
    minute(date) {
        endOf.second(date);
        date.setSeconds(59);
    },
    hour(date) {
        endOf.minute(date);
        date.setMinutes(59);
    },
    day(date) {
        endOf.hour(date);
        date.setHours(23);
    },
    week(date) {
        endOf.day(date);
        date.setDate(date.getDate() + (6 - date.getDay()));
    },
    month(date) {
        endOf.day(date);
        date.setMonth(date.getMonth() + 1);
        date.setDate(0);
    },
    year(date) {
        endOf.month(date);
        date.setMonth(11);
    }
};
const unitConversion = {
    'millisecond': 'millisecond',
    'milliseconds': 'millisecond',
    'ms': 'millisecond',

    'second': 'second',
    'seconds': 'second',
    's': 'second',

    'minute': 'minute',
    'minutes': 'minute',
    'min': 'minute',

    'hour': 'hour',
    'hours': 'hour',
    'hr': 'hour',

    'day': 'day',
    'days': 'day',
    'ni': 'day',
    'hi': 'day',
    '日': 'day',

    'week': 'week',
    'weeks': 'week',
    'shuu': 'week',
    'しゅう': 'week',
    '週': 'week',

    'month': 'month',
    'months': 'month',

    'year': 'year',
    'years': 'year',

    'decade': 'decade',
    'decades': 'decade'
};
const chronoInfo = {
    days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
};
const chronoFormat = {
    ms: {
        base: date => date.getMilliseconds(),
        padded: date => `00${date.getMilliseconds()}`.slice(-3)
    },
    second: {
        base: date => date.getSeconds(),
        padded: date => `0${date.getSeconds()}`.slice(-2)
    },
    minute: {
        base: date => date.getMinutes(),
        padded: date => `0${date.getMinutes()}`.slice(-2)
    },
    hour: {
        base: date => date.getHours(),
        padded: date => `0${date.getHours()}`.slice(-2),
        "12": date => {
            const hour = date.getHours() % 12;
            if (hour === 0) {
                return 12;
            }
            return hour
        },
        "12padded": date => `0${chronoFormat.hour['12'](date)}`.slice(-2)
    },
    weekday: {
        base: date => date.getDay(),
        short: date => chronoInfo.days[date.getDay()].slice(0, 3),
        full: date => chronoInfo.days[date.getDay()]
    },
    date: {
        base: date => date.getDate(),
        padded: date => `0${date.getDate()}`.slice(-2)
    },
    month: {
        base: date => date.getMonth() + 1,
        short: date => chronoInfo.months[date.getDate()].slice(0, 3),
        full: date => chronoInfo.months[date.getDate()]
    },
    year: {
        base: date => date.getFullYear() % 100,
        full: date => date.getFullYear()
    },
    tod: {
        base: date => (date.getHours() < 12 === true) ? "AM" : "PM"
    }
};
chronoFormat.day = chronoFormat.date;
const chronoCheckUnit = unit => {
    if (unitConversion.hasOwnProperty(unit) === false) {
        throw new Error(`Unrecognized unit: ${unit}`);
    }
};

/* -AxelDoc-
module global {
    @function chrono {
        @desc Creates a new instance of {chrono}.
        @args {
            @arg dateTime [Date]
                This is some long description of the thing
                {year, month} destructuring?
                [title]year[title]
        }
        @return chrono

        @function diff {
            @desc A function that will calculate the amount of time to add to the first argument in order to get the second argument.
            @args {
                @arg startDate [chrono] The date to start from.
                @arg targetDate [chrono] The date to get to.
            }
            @return object
        }
        @function now {
            @desc Returns the current date as a chrono object.
            @args {}
            @return chrono
        }
        @function parse {
            @desc Parses a date string and returns the chrono object represented by it.
            @args {
                @arg dateString [string] The string to parse.
            }
            @return chrono
        }
        @function parseMS {
            @desc Parses a date string generated by C# code and returns the chrono object represented by it.
            @args {
                @arg dateString [string] The string to parse.
            }
            @return chrono
        }
        @function trigger {
            @desc Fires a function after a specified time.
            @args {
                @arg delay [number] The number of milliseconds to wait.
                @arg func [function] The function to call.
            }
            @return chronoTrigger
        }
    }

    object chrono {
        @prop dateObject {
            @desc Gets a copy of the internal Date object.
            @type Date
        }

        @prop unixTimestamp {
            @desc Gets the unix timestamp of the chrono object.
            @type number
        }

        @prop milliseconds {
            @desc Gets the milliseconds of the chrono object.
            @type number
        }
        @prop seconds {
            @desc Gets the seconds of the chrono object.
            @type number
        }
        @prop minutes {
            @desc Gets the minutes of the chrono object.
            @type number
        }
        @prop hours {
            @desc Gets the hours of the chrono object.
            @type number
        }
        @prop weekday {
            @desc Gets the weekday of the chrono object.
            @type number
        }
        @prop date {
            @desc Gets the date of the chrono object. This number is adjusted to the range (0-30) unlike the normal Date object.
            @type number
        }
        @prop months {
            @desc Gets the months of the chrono object.
            @type number
        }
        @prop year {
            @desc Gets the year of the chrono object.
            @type number
        }

        @function shift {
            @desc Shifts the date forward or backward in time.
            @args {
                @arg offset [Number] The amount of time to shift the date.
                @arg unit [String] The units to shift by. Valid values are: 'second', 'minute', 'hour', 'day', 'week', 'month', 'year', 'decade'.
            }
            @args {
                @arg duration [object] An object that will shift the date.
            }
            @return chrono
        }
        @function startOf {
            @desc Moves the date to the start of the specified unit.
            @args {
                @arg unit [string] The unit to move to the start of. Valid values are: 'second', 'minute', 'hour', 'day', 'week', 'month', 'year'.
            }
            @return chrono
        }
        @function format {
            @desc Formats the chrono object using the specified string.
            @args {
                @arg format [string] The string describing the format the date should be put into.
            }
            @return string
        }
    }

    object chronoTrigger {
        @prop status {
            @desc The status of the trigger.
            @type string
        }

        @function cancel {
            @desc Cancels the trigger if it hasn't fired yet.
        }
    }
}
*/
const chrono = (arg = null) => {
    const internalDate = (() => {
        if (arg === null) {
            return new Date();
        }

        if (Date.prototype.isPrototypeOf(arg) === true || (typeof arg === 'number')) {
            return new Date(arg);
        }

        if (arg.__chrono === true) {
            return arg.dateObject;
        }

        if (typeof arg === 'string') {
            arg = arg.toLowerCase();
            if (chronoSpecial.hasOwnProperty(arg) === true) {
                return chronoSpecial[arg](new Date());
            }

            const match = regex.exec(arg, chronoUnitRegex);
            if (match !== null) {
                const {offset, unit} = match;

                chronoCheckUnit(unit);

                return unitFunction[unitConversion[unit]](new Date(), parseInt(offset));
            }

            return new Date(arg);
        }

        const {year = 1970, month = 0, date = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0} = arg;
        return new Date(year, month, date + 1, hours, minutes, seconds, milliseconds);
    })();

    return {
        __chrono: true,
        get dateObject() {
            return new Date(internalDate);
        },
        get unixTimestamp() {
            return internalDate.getTime();
        },

        get milliseconds() {
            return internalDate.getMilliseconds();
        },
        get seconds() {
            return internalDate.getSeconds();
        },
        get minutes() {
            return internalDate.getMinutes();
        },
        get hours() {
            return internalDate.getHours();
        },
        get weekday() {
            return internalDate.getDay();
        },
        get date() {
            return internalDate.getDate() - 1;
        },
        get month() {
            return internalDate.getMonth();
        },
        get year() {
            return internalDate.getFullYear();
        },

        set(props) {
            const {
                year = internalDate.getFullYear(),
                month = internalDate.getMonth(),
                date = internalDate.getDate() - 1,
                hours = internalDate.getHours(),
                minutes = internalDate.getMinutes(),
                seconds = internalDate.getSeconds(),
                milliseconds = internalDate.getMilliseconds()
            } = props;

            return chrono(new Date(year, month, date + 1, hours, minutes, seconds, milliseconds));
        },
        shift(offset, unit) {
            let newDate;
            newDate = new Date(internalDate);

            if (typeof offset === 'object') {
                // if (offset.hasOwnProperty('__chrono_duration') && offset.__chrono_duration === true) {
                //     offset = offset.asObject();
                // }

                for (const [unit, value] of Object.entries(offset)) {
                    chronoCheckUnit(unit);
                    newDate = unitFunction[unitConversion[unit]](newDate, value);
                }

                return chrono(newDate);
            }
            else {
                if (typeof offset === 'string') {
                    const match = regex.exec(offset, chronoUnitRegex);

                    ({offset, unit} = match);
                    chronoCheckUnit(unit);
                    offset = parseInt(offset);
                }

                return chrono(unitFunction[unitConversion[unit]](newDate, offset));
            }
        },
        startOf(unit) {
            const adjustedDate = new Date(internalDate);

            startOf[unit](adjustedDate);

            return chrono(adjustedDate);
        },
        endOf(unit) {
            const adjustedDate = new Date(internalDate);

            endOf[unit](adjustedDate);

            return chrono(adjustedDate);
        },
        format(formatString = null) {
            if (formatString === null) {
                return internalDate.toString();
            }

            if (formatString === 'utc') {
                return internalDate.toUTCString();
            }
            if (formatString === 'locale') {
                return internalDate.toLocaleString();
            }

            return formatString.replace(
                /\{(\w+)(\/(\w+))?\}/g,
                (full, prop, skip, type = 'base') => chronoFormat[prop][type](internalDate)
            );
        },
        toString() {
            return internalDate.toString();
        },
        toJSON() {
            // return internalDate.toJSON();
            return "{month}-{day}-{year/full} {hour/padded}:{minute/padded}:{second/padded}".replace(
                /\{(\w+)(\/(\w+))?\}/g,
                (full, prop, skip, type = 'base') => chronoFormat[prop][type](internalDate)
            );
        }
    };
};
chrono.diff = (first, second) => {
    const internalDate = new Date(second.unixTimestamp - first.unixTimestamp);
    console.log(second.unixTimestamp - first.unixTimestamp);
    console.log(internalDate);

    return {
        milliseconds: internalDate.getMilliseconds(),
        seconds: internalDate.getSeconds(),
        minutes: internalDate.getMinutes(),
        hours: internalDate.getHours(),
        days: internalDate.getDate() - 1,
        months: internalDate.getMonth(),
        years: internalDate.getFullYear() - 1970
    };
};
chrono.now = () => chrono(Date.now());
chrono.parse = string => chrono(Date.parse(string));
chrono.parseMS = string => chrono(Date.parse(string.replace("T", " ")));
chrono.trigger = (delay, func, ...args) => {
    const id = setTimeout(
        () => {
            status = 'fired';
            func(...args);
        },
        delay
    );
    let status;

    status = 'waiting';

    return {
        cancel() {
            status = 'cancelled';
            clearTimeout(id);
        },
        get status() {
            return status;
        }
    };
};
chrono.wait = wait => new Promise(resolve => setTimeout(() => resolve(null), wait));

window.chrono = chrono;
// export default chrono;
