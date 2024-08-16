"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerHostApi = exports.getExtensionSDK = void 0;
var _util = require("../util");
var _hostApi;
var errorListener = event => {
  if (_hostApi) {
    if (event.error) {
      if (!event.error._looker_reported) {
        _hostApi.error(event);
        event.error._looker_reported = true;
      }
    } else {
      _hostApi.error(event);
    }
  } else {
    (0, _util.logError)('Extension has unhandled error. Reporting on console as Looker host api not initialized', event);
  }
};
var beforeUnloadListener = () => {
  if (_hostApi) {
    _hostApi.unloaded();
    (0, _util.logWarn)('Extension is being unloaded');
  }
};
var setupGlobalListeners = () => {
  window.addEventListener('error', errorListener);
  window.addEventListener('beforeunload', beforeUnloadListener);
};
setupGlobalListeners();
var registerHostApi = hostApi => {
  _hostApi = hostApi;
};
exports.registerHostApi = registerHostApi;
var getExtensionSDK = () => {
  if (_hostApi && _hostApi.lookerHostData) {
    return _hostApi;
  }
  throw new Error('ExtensionSDK not initialized');
};
exports.getExtensionSDK = getExtensionSDK;
//# sourceMappingURL=global_listener.js.map