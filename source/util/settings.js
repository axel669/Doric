const getStorage = (storage) => {
    return {
        read(name, defaultValue) {
            let value = storage.getItem(name);
            if (value === null) {
                return defaultValue;
            }
            return JSON.parse(value);
        },
        write(name, value) {
            storage.setItem(
                name,
                JSON.stringify(value)
            );
        },
        has(name) {
            return storage.getItem(name) !== null;
        },
        remove(name) {
            storage.removeItem(name);
        },
        clear() {
            storage.clear();
        }
    };
};

window.AppSettings = getStorage(localStorage);
window.AppSession = getStorage(sessionStorage);
