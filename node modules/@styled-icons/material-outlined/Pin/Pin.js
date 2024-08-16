"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PinDimensions = exports.Pin = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Pin = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.49 10.5V15h1.15V9h-.87l-1.76 1.27.58.89zm4.98-.45c.5 0 .81.32.81.72 0 .37-.14.64-.54 1.06-.36.38-1.06 1.08-2.13 2.15V15h3.89v-.99h-2.37l-.03-.05c.68-.68 1.15-1.14 1.4-1.39.61-.6.92-1.22.92-1.86 0-.24-.05-1.04-.91-1.48-.47-.23-1.26-.36-1.95-.03-.82.39-.99 1.13-1 1.15l1.01.42c.1-.33.38-.72.9-.72zm5.52 3.89c-.83 0-.99-.76-1.02-.86l-1.03.41c.45 1.59 2.01 1.51 2.05 1.51 1.2 0 1.68-.72 1.76-.85.32-.49.36-1.24-.01-1.76-.17-.24-.4-.41-.68-.52v-.07c.2-.1.37-.26.52-.48.26-.41.31-1.07-.02-1.57-.08-.11-.53-.75-1.62-.75-1.26 0-1.74.9-1.85 1.24l.99.41c.11-.32.35-.64.85-.64.44 0 .75.26.75.65 0 .58-.55.72-.88.72h-.46v1h.5c.56 0 1.04.24 1.04.79 0 .49-.48.77-.89.77z"
  }));
});
exports.Pin = Pin;
Pin.displayName = 'Pin';
var PinDimensions = {
  height: 24,
  width: 24
};
exports.PinDimensions = PinDimensions;