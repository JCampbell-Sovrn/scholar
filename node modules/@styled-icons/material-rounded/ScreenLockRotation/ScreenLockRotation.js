"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScreenLockRotationDimensions = exports.ScreenLockRotation = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScreenLockRotation = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m20.41 11.36-.35-.35a.996.996 0 1 0-1.41 1.41l.35.35-4.24 4.24-7.78-7.78 4.24-4.24.35.35a.996.996 0 1 0 1.41-1.41l-.35-.36c-.79-.79-2.03-.79-2.82 0L5.57 7.82c-.78.78-.78 2.05 0 2.83l7.78 7.78c.79.79 2.03.79 2.82 0l4.24-4.24c.79-.78.79-2.05 0-2.83zm-9.56 6.49a.5.5 0 0 0-.85.36v1.53c-3.17-.82-5.59-3.54-5.95-6.86a.995.995 0 0 0-.99-.88c-.6 0-1.07.53-1 1.12C2.62 18.11 6.87 22 12 22c.59 0 1.17-.06 1.73-.16.4-.07.55-.56.27-.85l-3.15-3.14z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 9h4c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1v-.89c0-1-.68-1.92-1.66-2.08A2 2 0 0 0 16 3v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1zm1-6c0-.55.45-1 1-1s1 .45 1 1v1h-2V3z"
  }));
});
exports.ScreenLockRotation = ScreenLockRotation;
ScreenLockRotation.displayName = 'ScreenLockRotation';
var ScreenLockRotationDimensions = {
  height: 24,
  width: 24
};
exports.ScreenLockRotationDimensions = ScreenLockRotationDimensions;