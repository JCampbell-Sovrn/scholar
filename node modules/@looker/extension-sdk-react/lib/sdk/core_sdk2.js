"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoreSDK2 = getCoreSDK2;
exports.registerCoreSDK2 = registerCoreSDK2;
exports.unregisterCoreSDK2 = unregisterCoreSDK2;
var registered = false;
var _coreSdk;
function registerCoreSDK2(coreSdk) {
  if (_coreSdk) {
    throw new Error('coreSDK can only be registered once');
  }
  _coreSdk = coreSdk;
  registered = true;
}
function unregisterCoreSDK2() {
  registered = false;
  _coreSdk = undefined;
}
function getCoreSDK2() {
  if (!registered) {
    throw new Error('Looker host connection not established');
  }
  return _coreSdk;
}
//# sourceMappingURL=core_sdk2.js.map