"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoNotTouchDimensions = exports.DoNotTouch = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DoNotTouch = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M2.81 2.81 1.39 4.22 7 9.83v4.3l-2.6-1.48c-.17-.09-.34-.14-.54-.14-.26 0-.5.09-.7.26L2 13.88l6.8 7.18c.57.6 1.35.94 2.18.94H17c.62 0 1.18-.19 1.66-.52l1.12 1.12 1.41-1.41L2.81 2.81zM17 20h-6c-.39 0-.64-.23-.75-.36L6.87 16H9v-4.17l8.14 8.14c-.05.01-.09.03-.14.03zm-3.17-9H14V3.25a1.25 1.25 0 0 1 2.5 0V11h1V5.25a1.25 1.25 0 0 1 2.5 0v11.92l-2-2V13h-2.17l-2-2zm-.83-.83V2.25a1.25 1.25 0 0 0-2.5 0v5.42l2.5 2.5zm-3.5-3.5V4.25C9.5 3.56 8.94 3 8.25 3c-.67 0-1.2.53-1.24 1.18L9.5 6.67z"
  }));
});
exports.DoNotTouch = DoNotTouch;
DoNotTouch.displayName = 'DoNotTouch';
var DoNotTouchDimensions = {
  height: 24,
  width: 24
};
exports.DoNotTouchDimensions = DoNotTouchDimensions;