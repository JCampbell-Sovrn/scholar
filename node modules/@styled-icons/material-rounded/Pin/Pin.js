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
    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7.64 14.47c0 .29-.24.53-.53.53h-.09c-.29 0-.53-.24-.53-.53V10.5l-.45.33a.534.534 0 0 1-.63-.86l1.19-.85a.66.66 0 0 1 1.04.54v4.81zm5.37.53h-2.67c-.4 0-.72-.32-.72-.72 0-.19.08-.38.21-.51.95-.95 1.58-1.58 1.92-1.94.4-.42.54-.69.54-1.06 0-.4-.31-.72-.81-.72-.34 0-.57.16-.72.37-.15.2-.41.26-.64.16a.548.548 0 0 1-.22-.85c.15-.19.37-.38.67-.53.69-.33 1.48-.2 1.95.03.86.44.91 1.24.91 1.48 0 .64-.31 1.26-.92 1.86-.25.25-.72.71-1.4 1.39l.03.05h1.88c.27 0 .49.22.49.49s-.23.5-.5.5zm5.74-.85c-.08.13-.56.85-1.76.85-.03 0-1.23.06-1.83-.98-.15-.26-.04-.6.24-.71l.12-.05c.22-.09.47-.01.59.19.14.24.39.49.88.49.41 0 .89-.28.89-.77 0-.55-.48-.79-1.04-.79a.5.5 0 0 1-.49-.5c0-.26.2-.47.45-.49v-.01c.33 0 .88-.14.88-.72 0-.39-.31-.65-.75-.65-.32 0-.53.13-.67.3-.14.18-.37.26-.58.17l-.08-.03c-.3-.12-.4-.5-.2-.75.27-.35.76-.7 1.54-.7 1.09 0 1.54.64 1.62.75.33.5.28 1.16.02 1.57-.15.22-.32.38-.52.48v.07c.28.11.51.28.68.52.37.52.33 1.27.01 1.76z"
  }));
});
exports.Pin = Pin;
Pin.displayName = 'Pin';
var PinDimensions = {
  height: 24,
  width: 24
};
exports.PinDimensions = PinDimensions;