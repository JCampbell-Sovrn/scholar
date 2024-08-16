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
exports.ChattyClientBuilder = void 0;
var client_1 = require("./client");
/**
 * Provides methods to define the properties of a [[ChattyClient]]
 */
var ChattyClientBuilder = /** @class */ (function () {
    function ChattyClientBuilder() {
        this._targetOrigin = '*';
        this._handlers = {};
        this._defaultTimeout = 30000;
    }
    Object.defineProperty(ChattyClientBuilder.prototype, "targetOrigin", {
        get: function () {
            return this._targetOrigin;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyClientBuilder.prototype, "handlers", {
        get: function () {
            return this._handlers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyClientBuilder.prototype, "defaultTimeout", {
        get: function () {
            return this._defaultTimeout;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Removes an event handler to the client.
     *
     * @param name Event name
     * @param fn Callback function to remove
     * @returns the client builder
     */
    ChattyClientBuilder.prototype.off = function (name, fn) {
        if (this._handlers[name]) {
            this._handlers[name] = this._handlers[name].filter(function (handler) { return handler !== fn; });
        }
    };
    /**
     * Adds an event handler to the client.
     *
     * @param name Event name to which to listen.
     * @param fn Callback function that is invoked when the event
     * is received, and accepts any parameters that were passed with the event.
     * If the event received is sent using [[ChattyHostConnection.sendAndReceive]], its return value is
     * included in the array that will be passed to the resolved promise.
     * @returns the client builder
     */
    ChattyClientBuilder.prototype.on = function (name, fn) {
        this._handlers[name] = this._handlers[name] || [];
        this._handlers[name].push(fn);
        return this;
    };
    /**
     * Sets the default period of time a [[ChattyClientConnection.sendAndReceive]] message will wait.
     * Use a negative number to wait indefinitely.
     * The default is 30000ms
     *
     * @param timeout in milliseconds
     * @returns the client builder
     */
    ChattyClientBuilder.prototype.withDefaultTimeout = function (timeout) {
        this._defaultTimeout = timeout;
        return this;
    };
    /**
     * Optional. Sets the target origin parameter used to communicate with the host. Default
     * is '*'. If possible it should be set the the host window's origin.
     *
     * @param targetOrigin targetOrigin to use with postMessage()
     * @returns the client builder
     */
    ChattyClientBuilder.prototype.withTargetOrigin = function (targetOrigin) {
        this._targetOrigin = targetOrigin;
        return this;
    };
    /**
     * Builds a [[ChattyClient]] with the provided properties.
     * @returns a new Chatty client.
     */
    ChattyClientBuilder.prototype.build = function () {
        return new client_1.ChattyClient(this);
    };
    return ChattyClientBuilder;
}());
exports.ChattyClientBuilder = ChattyClientBuilder;
