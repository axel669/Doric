(function () {
    var ajax = function ajax(url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return new Promise(function (resolve, reject) {
            var _options$headers = options.headers,
                headers = _options$headers === undefined ? {} : _options$headers,
                _options$timeout = options.timeout,
                timeout = _options$timeout === undefined ? 0 : _options$timeout,
                _options$type = options.type,
                type = _options$type === undefined ? null : _options$type,
                _options$onProgress = options.onProgress,
                onProgress = _options$onProgress === undefined ? function () {} : _options$onProgress,
                _options$token = options.token,
                token = _options$token === undefined ? null : _options$token;

            var request = new XMLHttpRequest();
            var _options$post = options.post,
                post = _options$post === undefined ? null : _options$post;


            var contentType = null;
            var method = void 0;

            if (token !== null && token.used === false) {
                token.bindTo(request);
            }

            if (post === null) {
                method = 'GET';
            } else {
                method = "POST";
                if (FormData.prototype.isPrototypeOf(post) === false) {
                    // debugger;
                    post = JSON.stringify(post);
                    contentType = "application/json";
                }
            }

            if (type !== null) {
                request.responseType = type;
            }

            request.addEventListener('load', function () {
                if (request.status === 0 || request.status >= 200 && request.status < 300) {
                    resolve({
                        status: request.status,
                        statusText: request.statusText,
                        response: request.response,
                        request: request
                    });
                } else {
                    reject(request);
                }
            });
            request.addEventListener("error", reject);
            request.addEventListener("timeout", reject);
            request.addEventListener("abort", function () {
                return resolve(null);
            });
            request.addEventListener("progress", onProgress);

            try {
                request.open(method, url, true);
                request.timeout = timeout;
                // for (const [header, value] of Object.entries(headers)) {
                //     request.setRequestHeader(header, value);
                // }
                request.setRequestHeader("Accept", "");
                request.setRequestHeader("Accept", "*/*");
                if (contentType !== null) {
                    request.setRequestHeader("Content-Type", contentType);
                }
                request.send(post);
            } catch (error) {
                reject(error);
            }
        });
    };

    ajax.cancelToken = function () {
        var request = null;

        return {
            cancel: function cancel() {
                if (request !== null) {
                    request.abort();
                }
            },

            get used() {
                return request !== null;
            },
            bindTo: function bindTo(req) {
                if (request === null) {
                    request = req;
                }
            }
        };
    };

    var div = document.querySelector("div");
    div.id = "app-container";
    div.innerHTML = 'Ready!';
    ajax(
        'https://axel669.github.io/script/corinthian.js',
        {
            onProgress(evt) {
                console.log(evt);
            }
        }
    ).then(
        res => {
            console.log('loading corinthian');
            eval(res.response);
            return ajax(
                "https://axel669.ngrok.io/app.js",
                {
                    onprogress(evt) {
                        console.log(evt);
                    }
                }
            )
        }
    ).then(
        res => eval(res.response)
    );
})();
