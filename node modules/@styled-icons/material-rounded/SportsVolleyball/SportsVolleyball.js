"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SportsVolleyballDimensions = exports.SportsVolleyball = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SportsVolleyball = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6 4.01C3.58 5.84 2 8.73 2 12c0 1.46.32 2.85.89 4.11L6 14.31V4.01zm5 7.41V2.05c-1.06.11-2.07.38-3 .79v10.32l3-1.74zm1 1.73-8.11 4.68c.61.84 1.34 1.59 2.18 2.2L15 14.89l-3-1.74zm1-5.19v3.46l8.11 4.68c.42-.93.7-1.93.82-2.98L13 7.96zM8.07 21.2c1.21.51 2.53.8 3.93.8 3.34 0 6.29-1.65 8.11-4.16L17 16.04 8.07 21.2zm13.85-10.39c-.55-4.63-4.26-8.3-8.92-8.76v3.6l8.92 5.16z"
  }));
});
exports.SportsVolleyball = SportsVolleyball;
SportsVolleyball.displayName = 'SportsVolleyball';
var SportsVolleyballDimensions = {
  height: 24,
  width: 24
};
exports.SportsVolleyballDimensions = SportsVolleyballDimensions;