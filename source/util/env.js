/**
    @type Object
    @name Environment
    @desc Contains information about the current environment.
    @property {Boolean} mobile
        True if the current page is on a mobile platform (mobile browser, cordova, etc.).
    @property {Boolean} app
        True if the current page is inside of cordova.
*/
export default Object.freeze({
    mobile: typeof orientation !== 'undefined' || navigator.userAgent.indexOf("Mobile") !== -1,
    app: typeof cordova !== 'undefined'
});
