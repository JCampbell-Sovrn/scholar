"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IcecreamDimensions = exports.Icecream = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Icecream = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(_styledIcon.StyledIconBase, (0, _extends2.default)({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.38 6.24C17.79 3.24 15.14 1 12 1S6.21 3.24 5.62 6.24A4.014 4.014 0 0 0 3 10c0 2.21 1.79 4 4 4 .12 0 .23-.02.34-.02L12.07 23l4.61-9.03c.11.01.21.03.32.03 2.21 0 4-1.79 4-4 0-1.71-1.08-3.19-2.62-3.76zm-6.33 12.39-2.73-5.21a6.468 6.468 0 0 0 5.4-.02l-2.67 5.23zM17 12c-.52 0-1.01-.2-1.39-.56l-.56-.54-.66.42a4.52 4.52 0 0 1-4.78-.01l-.66-.41-.56.54c-.38.35-.87.56-1.39.56a1.999 1.999 0 0 1-.32-3.97l.77-.13.06-.78C7.71 4.8 9.66 3 12 3s4.29 1.8 4.48 4.12l.06.78.77.12c.97.16 1.69.99 1.69 1.98 0 1.1-.9 2-2 2z"
  }));
});
exports.Icecream = Icecream;
Icecream.displayName = 'Icecream';
var IcecreamDimensions = {
  height: 24,
  width: 24
};
exports.IcecreamDimensions = IcecreamDimensions;