"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TranscribeDimensions = exports.Transcribe = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Transcribe = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22.54 10.28a3.29 3.29 0 0 1 0-2.54c.19-.45.1-.96-.24-1.3l-.1-.1c-.56-.56-1.51-.44-1.88.26-.8 1.48-.79 3.24.03 4.79.37.69 1.31.83 1.86.27l.1-.1c.34-.33.42-.84.23-1.28zm-3.72 4.83c.4-.4.46-1.02.13-1.48-1.97-2.73-1.96-6.39.01-9.23.32-.47.26-1.1-.14-1.5-.5-.5-1.34-.46-1.78.1-2.73 3.54-2.73 8.36.02 12 .43.56 1.27.61 1.76.11zM9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm6.39 2.56C13.71 14.7 11.53 14 9 14s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 18.22V20c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1.78c0-1.12-.61-2.15-1.61-2.66z"
  }));
});
exports.Transcribe = Transcribe;
Transcribe.displayName = 'Transcribe';
var TranscribeDimensions = {
  height: 24,
  width: 24
};
exports.TranscribeDimensions = TranscribeDimensions;