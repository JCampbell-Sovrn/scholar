"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PestControlRodentDimensions = exports.PestControlRodent = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PestControlRodent = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 17,
    r: 1
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20.86 14.97-.93-.84c.48-3.45-2.87-6.04-6.05-4.82A5.79 5.79 0 0 0 12 9c-4.26 0-5.65 3.58-5.89 4.85A2.983 2.983 0 0 1 4 11c0-1.66 1.34-3 3-3h2.5a2.5 2.5 0 0 0 0-5H8c-.55 0-1 .45-1 1s.45 1 1 1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5H7c-2.76 0-5 2.24-5 5 0 2.44 1.76 4.47 4.07 4.91A5.998 5.998 0 0 0 12 21h6.53c3.11 0 4.7-3.89 2.33-6.03zM18.53 19H12c-1.21 0-2.34-.54-3.11-1.48-.78-.95-1.06-2.16-.8-3.41a3.95 3.95 0 0 1 2.99-3.01c.22-.05.45-.06.67-.07-.47.71-.75 1.55-.75 2.47 0 1.24.5 2.37 1.32 3.18l1.41-1.41c-.45-.45-.73-1.08-.73-1.77 0-1.42 1.2-2.5 2.5-2.5a2.5 2.5 0 0 1 2.5 2.5c0 .46-.13.88-.35 1.25l1.87 1.7c.31.28.48.67.48 1.09 0 .8-.66 1.46-1.47 1.46z"
  }));
});
exports.PestControlRodent = PestControlRodent;
PestControlRodent.displayName = 'PestControlRodent';
var PestControlRodentDimensions = {
  height: 24,
  width: 24
};
exports.PestControlRodentDimensions = PestControlRodentDimensions;