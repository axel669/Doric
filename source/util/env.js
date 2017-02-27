/**
    @type Object
    @name Environment
    @desc Contains information about the current environment.
    @property {Boolean} mobile
        True if the current page is on a mobile platform (mobile browser, cordova, etc.).
    @property {Boolean} app
        True if the current page is inside of cordova.
*/

const eventSupport = (() => {
    let passive = false;
    let once = false;
    const evtChecker = {
        get passive() {
            passive = true;
            return true;
        },
        get once() {
            once = true;
            return true;
        }
    };
    window.addEventListener('load', null, evtChecker);
    return {passive, once};
})();

export default Object.freeze({
    mobile: typeof orientation !== 'undefined' || navigator.userAgent.indexOf("Mobile") !== -1,
    app: typeof cordova !== 'undefined',
    events: eventSupport
});
