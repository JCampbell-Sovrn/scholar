"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SportsBasketballDimensions = exports.SportsBasketball = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SportsBasketball = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M17.09 11h4.86a9.951 9.951 0 0 0-1.54-4.4 5.987 5.987 0 0 0-3.32 4.4zM6.91 11a5.987 5.987 0 0 0-3.32-4.4A9.951 9.951 0 0 0 2.05 11h4.86zm8.16 0a7.994 7.994 0 0 1 4.06-6A9.969 9.969 0 0 0 13 2.05V11h2.07zm-6.14 0H11V2.05A9.943 9.943 0 0 0 4.87 5a7.994 7.994 0 0 1 4.06 6zm6.14 2H13v8.95A9.943 9.943 0 0 0 19.13 19a7.994 7.994 0 0 1-4.06-6zM3.59 17.4A6.029 6.029 0 0 0 6.91 13H2.05c.16 1.61.71 3.11 1.54 4.4zm13.5-4.4a5.987 5.987 0 0 0 3.32 4.4 9.951 9.951 0 0 0 1.54-4.4h-4.86zm-8.16 0a7.994 7.994 0 0 1-4.06 6A9.969 9.969 0 0 0 11 21.95V13H8.93z"
  }));
});
exports.SportsBasketball = SportsBasketball;
SportsBasketball.displayName = 'SportsBasketball';
var SportsBasketballDimensions = {
  height: 24,
  width: 24
};
exports.SportsBasketballDimensions = SportsBasketballDimensions;