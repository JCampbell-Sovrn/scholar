"use strict";
/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

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
exports.ChattyHostBuilder = void 0;
var host_1 = require("./host");
/**
 * Provides methods to define the properties of a [[ChattyHost]]
 */
var ChattyHostBuilder = /** @class */ (function () {
    /** @hidden */
    function ChattyHostBuilder(_url, _source) {
        this._url = _url;
        this._source = _source;
        this._appendTo = null;
        this._handlers = {};
        this._sandboxAttrs = [];
        this._allowAttrs = [];
        this._frameBorder = '0';
        this._targetOrigin = null;
        this._defaultTimeout = 30000;
    }
    Object.defineProperty(ChattyHostBuilder.prototype, "el", {
        get: function () {
            return this._appendTo || document.body;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHostBuilder.prototype, "handlers", {
        get: function () {
            return this._handlers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHostBuilder.prototype, "sandboxAttrs", {
        get: function () {
            return this._sandboxAttrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHostBuilder.prototype, "allowAttrs", {
        get: function () {
            return this._allowAttrs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHostBuilder.prototype, "targetOrigin", {
        get: function () {
            return this._targetOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHostBuilder.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHostBuilder.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHostBuilder.prototype, "defaultTimeout", {
        get: function () {
            return this._defaultTimeout;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @param el the HTML element that the iframe will live inside. The iframe will be created as
     * a direct child of the element.
     * @returns the host builder
     */
    ChattyHostBuilder.prototype.appendTo = function (el) {
        this._appendTo = el;
        return this;
    };
    /**
     * Removes an event handler to the host.
     *
     * @param name Event name
     * @param fn Callback function to remove.
     * @returns the host builder
     */
    ChattyHostBuilder.prototype.off = function (name, fn) {
        if (this._handlers[name]) {
            this._handlers[name] = this._handlers[name].filter(function (handler) { return handler !== fn; });
        }
    };
    /**
     * Adds an event handler to the host.
     *
     * @param name Event name to which to listen.
     * @param fn Callback function that is invoked when the event
     * is received, and accepts any parameters that were passed with the event. If the event
     * received is sent using [[ChattyClientConnection.sendAndReceive]], its return value is included
     * in the array that will be passed to the resolved promise.
     * @returns the host builder
     */
    ChattyHostBuilder.prototype.on = function (name, fn) {
        this._handlers[name] = this._handlers[name] || [];
        this._handlers[name].push(fn);
        return this;
    };
    /**
     * Sets the default period of time a [[ChattyHostConnection.sendAndReceive]] message will wait.
     * Use a negative number to wait indefinitely.
     *
     * @param timeout in milliseconds
     * @returns the host builder
     */
    ChattyHostBuilder.prototype.withDefaultTimeout = function (timeout) {
        this._defaultTimeout = timeout;
        return this;
    };
    /** @deprecated The frame-board attribute is deprecated, use CSS instead */
    ChattyHostBuilder.prototype.getFrameBorder = function () {
        return this._frameBorder;
    };
    /** @deprecated The frame-board attribute is deprecated, use CSS instead */
    ChattyHostBuilder.prototype.frameBorder = function (attr) {
        this._frameBorder = attr;
        return this;
    };
    /** @deprecated Replaced by [[withSandboxAttribute]] */
    ChattyHostBuilder.prototype.sandbox = function (attr) {
        this.withSandboxAttribute(attr);
        return this;
    };
    /**
     * Create the iframe with the given sandbox attribute
     *
     * @param attr The sandbox attribute
     */
    ChattyHostBuilder.prototype.withSandboxAttribute = function (attr) {
        this._sandboxAttrs.push(attr);
        return this;
    };
    /**
     * Create the iframe with the given allow attribute
     *
     * @param attr The sandbox attribute
     */
    ChattyHostBuilder.prototype.withAllowAttribute = function (attr) {
        this._allowAttrs.push(attr);
        return this;
    };
    /**
     * Use `targetOrigin` as the value for postMessage(). See
     * [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
     * for details.
     *
     * @param targetOrigin
     */
    ChattyHostBuilder.prototype.withTargetOrigin = function (targetOrigin) {
        this._targetOrigin = targetOrigin;
        return this;
    };
    /**
     * Builds a [[ChattyHost]] with the provided properties.
     */
    ChattyHostBuilder.prototype.build = function () {
        return new host_1.ChattyHost(this);
    };
    return ChattyHostBuilder;
}());
exports.ChattyHostBuilder = ChattyHostBuilder;
