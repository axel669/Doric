import "source/util/app";

App.API = baseURL => ({
    request: (url, options) => ajax(`${baseURL}${url}`, options),
    async requestJSON(url, options) {
        const result = await ajax(`${baseURL}${url}`, options);
        if (result === null) {
            return null;
        }
        return JSON.parse(result.response);
    },
    getURL: url => `${baseURL}${url}`
});
