"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MacroOffDimensions = exports.MacroOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MacroOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8.66 4.93c.24 0 .46.07.64.2l.81.56c-.29.24-.54.54-.72.87l1.66 1.66C11.03 8.14 11 8.08 11 8c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1c-.08 0-.14-.03-.22-.04l4.06 4.06a3.13 3.13 0 0 0 2.63-3.09c0-.71-.25-1.39-.67-1.93.43-.54.67-1.22.67-1.93a3.145 3.145 0 0 0-3.57-3.11C14.44 1.81 13.31 1 12 1s-2.44.81-2.91 1.96a3.132 3.132 0 0 0-2.52.78l1.42 1.42c.2-.13.42-.23.67-.23zm6.68 6.14c-.24 0-.46-.07-.64-.2l-.81-.57c.55-.45.94-1.09 1.06-1.83l.88.42c.4.19.66.59.66 1.03 0 .64-.52 1.15-1.15 1.15zm-.65-5.94c.2-.13.42-.2.65-.2.63 0 1.14.51 1.14 1.14 0 .44-.25.83-.66 1.03l-.88.42c-.12-.74-.51-1.38-1.07-1.83l.82-.56zM12 3c.62 0 1.12.49 1.14 1.1l-.11 1.09C12.71 5.07 12.36 5 12 5s-.7.07-1.02.19l-.12-1.09c.02-.61.52-1.1 1.14-1.1zm7.98 14.15A8.909 8.909 0 0 0 21 13c-1.5 0-2.91.37-4.15 1.02l3.13 3.13zM3 13a9 9 0 0 0 9 9 9 9 0 0 0-9-9zm2.44 2.44c1.9.71 3.42 2.22 4.12 4.12a7.04 7.04 0 0 1-4.12-4.12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2.81 2.81 1.39 4.22l4.42 4.42c-.19.4-.3.84-.3 1.29a3.147 3.147 0 0 0 3.58 3.11A3.15 3.15 0 0 0 12 15c.05 0 .11-.01.16-.01l1.64 1.64A8.853 8.853 0 0 0 12 22c2.02 0 3.88-.67 5.38-1.8l2.4 2.4 1.41-1.41L2.81 2.81zm11.63 16.75c.2-.54.47-1.04.79-1.5l.72.72c-.47.31-.97.58-1.51.78z"
  }));
});
exports.MacroOff = MacroOff;
MacroOff.displayName = 'MacroOff';
var MacroOffDimensions = {
  height: 24,
  width: 24
};
exports.MacroOffDimensions = MacroOffDimensions;