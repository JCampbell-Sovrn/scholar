"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanoramaPhotosphereDimensions = exports.PanoramaPhotosphere = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PanoramaPhotosphere = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.4 11.32v2.93c-.1.05-2.17.85-3.33 1.17-.94.26-3.84.73-6.07.73-3.7 0-7-.7-9.16-1.8-.08-.04-.16-.06-.24-.1V9.76c6.02-2.84 12.6-2.92 18.8 0v1.56zm-9.39 8.88c-2.5 0-4.87-1.15-6.41-3.12 4.19 1.22 8.57 1.23 12.82-.01a8.136 8.136 0 0 1-6.41 3.13zM12 3.8c2.6 0 4.91 1.23 6.41 3.12-4.1-1.19-8.48-1.26-12.83.01C7.08 5.03 9.4 3.8 12 3.8zm10.49 4.71c-.47-.23-.93-.44-1.4-.64C19.52 4.41 16.05 2 12 2S4.47 4.41 2.9 7.88c-.47.2-.93.41-1.4.63-.31.15-.5.48-.5.83v5.32c0 .35.19.68.51.83.47.23.93.44 1.39.64 3.55 7.83 14.65 7.82 18.2 0 .47-.2.93-.41 1.39-.63.31-.17.51-.49.51-.84V9.34a.91.91 0 0 0-.51-.83z"
  }));
});
exports.PanoramaPhotosphere = PanoramaPhotosphere;
PanoramaPhotosphere.displayName = 'PanoramaPhotosphere';
var PanoramaPhotosphereDimensions = {
  height: 24,
  width: 24
};
exports.PanoramaPhotosphereDimensions = PanoramaPhotosphereDimensions;