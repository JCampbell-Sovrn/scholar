"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AltRouteDimensions = exports.AltRoute = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AltRoute = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m9.78 11.16-1.42 1.42a7.282 7.282 0 0 1-1.79-2.94l1.94-.49c.32.89.77 1.5 1.27 2.01zm.37-6.01-2.8-2.8c-.2-.2-.51-.2-.71 0l-2.79 2.8a.5.5 0 0 0 .36.85h1.81c.02.81.08 1.54.19 2.17l1.94-.49C8.08 7.2 8.03 6.63 8.02 6H9.8a.5.5 0 0 0 .35-.85zm10 0-2.79-2.79c-.2-.2-.51-.2-.71 0l-2.79 2.79c-.32.31-.1.85.35.85h1.78c-.1 3.68-1.28 4.75-2.54 5.88-.5.44-1.01.92-1.45 1.55-.34-.49-.73-.88-1.13-1.24L9.46 13.6c.93.85 1.54 1.54 1.54 3.4v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-2.02.71-2.66 1.79-3.63 1.38-1.24 3.08-2.78 3.2-7.37h1.8a.5.5 0 0 0 .36-.85z"
  }));
});
exports.AltRoute = AltRoute;
AltRoute.displayName = 'AltRoute';
var AltRouteDimensions = {
  height: 24,
  width: 24
};
exports.AltRouteDimensions = AltRouteDimensions;