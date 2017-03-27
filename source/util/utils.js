const warningFunc = errorMessage =>
    () => console.warn(errorMessage);

window.range = {
    array(start, end = null, f = null) {
        const arr = [];

        if (f === null) {
            if (typeof end === 'function') {
                f = end;
                end = null;
            } else {
                f = i => i;
            }
        }
        if (end === null) {
            end = start;
            start = 0;
        }

        while (start < end) {
            arr.push(f(start));
            start += 1;
        }

        return arr;
    },
    *gen(start, end = null, f = null) {
        if (f === null) {
            if (typeof end === 'function') {
                f = end;
                end = null;
            } else {
                f = i => i;
            }
        }
        if (end === null) {
            end = start;
            start = 0;
        }

        while (start < end) {
            yield f(start);
            start += 1;
        }
    }
};

export {
    warningFunc
};
