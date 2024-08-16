"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConnectedTvDimensions = exports.ConnectedTv = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ConnectedTv = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 3H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1h4c1.1 0 1.99-.9 1.99-2L22 5c0-1.1-.9-2-2-2zm0 14H4V5h16v12zM7 15.97A2.007 2.007 0 0 0 5.03 14H5v2h2v-.03zm-1.38-3.42c1.44.26 2.58 1.4 2.83 2.84.06.36.37.61.73.61.46 0 .82-.41.75-.86a4.998 4.998 0 0 0-4.06-4.06.746.746 0 0 0-.87.74c0 .37.26.67.62.73zm.02-3.02c3.07.3 5.52 2.75 5.83 5.82.04.37.37.65.74.65.45 0 .79-.4.75-.85a8.001 8.001 0 0 0-7.11-7.1.756.756 0 0 0-.85.74c0 .37.27.71.64.74z"
  }));
});
exports.ConnectedTv = ConnectedTv;
ConnectedTv.displayName = 'ConnectedTv';
var ConnectedTvDimensions = {
  height: 24,
  width: 24
};
exports.ConnectedTvDimensions = ConnectedTvDimensions;