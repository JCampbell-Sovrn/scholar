"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TouchAppDimensions = exports.TouchApp = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TouchApp = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m18.19 12.44-3.24-1.62c1.29-1 2.12-2.56 2.12-4.32 0-3.03-2.47-5.5-5.5-5.5s-5.5 2.47-5.5 5.5c0 2.13 1.22 3.98 3 4.89v3.26c-2.15-.46-2.02-.44-2.26-.44-.53 0-1.03.21-1.41.59L4 16.22l5.09 5.09c.43.44 1.03.69 1.65.69h6.3c.98 0 1.81-.7 1.97-1.67l.8-4.71c.22-1.3-.43-2.58-1.62-3.18zm-.35 2.85-.8 4.71h-6.3c-.09 0-.17-.04-.24-.1l-3.68-3.68 4.25.89V6.5c0-.28.22-.5.5-.5s.5.22.5.5v6h1.76l3.46 1.73c.4.2.62.63.55 1.06zM8.07 6.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 .95-.38 1.81-1 2.44V6.5a2.5 2.5 0 0 0-5 0v2.44c-.62-.63-1-1.49-1-2.44z"
  }));
});
exports.TouchApp = TouchApp;
TouchApp.displayName = 'TouchApp';
var TouchAppDimensions = {
  height: 24,
  width: 24
};
exports.TouchAppDimensions = TouchAppDimensions;