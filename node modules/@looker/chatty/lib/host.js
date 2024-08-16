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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChattyHost = exports.ChattyHostStates = void 0;
var debugLib = require("debug");
var client_messages_1 = require("./client_messages");
var host_messages_1 = require("./host_messages");
require("es6-promise/auto"); // Polyfill only browsers without Promises
/**
 * @private
 * Host connection status
 */
var ChattyHostStates;
(function (ChattyHostStates) {
    ChattyHostStates[ChattyHostStates["Connecting"] = 0] = "Connecting";
    ChattyHostStates[ChattyHostStates["SynAck"] = 1] = "SynAck";
    ChattyHostStates[ChattyHostStates["Connected"] = 2] = "Connected";
})(ChattyHostStates = exports.ChattyHostStates || (exports.ChattyHostStates = {}));
/**
 * The host object for an iframe. The user should not create this object directly, it
 * is returned by the [[ChattyHostBuilder.build]] method.
 */
var ChattyHost = /** @class */ (function () {
    /**
     * @param builder The client builder that is responsible for constructing this object.
     * @hidden
     */
    function ChattyHost(builder) {
        var _this = this;
        this._hostWindow = window;
        this._connection = null;
        this._state = ChattyHostStates.Connecting;
        this._sequence = 0;
        this._receivers = {};
        this.iframe = document.createElement('iframe');
        builder.sandboxAttrs.forEach(function (attr) { return _this.iframe.sandbox.add(attr); });
        if ('allow' in this.iframe) {
            this.iframe.allow = builder.allowAttrs.join('; ');
        }
        // tslint:disable-next-line:deprecation
        this.iframe.frameBorder = builder.getFrameBorder();
        if (builder.url) {
            this.iframe.src = builder.url;
        }
        else if (builder.source) {
            this.iframe.srcdoc = builder.source;
        }
        else {
            console.warn('url or source required to initialize Chatty host correctly');
        }
        this._appendTo = builder.el;
        this._handlers = builder.handlers;
        this._abortControllers = {};
        this._port = null;
        this._targetOrigin = builder.targetOrigin;
        this._defaultTimeout = builder.defaultTimeout;
    }
    Object.defineProperty(ChattyHost.prototype, "connection", {
        /**
         * @returns a Promise to an object that resolves when the client initiates the connection.
         */
        get: function () {
            return this._connection;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChattyHost.prototype, "isConnected", {
        /**
         * @returns a flag indicating whether the client successfully connected to the host.
         */
        get: function () {
            return this._state === ChattyHostStates.Connected;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Connects to the client iframe. Waits for the client iframe to load and initiate a
     * connection using the chatty client.
     *
     * @returns a Promise to an object that resolves when the client has initiated the connection. The
     * object implements the [[ChattyHostConnection]] that can be used to talk to the host.
     */
    ChattyHost.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var createConnection;
            var _this = this;
            return __generator(this, function (_a) {
                if (this._connection)
                    return [2 /*return*/, this._connection];
                createConnection = function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    return __generator(this, function (_a) {
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var eventListener = function (evt) {
                                    ChattyHost._debug('port received', evt.data.action, evt.data.data);
                                    switch (evt.data.action) {
                                        case client_messages_1.ChattyClientMessages.Ack:
                                            _this._state = ChattyHostStates.Connected;
                                            resolve({
                                                send: function (eventName) {
                                                    var payload = [];
                                                    for (var _i = 1; _i < arguments.length; _i++) {
                                                        payload[_i - 1] = arguments[_i];
                                                    }
                                                    _this.sendMsg(host_messages_1.ChattyHostMessages.Message, {
                                                        eventName: eventName,
                                                        payload: payload,
                                                    });
                                                },
                                                sendAndReceive: function (eventName) {
                                                    var _payload = [];
                                                    for (var _i = 1; _i < arguments.length; _i++) {
                                                        _payload[_i - 1] = arguments[_i];
                                                    }
                                                    return __awaiter(_this, void 0, void 0, function () {
                                                        var signal, propagateSignal, payload, options, sequence;
                                                        var _this = this;
                                                        var _a, _b;
                                                        return __generator(this, function (_c) {
                                                            if (_payload.length > 0 &&
                                                                ((_a = _payload[_payload.length - 1]) === null || _a === void 0 ? void 0 : _a.signal) &&
                                                                ((_b = _payload[_payload.length - 1]) === null || _b === void 0 ? void 0 : _b.signal) instanceof AbortSignal) {
                                                                options = _payload[_payload.length - 1];
                                                                signal = options.signal;
                                                                propagateSignal = options.propagateSignal;
                                                                payload = _payload.slice(0, _payload.length - 1);
                                                            }
                                                            else {
                                                                payload = _payload;
                                                            }
                                                            sequence = ++this._sequence;
                                                            this.sendMsg(host_messages_1.ChattyHostMessages.MessageWithResponse, { eventName: eventName, payload: payload }, sequence, propagateSignal);
                                                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                                                    var timeoutId;
                                                                    if (signal) {
                                                                        signal.addEventListener('abort', function (event) {
                                                                            if (propagateSignal) {
                                                                                var errorMessage_1 = event.target
                                                                                    .reason;
                                                                                if (typeof errorMessage_1 !== 'string') {
                                                                                    errorMessage_1 = 'Abort';
                                                                                }
                                                                                _this.sendMsg(host_messages_1.ChattyHostMessages.AbortMessage, {
                                                                                    eventName: eventName,
                                                                                    payload: { reason: errorMessage_1 },
                                                                                }, sequence);
                                                                            }
                                                                            delete _this._receivers[sequence];
                                                                            var errorMessage = event.target.reason;
                                                                            if (typeof errorMessage !== 'string') {
                                                                                errorMessage = 'Abort';
                                                                            }
                                                                            reject(new Error(errorMessage));
                                                                        });
                                                                    }
                                                                    else {
                                                                        if (_this._defaultTimeout > -1) {
                                                                            timeoutId = setTimeout(function () {
                                                                                delete _this._receivers[sequence];
                                                                                reject(new Error('Timeout'));
                                                                            }, _this._defaultTimeout);
                                                                        }
                                                                    }
                                                                    _this._receivers[sequence] = { reject: reject, resolve: resolve, timeoutId: timeoutId };
                                                                })];
                                                        });
                                                    });
                                                },
                                            });
                                            break;
                                        case client_messages_1.ChattyClientMessages.Message:
                                            if (_this._handlers[evt.data.data.eventName]) {
                                                _this._handlers[evt.data.data.eventName].forEach(function (fn) {
                                                    return fn.apply(_this, evt.data.data.payload);
                                                });
                                            }
                                            break;
                                        case client_messages_1.ChattyClientMessages.MessageWithResponse:
                                            {
                                                var _a = evt.data.data, eventName_1 = _a.eventName, payload = _a.payload, sequence_1 = _a.sequence, signal = _a.signal;
                                                var results = [];
                                                var abortStoreName_1 = "".concat(eventName_1).concat(sequence_1);
                                                if (_this._handlers[eventName_1]) {
                                                    var _payload_1;
                                                    if (signal) {
                                                        _this._abortControllers[abortStoreName_1] =
                                                            new AbortController();
                                                        if (Array.isArray(payload)) {
                                                            _payload_1 = __spreadArray(__spreadArray([], payload, true), [
                                                                _this._abortControllers[abortStoreName_1].signal,
                                                            ], false);
                                                        }
                                                        else {
                                                            _payload_1 = [
                                                                payload,
                                                                _this._abortControllers[abortStoreName_1].signal,
                                                            ];
                                                        }
                                                    }
                                                    else {
                                                        _payload_1 = payload;
                                                    }
                                                    results = _this._handlers[eventName_1].map(function (fn) {
                                                        return fn.apply(_this, _payload_1);
                                                    });
                                                }
                                                Promise.all(results)
                                                    .then(function (resolvedResults) {
                                                    delete _this._abortControllers[abortStoreName_1];
                                                    _this.sendMsg(host_messages_1.ChattyHostMessages.Response, { eventName: eventName_1, payload: resolvedResults }, sequence_1);
                                                })
                                                    .catch(function (error) {
                                                    delete _this._abortControllers[abortStoreName_1];
                                                    _this.sendMsg(host_messages_1.ChattyHostMessages.ResponseError, { eventName: eventName_1, payload: error.toString() }, sequence_1);
                                                });
                                            }
                                            break;
                                        case client_messages_1.ChattyClientMessages.AbortMessage:
                                            {
                                                var _b = evt.data.data, eventName = _b.eventName, payload = _b.payload, sequence = _b.sequence;
                                                var abortStoreName = "".concat(eventName).concat(sequence);
                                                if (_this._abortControllers[abortStoreName]) {
                                                    _this._abortControllers[abortStoreName].abort(payload === null || payload === void 0 ? void 0 : payload.reason);
                                                    delete _this._abortControllers[abortStoreName];
                                                }
                                            }
                                            break;
                                        case client_messages_1.ChattyClientMessages.Response:
                                            {
                                                var receiver = _this._receivers[evt.data.data.sequence];
                                                if (receiver) {
                                                    delete _this._receivers[evt.data.data.sequence];
                                                    if (receiver.timeoutId) {
                                                        clearTimeout(receiver.timeoutId);
                                                    }
                                                    receiver.resolve(evt.data.data.payload);
                                                }
                                            }
                                            break;
                                        case client_messages_1.ChattyClientMessages.ResponseError:
                                            {
                                                var receiver = _this._receivers[evt.data.data.sequence];
                                                if (receiver) {
                                                    delete _this._receivers[evt.data.data.sequence];
                                                    if (receiver.timeoutId) {
                                                        clearTimeout(receiver.timeoutId);
                                                    }
                                                    receiver.reject(typeof evt.data.data.payload === 'string'
                                                        ? new Error(evt.data.data.payload)
                                                        : evt.data.data.payload);
                                                }
                                            }
                                            break;
                                    }
                                };
                                var windowListener = function (evt) {
                                    if (!_this.isValidMsg(evt)) {
                                        // don't reject here, since that breaks the promise resolution chain
                                        ChattyHost._debug('window received invalid', evt);
                                        return;
                                    }
                                    ChattyHost._debug('window received', evt.data.action, evt.data.data);
                                    switch (evt.data.action) {
                                        case client_messages_1.ChattyClientMessages.Syn:
                                            if (_this._port) {
                                                // If targetOrigin is set and we receive another Syn, the frame has potentially
                                                // navigated to another valid webpage and we should re-connect
                                                if ((_this._targetOrigin && _this._targetOrigin === '*') ||
                                                    _this._targetOrigin === evt.origin) {
                                                    ChattyHost._debug('reconnecting to', evt.origin);
                                                    _this._port.close();
                                                }
                                                else {
                                                    ChattyHost._debug('rejected new connection from', evt.origin);
                                                    return;
                                                }
                                            }
                                            _this._port = evt.ports[0];
                                            _this._port.onmessage = eventListener;
                                            _this.sendMsg(host_messages_1.ChattyHostMessages.SynAck);
                                            _this._state = ChattyHostStates.SynAck;
                                            break;
                                    }
                                };
                                _this._hostWindow.addEventListener('message', windowListener);
                            })];
                    });
                }); };
                this._appendTo.appendChild(this.iframe);
                return [2 /*return*/, (this._connection = createConnection())];
            });
        });
    };
    ChattyHost.prototype.sendMsg = function (action, data, sequence, propagateSignal) {
        if (data === void 0) { data = {}; }
        var sequenceData = sequence ? { sequence: sequence } : {};
        var signalData = propagateSignal === true ? { signal: propagateSignal } : {};
        var dataWithSequence = __assign(__assign(__assign({}, data), sequenceData), signalData);
        ChattyHost._debug('sending', action, dataWithSequence);
        this._port.postMessage({ action: action, data: dataWithSequence });
    };
    // TODO: natenate
    // Frustratingly, enabling `allow-scripts` on a sandboxed iframe sets its origin to `'null'`
    // (that is, a string literal with a value of null). This means that in order to `postMessage`
    // to the client we must use `'*'` as the origin parameter.  To ensure messages received from
    // the client are who they claim to be, we check the origin is `'null'` and the contentWindow
    // is the one we have access to from the parent frame.  This method is described here:
    // https://www.html5rocks.com/en/tutorials/security/sandboxed-iframes/#safely-sandboxing-eval
    // If sandboxing is not enabled targetOrigin can be set and validated
    ChattyHost.prototype.isValidMsg = function (evt) {
        if (evt.source !== this.iframe.contentWindow)
            return false;
        if (this._targetOrigin &&
            !(this._targetOrigin === '*' || this._targetOrigin === evt.origin))
            return false;
        return true;
    };
    ChattyHost._debug = debugLib('looker:chatty:host');
    return ChattyHost;
}());
exports.ChattyHost = ChattyHost;
