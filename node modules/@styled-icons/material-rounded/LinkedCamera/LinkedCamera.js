"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkedCameraDimensions = exports.LinkedCamera = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var LinkedCamera = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 13,
    r: 2.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.6 2.37c2.1.27 3.77 1.93 4.03 4.03.04.34.32.6.66.6.39 0 .71-.34.66-.73a6.008 6.008 0 0 0-5.22-5.22c-.39-.05-.73.27-.73.66 0 .34.26.62.6.66zm2.63 3.82a3.338 3.338 0 0 0-2.42-2.42c-.41-.1-.81.22-.81.65 0 .29.19.57.48.64.72.18 1.29.74 1.46 1.46.07.29.34.48.64.48.43 0 .75-.4.65-.81z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 8c0-1.1-.9-2-2-2V4c0-.55-.45-1-1-1H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-3zm-5 9.5c-2.48 0-4.5-2.02-4.5-4.5S9.52 8.5 12 8.5s4.5 2.02 4.5 4.5-2.02 4.5-4.5 4.5z"
  }));
});
exports.LinkedCamera = LinkedCamera;
LinkedCamera.displayName = 'LinkedCamera';
var LinkedCameraDimensions = {
  height: 24,
  width: 24
};
exports.LinkedCameraDimensions = LinkedCameraDimensions;