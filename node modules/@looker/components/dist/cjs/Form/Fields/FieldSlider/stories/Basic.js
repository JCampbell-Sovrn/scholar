"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Basic;
var _react = _interopRequireDefault(require("react"));
var _FieldSlider = require("../../FieldSlider");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Basic(props) {
  return _react["default"].createElement(_FieldSlider.FieldSlider, _extends({
    label: "Basic",
    max: 5,
    min: 0
  }, props));
}
//# sourceMappingURL=Basic.js.map