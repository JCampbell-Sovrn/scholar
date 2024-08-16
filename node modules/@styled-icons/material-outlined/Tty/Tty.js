"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TtyDimensions = exports.Tty = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Tty = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16 6h-2V4h2v2zm2 1h-2v2h2V7zm1 2h2V7h-2v2zm0-5h-2v2h2V4zm-4 3h-2v2h2V7zm4 3h-2v2h2v-2zm-3 0h-2v2h2v-2zm-3-6h-2v2h2V4zm7 11.82v4.15c0 .56-.47 1.03-1.03 1-2.89-.17-5.6-1.03-7.97-2.4A17.999 17.999 0 0 1 4.43 12a17.89 17.89 0 0 1-2.4-7.97C2 3.47 2.47 3 3.03 3h4.15c.48 0 .89.34.98.8l.74 3.68a.99.99 0 0 1-.27.9L6.1 10.9c1.43 2.5 3.5 4.57 6 6l2.52-2.52a.98.98 0 0 1 .9-.27l3.67.73c.47.09.81.5.81.98zM5.18 8.99l1.65-1.65L6.36 5H4.13c.17 1.37.53 2.71 1.05 3.99zM18 16.64l-2.34-.47-1.65 1.65c1.28.52 2.63.87 3.99 1.05v-2.23zM20 4v2h2V4h-2zm0 8h2v-2h-2v2zm-7-2h-2v2h2v-2z"
  }));
});
exports.Tty = Tty;
Tty.displayName = 'Tty';
var TtyDimensions = {
  height: 24,
  width: 24
};
exports.TtyDimensions = TtyDimensions;