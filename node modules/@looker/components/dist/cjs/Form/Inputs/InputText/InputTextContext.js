"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputTextContext = void 0;
var _noop = _interopRequireDefault(require("lodash/noop"));
var _react = require("react");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var defaultContext = {
  beforeWidth: 0,
  setBeforeWidth: _noop["default"]
};
var InputTextContext = (0, _react.createContext)(defaultContext);
exports.InputTextContext = InputTextContext;
//# sourceMappingURL=InputTextContext.js.map