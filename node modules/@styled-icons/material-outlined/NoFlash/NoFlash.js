"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoFlashDimensions = exports.NoFlash = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NoFlash = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20.4 5.6H22L19 11V7h-1V2h4l-1.6 3.6zM16 11.4v1.77l2 2V11c0-.88-.72-1.6-1.6-1.6h-2.54L12.58 8h-1.75l3.4 3.4H16zM2.1 2.1.69 3.51l5.66 5.66-.21.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l2.54 2.54 1.41-1.41L2.1 2.1zm9.4 13.4c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S9.17 14 10 14s1.5.67 1.5 1.5zm4.46 4.5H4v-8.6h3.02l.59-.65.15-.16 1.5 1.5A3.486 3.486 0 0 0 6.5 15.5c0 1.93 1.57 3.5 3.5 3.5 1.68 0 3.07-1.18 3.42-2.76l2.55 2.55-.01 1.21z"
  }));
});
exports.NoFlash = NoFlash;
NoFlash.displayName = 'NoFlash';
var NoFlashDimensions = {
  height: 24,
  width: 24
};
exports.NoFlashDimensions = NoFlashDimensions;