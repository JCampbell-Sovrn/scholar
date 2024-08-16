"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GppBadDimensions = exports.GppBad = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var GppBad = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m18.7 4.51-6-2.25c-.45-.17-.95-.17-1.4 0l-6 2.25C4.52 4.81 4 5.55 4 6.39v4.7c0 4.94 3.27 9.57 7.71 10.83.19.05.39.05.57 0C16.73 20.66 20 16.03 20 11.09v-4.7c0-.84-.52-1.58-1.3-1.88zm-3.9 10.28c-.39.39-1.02.39-1.41.01L12 13.42l-1.39 1.38a.996.996 0 1 1-1.41-1.41L10.59 12 9.2 10.61a.996.996 0 1 1 1.41-1.41L12 10.59l1.39-1.39a.996.996 0 1 1 1.41 1.41L13.42 12l1.38 1.38c.39.39.39 1.02 0 1.41z"
  }));
});
exports.GppBad = GppBad;
GppBad.displayName = 'GppBad';
var GppBadDimensions = {
  height: 24,
  width: 24
};
exports.GppBadDimensions = GppBadDimensions;