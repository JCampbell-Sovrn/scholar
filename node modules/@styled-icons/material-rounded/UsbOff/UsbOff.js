"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsbOffDimensions = exports.UsbOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var UsbOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m9.6 5.2 2-2.67c.2-.27.6-.27.8 0l2 2.67a.5.5 0 0 1-.4.8h-1v4.17l-2-2V6h-1a.5.5 0 0 1-.4-.8zm5.9 6.8h.5v1.17l1.77 1.77c.14-.28.23-.6.23-.94v-2h.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5h-3c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5zm4.99 9.9a.996.996 0 0 1-1.41 0l-5.9-5.9H13v2.28c.6.34 1 .98 1 1.72 0 1.2-1.07 2.16-2.31 1.98-.88-.13-1.59-.88-1.68-1.77-.08-.83.33-1.55.99-1.93V16H8c-1.1 0-2-.9-2-2v-2.28c-.6-.34-1-.98-1-1.72 0-.59.26-1.13.68-1.5L2.1 4.93a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM11 13.83l-2.51-2.51c-.14.16-.31.29-.49.4V14h3v-.17z"
  }));
});
exports.UsbOff = UsbOff;
UsbOff.displayName = 'UsbOff';
var UsbOffDimensions = {
  height: 24,
  width: 24
};
exports.UsbOffDimensions = UsbOffDimensions;