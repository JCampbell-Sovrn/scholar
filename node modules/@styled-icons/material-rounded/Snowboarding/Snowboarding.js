"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SnowboardingDimensions = exports.Snowboarding = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Snowboarding = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M14 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM6.35 9.53c.47.29 1.09.15 1.38-.32L9.1 7h2.35l-2.51 3.99c-.28.45-.37 1-.25 1.52L9.5 16 6 18.35l-.47-.1c-.96-.2-1.71-.85-2.1-1.67a.744.744 0 0 0-.51-.42c-.43-.09-.82.2-.9.58-.04.14-.02.31.05.46.58 1.24 1.71 2.2 3.15 2.51l12.63 2.69c1.44.31 2.86-.11 3.9-1.01.13-.11.21-.26.24-.41.08-.38-.16-.8-.59-.89a.748.748 0 0 0-.64.17c-.69.6-1.64.88-2.6.67L17 20.69l-.88-5.43c-.08-.49-.34-.93-.72-1.24l-2.72-2.19 1.8-2.89a6.507 6.507 0 0 0 4.39 2.96c.6.11 1.13-.39 1.13-1 0-.48-.35-.89-.83-.98a4.503 4.503 0 0 1-3.3-2.64l-.52-1.21C15.16 5.64 14.61 5 13.7 5H9.11c-.69 0-1.33.36-1.7.94L6.03 8.15c-.29.47-.15 1.09.32 1.38zm2.38 9.4 2.25-1.51c.47-.32.73-.88.65-1.44l-.32-2.4 2.84 2.02.75 4.64-6.17-1.31z"
  }));
});
exports.Snowboarding = Snowboarding;
Snowboarding.displayName = 'Snowboarding';
var SnowboardingDimensions = {
  height: 24,
  width: 24
};
exports.SnowboardingDimensions = SnowboardingDimensions;