"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakfastDiningDimensions = exports.BreakfastDining = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BreakfastDining = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm1 5.72-1 .58V19H6V9.31l-.99-.58C4.38 8.35 4 7.71 4 7c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .71-.38 1.36-1 1.72z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.71 9.29C12.51 9.1 12.26 9 12 9s-.51.1-.71.29l-3 3a.996.996 0 0 0 0 1.41l3 3c.2.2.45.3.71.3s.51-.1.71-.29l3-3a.996.996 0 0 0 0-1.41l-3-3.01zM12 14.58 10.41 13 12 11.41 13.59 13 12 14.58z"
  }));
});
exports.BreakfastDining = BreakfastDining;
BreakfastDining.displayName = 'BreakfastDining';
var BreakfastDiningDimensions = {
  height: 24,
  width: 24
};
exports.BreakfastDiningDimensions = BreakfastDiningDimensions;