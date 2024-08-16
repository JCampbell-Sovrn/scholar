"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WifiTetheringErrorDimensions = exports.WifiTetheringError = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var WifiTetheringError = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M10.66 7.14c-2.24.48-4.04 2.3-4.52 4.54-.37 1.75.02 3.38.89 4.66.34.51 1.08.55 1.51.11.35-.35.37-.88.1-1.28-.5-.76-.75-1.71-.61-2.73.23-1.74 1.67-3.17 3.41-3.4A4.003 4.003 0 0 1 16 13c0 .8-.24 1.54-.64 2.16-.27.41-.25.95.1 1.29.43.43 1.17.4 1.51-.11C17.62 15.4 18 14.25 18 13c0-3.75-3.45-6.7-7.34-5.86zm-.41-3.99c-4.05.69-7.19 3.69-8.03 7.72-.66 3.17.2 6.16 1.97 8.38.37.46 1.07.49 1.49.07.36-.36.39-.93.07-1.32a8.004 8.004 0 0 1-1.66-6.28c.55-3.47 3.42-6.24 6.92-6.65 2.76-.33 5.27.74 6.93 2.59.2.21.47.34.76.34.85 0 1.34-1.01.77-1.65-2.19-2.45-5.56-3.82-9.22-3.2zM12 11c-1.1 0-2 .9-2 2 0 .55.23 1.05.59 1.41.36.36.86.59 1.41.59s1.05-.23 1.41-.59c.36-.36.59-.86.59-1.41 0-1.1-.9-2-2-2zm9-1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1zm0 8c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"
  }));
});
exports.WifiTetheringError = WifiTetheringError;
WifiTetheringError.displayName = 'WifiTetheringError';
var WifiTetheringErrorDimensions = {
  height: 24,
  width: 24
};
exports.WifiTetheringErrorDimensions = WifiTetheringErrorDimensions;