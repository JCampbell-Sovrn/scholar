"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unregisterCore40SDK = exports.registerCore40SDK = exports.getCore40SDK = void 0;
var _core40SDK;
var registerCore40SDK = coreSDK => {
  if (_core40SDK) {
    throw new Error('coreSDK can only be registered onces');
  }
  _core40SDK = coreSDK;
};
exports.registerCore40SDK = registerCore40SDK;
var unregisterCore40SDK = () => _core40SDK = undefined;
exports.unregisterCore40SDK = unregisterCore40SDK;
var getCore40SDK = () => {
  if (!_core40SDK) {
    throw new Error('Looker host connection not established');
  }
  return _core40SDK;
};
exports.getCore40SDK = getCore40SDK;
//# sourceMappingURL=core_sdk_40.js.map