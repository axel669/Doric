const ajax = (url, options = {}) => new Promise(
    (resolve, reject) => {
        const {
            headers = {},
            timeout = 0,
            type = null,
            onProgress = () => {},
            token = null
        } = options;
        const request = new XMLHttpRequest();
        let {post = null} = options;

        let contentType = null;
        let method;

        if (token !== null && token.used === false) {
            token.bindTo(request);
        }

        if (post === null) {
            method = 'GET';
        } else {
            method = "POST";
            if (FormData.prototype.isPrototypeOf(post) === false) {
                post = JSON.stringify(post);
                contentType = "application/json";
            }
        }

        if (type !== null) {
            request.responseType = type;
        }

        request.addEventListener(
            'load',
            () => {
                if (request.status === 0 || (request.status >= 200 && request.status < 300)) {
                    resolve({
                        status: request.status,
                        statusText: request.statusText,
                        response: request.response,
                        request
                    });
                } else {
                    reject(request);
                }
            }
        );
        request.addEventListener("error", reject);
        request.addEventListener("timeout", reject);
        request.addEventListener("abort", () => resolve(null));
        request.addEventListener("progress", onProgress);

        try {
            request.open(method, url, true);
            request.timeout = timeout;
            for (const [header, value] of Object.entries(headers)) {
                request.setRequestHeader(header, value);
            }
            request.setRequestHeader("Accept", "");
            request.setRequestHeader("Accept", "*/*");
            if (contentType !== null) {
                request.setRequestHeader("Content-Type", contentType);
            }
            request.send(post);
        } catch (error) {
            reject(error);
        }
    }
);

ajax.cancelToken = () => {
    let request = null;

    return {
        cancel() {
            if (request !== null) {
                request.abort();
            }
        },
        get used() {
            return request !== null;
        },
        bindTo(req) {
            if (request === null) {
                request = req;
            }
        }
    };
};

export default ajax;
