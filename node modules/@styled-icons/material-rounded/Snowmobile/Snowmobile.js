"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnowmobileDimensions = exports.Snowmobile = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Snowmobile = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11 6c0 .55.45 1 1 1h1.25l1.45 1.3L11 11l-9.12-.96a1.7 1.7 0 0 0-.67 3.32l3.33 1-3.49 1.88C-.77 17.22-.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-2c-.55 0-1 .45-1 1s.45 1 1 1h5c1.13 0 2.11-.62 2.63-1.55.36-.65-.15-1.45-.9-1.45-.34 0-.68.16-.84.47-.17.31-.51.53-.89.53h-.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-.89-7.72-7.75-7.72-7.75a.985.985 0 0 0-.66-.25H12c-.55 0-1 .45-1 1zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2z"
  }));
});
exports.Snowmobile = Snowmobile;
Snowmobile.displayName = 'Snowmobile';
var SnowmobileDimensions = {
  height: 24,
  width: 24
};
exports.SnowmobileDimensions = SnowmobileDimensions;