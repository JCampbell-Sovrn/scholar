"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoNotStepDimensions = exports.DoNotStep = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DoNotStep = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M2.1 3.51a.996.996 0 0 0 0 1.41l7.19 7.19c.18.2.18.5-.01.7a.485.485 0 0 1-.7 0L6.87 11.1c-.11.4-.26.78-.45 1.12l1.4 1.4c.2.2.2.51 0 .71a.485.485 0 0 1-.7 0l-1.27-1.27c-.24.29-.5.56-.77.8l1.28 1.28c.2.2.2.51 0 .71-.1.1-.23.15-.36.15s-.26-.05-.35-.15l-1.38-1.38c-.71.47-1.43.81-2.02 1.04A1.99 1.99 0 0 0 1 17.37V18c0 1.1.9 2 2 2h6.67c.53 0 1.04-.21 1.41-.59l2.74-2.74 5.23 5.23a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0zm16.41 12.17-1.41-1.41 4.48-4.48c.78.78.78 2.05 0 2.83l-3.07 3.06zm2.37-6.6-4.48 4.48-7.1-7.09 3.09-3.07a2 2 0 0 1 2.82 0l5.67 5.68z"
  }));
});
exports.DoNotStep = DoNotStep;
DoNotStep.displayName = 'DoNotStep';
var DoNotStepDimensions = {
  height: 24,
  width: 24
};
exports.DoNotStepDimensions = DoNotStepDimensions;