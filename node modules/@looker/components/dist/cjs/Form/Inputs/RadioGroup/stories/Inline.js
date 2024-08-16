"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Inline;
var _react = _interopRequireDefault(require("react"));
var _ = require("../");
var _excluded = ["inline", "options", "defaultValue"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var mockOptions = [{
  label: 'Cheddar',
  value: 'cheddar'
}, {
  label: 'Gouda',
  value: 'gouda'
}];
function Inline(props) {
  var _props$inline = props.inline,
    inline = _props$inline === void 0 ? true : _props$inline,
    _props$options = props.options,
    options = _props$options === void 0 ? mockOptions : _props$options,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? 'cheddar' : _props$defaultValue,
    restProps = _objectWithoutProperties(props, _excluded);
  return _react["default"].createElement(_.RadioGroup, _extends({
    defaultValue: defaultValue,
    inline: inline,
    name: "group1",
    options: options
  }, restProps));
}
//# sourceMappingURL=Inline.js.map