"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoWheelerDimensions = exports.TwoWheeler = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TwoWheeler = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 11c-.18 0-.36.03-.53.05L17.41 9H19c.55 0 1-.45 1-1v-.38c0-.74-.78-1.23-1.45-.89l-2.28 1.14L13.7 5.3A.976.976 0 0 0 13 5h-3c-.55 0-1 .45-1 1s.45 1 1 1h2.17c.27 0 .52.11.71.29L14.59 9h-3.35c-.16 0-.31.04-.45.11l-3.14 1.57a.99.99 0 0 1-1.15-.19l-1.2-1.2C5.11 9.11 4.85 9 4.59 9H1c-.55 0-1 .45-1 1s.45 1 1 1h3a4 4 0 0 0-3.89 4.94 3.96 3.96 0 0 0 2.95 2.95A4 4 0 0 0 8 15l1.41 1.41c.38.38.89.59 1.42.59h1.01c.72 0 1.38-.38 1.74-1.01l2.91-5.09 1.01 1.01a3.974 3.974 0 0 0-1.38 4.05c.34 1.44 1.51 2.61 2.95 2.94A4.01 4.01 0 0 0 24 15c0-2.21-1.79-4-4-4zM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm16 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
  }));
});
exports.TwoWheeler = TwoWheeler;
TwoWheeler.displayName = 'TwoWheeler';
var TwoWheelerDimensions = {
  height: 24,
  width: 24
};
exports.TwoWheelerDimensions = TwoWheelerDimensions;