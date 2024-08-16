"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HdrPlusDimensions = exports.HdrPlus = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HdrPlus = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8.5 14.5h2v1h-2zm6-7H16v3h-1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13.5c0 .6-.4 1.1-.9 1.4l.49 1.13c.2.46-.14.97-.64.97a.69.69 0 0 1-.63-.41L9.6 17H8.5v1.31c0 .38-.31.69-.69.69h-.12c-.38 0-.69-.31-.69-.69V14c0-.55.45-1 1-1h2.5c.82 0 1.5.68 1.5 1.5v1zm-.75-3.5c-.41 0-.75-.34-.75-.75V9.5h-2v1.75c0 .41-.34.75-.75.75S7 11.66 7 11.25v-4.5c0-.41.34-.75.75-.75s.75.34.75.75V8h2V6.75c0-.41.34-.75.75-.75s.75.34.75.75v4.5c0 .41-.34.75-.75.75zm5.5 4H16v.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75V16h-.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.75v-.75c0-.41.34-.75.75-.75s.75.34.75.75v.74h.75c.41 0 .75.34.75.75v.01c0 .41-.34.75-.75.75zm.75-5.5c0 .82-.67 1.5-1.5 1.5h-2.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5H16c.83 0 1.5.68 1.5 1.5v3z"
  }));
});
exports.HdrPlus = HdrPlus;
HdrPlus.displayName = 'HdrPlus';
var HdrPlusDimensions = {
  height: 24,
  width: 24
};
exports.HdrPlusDimensions = HdrPlusDimensions;