"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logWarn = exports.logError = void 0;
var logError = function logError(message) {
  for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    optionalParams[_key - 1] = arguments[_key];
  }
  console.error(message, optionalParams);
};
exports.logError = logError;
var logWarn = function logWarn(message) {
  for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    optionalParams[_key2 - 1] = arguments[_key2];
  }
  console.warn(message, optionalParams);
};
exports.logWarn = logWarn;
//# sourceMappingURL=logger.js.map