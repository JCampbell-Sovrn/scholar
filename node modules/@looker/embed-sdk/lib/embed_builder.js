"use strict";
/*

 MIT License

 Copyright (c) 2019 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
var embed_1 = require("./embed");
function stringify(params) {
    var result = [];
    for (var key in params) {
        var value = params[key];
        var valueArray = Array.isArray(value) ? value : [value];
        for (var _i = 0, valueArray_1 = valueArray; _i < valueArray_1.length; _i++) {
            var singleValue = valueArray_1[_i];
            result.push("".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(singleValue)));
        }
    }
    return result.join('&');
}
function escapeFilterParam(param) {
    return param.replace(/,/g, '^,');
}
/**
 * The builder class for [[EmbedClient]]. Contains methods for defining the properties of embedded
 * Looker content.
 */
var EmbedBuilder = /** @class */ (function () {
    /**
     * @hidden
     */
    function EmbedBuilder(_hostSettings, _type, _endpoint, _clientConstructor) {
        this._hostSettings = _hostSettings;
        this._type = _type;
        this._endpoint = _endpoint;
        this._clientConstructor = _clientConstructor;
        this._handlers = {};
        this._appendTo = null;
        this._sandboxAttrs = [];
        this._allowAttrs = [];
        this._classNames = [];
        this._frameBorder = '0';
        this._suffix = '';
        if (this.sandboxedHost) {
            this._params = {
                embed_domain: this._hostSettings.apiHost,
                sandboxed_host: 'true',
                sdk: '2',
            };
        }
        else {
            var embedDomain = window.location.origin;
            this._params = {
                embed_domain: embedDomain,
                sdk: '2',
            };
        }
    }
    /**
     * Value for the `frame-border` attribute of an embedded iframe
     */
    EmbedBuilder.prototype.withFrameBorder = function (attr) {
        this._frameBorder = attr;
        return this;
    };
    /**
     * @hidden
     *
     * @param id
     */
    EmbedBuilder.prototype.withId = function (id) {
        this._id = id;
        return this;
    };
    /**
     * Allows manual control of URL parameters for the embedded content
     *
     * @param params Additional URL parameters
     * created by ID.
     */
    EmbedBuilder.prototype.withParams = function (params) {
        for (var key in params) {
            this._params[key] = params[key];
        }
        return this;
    };
    /**
     * Allows specifying initial filters to apply to the embedded content.
     *
     * @filters Filters to apply
     */
    EmbedBuilder.prototype.withFilters = function (filters, escape) {
        if (escape === void 0) { escape = false; }
        if (this.type === 'dashboard') {
            for (var key in filters) {
                this._params[key] = escape
                    ? escapeFilterParam(filters[key])
                    : filters[key];
            }
        }
        else {
            for (var key in filters) {
                this._params["f[".concat(key, "]")] = escape
                    ? escapeFilterParam(filters[key])
                    : filters[key];
            }
        }
        return this;
    };
    /**
     * Allows specifying sandbox attributes for an embedded content iframe. Sandbox attributes
     * should include `allow-scripts` or embedded content will not execute.
     * @param attr one or more sandbox attributes for an embedded content iframe.
     */
    EmbedBuilder.prototype.withSandboxAttr = function () {
        var attr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attr[_i] = arguments[_i];
        }
        this._sandboxAttrs = this._sandboxAttrs.concat(attr);
        return this;
    };
    /**
     * Allows specifying allow attributes (for example fullscreen) for an embedded content iframe.
     * @param attr one or more allow attributes for an embedded content iframe.
     */
    EmbedBuilder.prototype.withAllowAttr = function () {
        var attr = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            attr[_i] = arguments[_i];
        }
        this._allowAttrs = this._allowAttrs.concat(attr);
        return this;
    };
    /**
     * Allows specifying classes for an embedded content
     * @param className one or more sandbox attributes for an embedded content.
     */
    EmbedBuilder.prototype.withClassName = function () {
        var className = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            className[_i] = arguments[_i];
        }
        this._classNames = this._classNames.concat(className);
        return this;
    };
    /**
     * Allows specifying next generation content
     *
     * @param suffix Next generation suffix. Defaults to '-next'.
     */
    EmbedBuilder.prototype.withNext = function (suffix) {
        if (suffix === void 0) { suffix = '-next'; }
        this._suffix = suffix;
        this._endpoint += this._suffix;
        return this;
    };
    /**
     * Allows specifying a theme for the content.
     *
     * @param theme Theme name
     */
    EmbedBuilder.prototype.withTheme = function (theme) {
        this._params.theme = theme;
        return this;
    };
    /**
     * Monitors scroll position and informs the embedded Looker IFRAME
     * of the current scroll position and the offset of the containing
     * IFRAME within the window. Looker uses this information to position
     * dialogs within the users viewport.
     *
     * Requires Looker >=23.6.0
     *
     * @param monitor defaults to true
     *
     */
    EmbedBuilder.prototype.withScrollMonitor = function (monitor) {
        if (monitor === void 0) { monitor = true; }
        this._scrollMonitor = monitor;
        return this;
    };
    /**
     * Listens for page changed events from the embedded Looker IFRAME
     * and updates the height of the IFRAME.
     *
     * @param dynamicIFrameHeight defaults to true
     */
    EmbedBuilder.prototype.withDynamicIFrameHeight = function (dynamicIFrameHeight) {
        if (dynamicIFrameHeight === void 0) { dynamicIFrameHeight = true; }
        this._dynamicIFrameHeight = dynamicIFrameHeight;
        return this;
    };
    /**
     * Listens for covering dialogs being opened in the Looker IFRAME
     * and scrolls the top of dialog into view.
     *
     * @param dialogScroll defaults to true
     */
    EmbedBuilder.prototype.withDialogScroll = function (dialogScroll) {
        if (dialogScroll === void 0) { dialogScroll = true; }
        this._dialogScroll = dialogScroll;
        return this;
    };
    /**
     * Allows api host to be specified
     *
     * @param apiHost
     */
    EmbedBuilder.prototype.withApiHost = function (apiHost) {
        if (!this._hostSettings.apiHost) {
            this._hostSettings.apiHost = apiHost;
            if (this.sandboxedHost) {
                this._params.embed_domain = apiHost;
                this._params.sandboxed_host = 'true';
            }
        }
        else if (this._hostSettings.apiHost !== apiHost) {
            throw new Error('not allowed to change api host');
        }
        return this;
    };
    /**
     * Allows auth url to be specified
     *
     * @param authUrl URL to endpoint that can sign Looker SSO URLs
     */
    EmbedBuilder.prototype.withAuthUrl = function (authUrl) {
        var _a;
        if (!((_a = this._hostSettings.auth) === null || _a === void 0 ? void 0 : _a.url)) {
            this._hostSettings.auth = { url: authUrl };
        }
        else if (this._hostSettings.auth.url !== authUrl) {
            throw new Error('not allowed to change auth url');
        }
        return this;
    };
    /**
     * Allows auth url to be specified
     *
     * @param auth
     */
    EmbedBuilder.prototype.withAuth = function (auth) {
        if (!this._hostSettings.auth) {
            this._hostSettings.auth = auth;
        }
        else if (this._hostSettings.auth !== auth) {
            throw new Error('not allowed to change auth');
        }
        return this;
    };
    /**
     * @hidden
     *
     * @param url
     */
    EmbedBuilder.prototype.withUrl = function (url) {
        if (this.isCookielessEmbed) {
            throw new Error('withUrl not supported by cookieless embed');
        }
        this._url = url;
        return this;
    };
    Object.defineProperty(EmbedBuilder.prototype, "sandboxedHost", {
        /**
         * @hidden
         */
        get: function () {
            if (this._sandboxedHost === undefined) {
                var embedHostDomain = window.location.origin;
                this._sandboxedHost = embedHostDomain === 'null' || !embedHostDomain;
            }
            return this._sandboxedHost;
        },
        /**
         * @hidden
         */
        set: function (sandboxedHost) {
            this._sandboxedHost = sandboxedHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "el", {
        /**
         * The element to append the embedded content to.
         */
        get: function () {
            return this._appendTo || document.body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "frameBorder", {
        /**
         * the frame-border attribute to apply to the iframe
         */
        get: function () {
            return this._frameBorder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "endpoint", {
        /**
         * The endpoint used to load content
         */
        get: function () {
            return this._endpoint;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "type", {
        /**
         * The type of embedded content, dashboard, look, and explore
         */
        get: function () {
            return this._type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "apiHost", {
        /**
         * The address of the Looker instance being used
         */
        get: function () {
            return this._hostSettings.apiHost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "isCookielessEmbed", {
        /**
         * Is cookieless embedding being used
         */
        get: function () {
            return !!this._hostSettings.acquireSession;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "acquireSession", {
        /**
         * Cookieless embed acquire session
         */
        get: function () {
            return this._hostSettings.acquireSession;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "generateTokens", {
        /**
         * Cookieless embed generate tokens
         */
        get: function () {
            return this._hostSettings.generateTokens;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "url", {
        /**
         * The content URL of this embedded content, if provided
         */
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "authUrl", {
        /**
         * The auth URL of this embedded content, if provided
         * @deprecated
         */
        get: function () {
            var _a;
            return (_a = this._hostSettings.auth) === null || _a === void 0 ? void 0 : _a.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "auth", {
        /**
         * The auth config of this embedded content, if provided
         */
        get: function () {
            return this._hostSettings.auth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "embedUrl", {
        /**
         * @hidden
         */
        get: function () {
            var params = stringify(this._params);
            return "".concat(this.endpoint, "/").concat(this.id, "?").concat(params);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "handlers", {
        /**
         * @hidden
         */
        get: function () {
            return this._handlers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "sandboxAttrs", {
        /**
         * The sandbox attributes of an embedded content iframe, if provided
         */
        get: function () {
            return this._sandboxAttrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "allowAttrs", {
        /**
         * The allowed attributes of an embedded content iframe, if provided
         */
        get: function () {
            return this._allowAttrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "classNames", {
        /**
         * The classnames to apply to the embedded content
         */
        get: function () {
            return this._classNames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "suffix", {
        /**
         * The the suffix to append to the content type portion of the url
         */
        get: function () {
            return this._suffix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "id", {
        /**
         * The ID of this embedded content, if provided
         */
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "scrollMonitor", {
        /**
         * Whether scrolling is monitored
         */
        get: function () {
            return this._scrollMonitor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "dynamicIFrameHeight", {
        /**
         * Whether IFRAME height is to be dynamically updated
         */
        get: function () {
            return this._dynamicIFrameHeight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "dialogScroll", {
        /**
         * Whether cover dialogs tops are to be scrolled into view
         */
        get: function () {
            return this._dialogScroll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmbedBuilder.prototype, "clientConstructor", {
        /**
         * @hidden
         */
        get: function () {
            return this._clientConstructor;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Select an element to append the embedded content to, either a content selector or
     * the DOM element.
     *
     * @param el
     */
    EmbedBuilder.prototype.appendTo = function (el) {
        if (typeof el === 'string') {
            this._appendTo = document.querySelector(el);
        }
        else {
            this._appendTo = el;
        }
        return this;
    };
    /**
     * Register an event handler.
     *
     * @typeparam K: A Looker embed event name
     * @param name: string Name of the event to respond to.
     * @param handler: Callback A callback method to be invoked when the message is received.
     */
    EmbedBuilder.prototype.on = function (name, handler) {
        this._handlers[name] = this._handlers[name] ? this._handlers[name] : [];
        this._handlers[name].push(handler);
        return this;
    };
    /**
     * Constructs the embedded content, including creating the DOM element that contains the content.
     */
    EmbedBuilder.prototype.build = function () {
        return new embed_1.EmbedClient(this);
    };
    return EmbedBuilder;
}());
exports.EmbedBuilder = EmbedBuilder;
//# sourceMappingURL=embed_builder.js.map