"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectExtensionHost = void 0;
var _chatty = require("@looker/chatty");
var _extension_host_api = require("./extension_host_api");
var _global_listener = require("./global_listener");
var _types = require("./types");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var connectExtensionHost = function () {
  var _ref = _asyncToGenerator(function* () {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return new Promise(function () {
      var _ref2 = _asyncToGenerator(function* (resolve, reject) {
        var initializationTimer = window.setTimeout(() => reject(new Error('Failed to establish communication with Looker host')), 30000);
        var {
          initializedCallback,
          chattyTimeout
        } = configuration;
        var extensionHost;
        var targetOrigin;
        var initialized = initializationResponse => {
          if (initializationResponse) {
            var {
              errorMessage
            } = initializationResponse;
            if (initializedCallback) {
              initializedCallback(errorMessage);
            }
            if (errorMessage) {
              reject(new Error(errorMessage));
            } else {
              resolve(extensionHost);
            }
          } else {
            reject(new Error('Unexpected response from initialization'));
          }
        };
        try {
          targetOrigin = window.parent.location.origin;
        } catch (err) {
          targetOrigin = '*';
        }
        try {
          var chattyHost = yield _chatty.Chatty.createClient().on(_types.ExtensionEvent.EXTENSION_HOST_NOTIFICATION, message => {
            var messageResponse;
            if (message) {
              if (initializationTimer) {
                window.clearTimeout(initializationTimer);
                initializationTimer = undefined;
                if (extensionHost) {
                  try {
                    messageResponse = extensionHost.handleNotification(message);
                    initialized(messageResponse);
                  } catch (error) {
                    reject(error);
                  }
                } else {
                  reject(new Error('Extension host not created'));
                }
              } else {
                messageResponse = extensionHost.handleNotification(message);
              }
            }
            return messageResponse;
          }).withTargetOrigin(targetOrigin).withDefaultTimeout(chattyTimeout || 30000).build().connect();
          extensionHost = new _extension_host_api.ExtensionHostApiImpl(_objectSpread({
            chattyHost
          }, configuration));
          (0, _global_listener.registerHostApi)(extensionHost);
        } catch (error) {
          window.clearTimeout(initializationTimer);
          initializationTimer = undefined;
          reject(error);
        }
      });
      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
  return function connectExtensionHost() {
    return _ref.apply(this, arguments);
  };
}();
exports.connectExtensionHost = connectExtensionHost;
//# sourceMappingURL=connect_extension_host.js.map