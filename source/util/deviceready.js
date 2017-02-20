import Env from 'util/env';

/**
    @type Promise
    @name deviceReady
    @desc a promise that resolves after the deviceready event has fired in codova.
        Useful for plugins that are written and included outside of Corinthian.
*/
if (window.deviceReady === undefined) {
    window.deviceReady = new Promise(
        resolve => {
            if (Env.app === true) {
                document.addEventListener("deviceready", () => resolve(true));
            } else {
                resolve(true);
            }
        }
    );
}
