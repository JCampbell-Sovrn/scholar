"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timer3SelectDimensions = exports.Timer3Select = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Timer3Select = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21 12c0 .55-.45 1-1 1h-3v1h2.5c.83 0 1.5.68 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5H16c-.55 0-1-.45-1-1s.45-1 1-1h3v-1h-2.5c-.82 0-1.5-.68-1.5-1.5v-2c0-.82.68-1.5 1.5-1.5H20c.55 0 1 .45 1 1zM4 6.5C4 7.33 4.67 8 5.5 8H10v2.5H5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5H10V16H5.5c-.83 0-1.5.67-1.5 1.5S4.67 19 5.5 19H10c1.66 0 3-1.34 3-3v-1.9a2.1 2.1 0 0 0-2.1-2.1A2.1 2.1 0 0 0 13 9.9V8c0-1.66-1.34-3-3-3H5.5C4.67 5 4 5.67 4 6.5z"
  }));
});
exports.Timer3Select = Timer3Select;
Timer3Select.displayName = 'Timer3Select';
var Timer3SelectDimensions = {
  height: 24,
  width: 24
};
exports.Timer3SelectDimensions = Timer3SelectDimensions;