"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VoiceOverOffDimensions = exports.VoiceOverOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var VoiceOverOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M15.72 6.41c-.35.35-.44.88-.25 1.35.3.75.32 1.58.05 2.34-.16.46-.06.98.29 1.32.6.6 1.66.47 2.02-.31.64-1.39.6-2.99-.12-4.41a1.25 1.25 0 0 0-1.99-.29zm3.46-3.52c-.4.4-.46 1.02-.13 1.48 1.93 2.68 1.95 6.25.09 9.07-.31.46-.23 1.08.16 1.47.51.51 1.38.46 1.81-.13 2.57-3.51 2.52-8.2-.17-11.77-.43-.56-1.26-.62-1.76-.12zM9.43 5.04l3.53 3.53a3.979 3.979 0 0 0-3.53-3.53zM3.71 3.56a.996.996 0 0 0 0 1.41l1.91 1.91a3.98 3.98 0 0 0-.47 3.2c.36 1.33 1.44 2.4 2.77 2.77 1.19.33 2.31.09 3.2-.47l4.4 4.4C13.74 15.6 10.78 15 9 15c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-.37-.11-.7-.29-1.02l2.31 2.31a.996.996 0 1 0 1.41-1.41L5.12 3.56a.996.996 0 0 0-1.41 0z"
  }));
});
exports.VoiceOverOff = VoiceOverOff;
VoiceOverOff.displayName = 'VoiceOverOff';
var VoiceOverOffDimensions = {
  height: 24,
  width: 24
};
exports.VoiceOverOffDimensions = VoiceOverOffDimensions;