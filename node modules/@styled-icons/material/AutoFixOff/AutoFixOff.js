"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoFixOffDimensions = exports.AutoFixOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AutoFixOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m23 1-2.5 1.4L18 1l1.4 2.5L18 6l2.5-1.4L23 6l-1.4-2.5L23 1zm-8.34 6.22 2.12 2.12-2.44 2.44.81.81 2.55-2.55a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0L11.4 8.84l.81.81 2.45-2.43zm-.78 6.65-3.75-3.75-6.86-6.86L2 4.53l6.86 6.86-6.57 6.57a.996.996 0 0 0 0 1.41l2.34 2.34c.39.39 1.02.39 1.41 0l6.57-6.57L19.47 22l1.27-1.27-6.86-6.86z"
  }));
});
exports.AutoFixOff = AutoFixOff;
AutoFixOff.displayName = 'AutoFixOff';
var AutoFixOffDimensions = {
  height: 24,
  width: 24
};
exports.AutoFixOffDimensions = AutoFixOffDimensions;