"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CropRotateDimensions = exports.CropRotate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CropRotate = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16 9v5h2V8c0-1.1-.9-2-2-2h-6v2h5c.55 0 1 .45 1 1zm3 7H9c-.55 0-1-.45-1-1V5c0-.55-.45-1-1-1s-1 .45-1 1v1H5c-.55 0-1 .45-1 1s.45 1 1 1h1v8c0 1.1.9 2 2 2h8v1c0 .55.45 1 1 1s1-.45 1-1v-1h1c.55 0 1-.45 1-1s-.45-1-1-1zM17.66 1.4A11.81 11.81 0 0 0 11.39.04l3.81 3.81 1.33-1.33c3.09 1.46 5.34 4.37 5.89 7.86.06.41.44.69.86.62.41-.06.69-.45.62-.86-.6-3.8-2.96-7-6.24-8.74zM7.47 21.49a10.504 10.504 0 0 1-5.89-7.86.737.737 0 0 0-.86-.62c-.41.06-.69.45-.62.86.6 3.81 2.96 7.01 6.24 8.75 1.67.89 3.83 1.51 6.27 1.36L8.8 20.16l-1.33 1.33z"
  }));
});
exports.CropRotate = CropRotate;
CropRotate.displayName = 'CropRotate';
var CropRotateDimensions = {
  height: 24,
  width: 24
};
exports.CropRotateDimensions = CropRotateDimensions;