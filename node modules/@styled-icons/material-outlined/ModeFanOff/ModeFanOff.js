"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModeFanOffDimensions = exports.ModeFanOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ModeFanOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18 8c-1.06 0-1.64.29-3.91 1.19-.19-.14-.4-.27-.62-.37.25-1.03.61-1.53 1.33-2.04.81-.57 1.2-1.34 1.2-2.28 0-1.22-.95-2.5-2.6-2.5-3.08 0-4.92 1.47-5.32 3.26l2.33 2.33C10.07 6.69 10 6.38 10 6c0-1.18 1.4-2 3.4-2 .57 0 .6.42.6.5 0 .27-.05.43-.35.65-1.27.9-1.83 1.91-2.16 3.39l-.02.1 7.25 7.25c.24.06.5.11.78.11 1.22 0 2.5-.95 2.5-2.6C22 9.91 20.11 8 18 8zm1.5 6c-.27 0-.43-.05-.65-.35-.9-1.27-1.91-1.83-3.39-2.16a3.12 3.12 0 0 0-.15-.62c1.8-.75 2.18-.87 2.69-.87 1.18 0 2 1.4 2 3.4 0 .57-.42.6-.5.6zM1.39 4.22l3.89 3.89C5.04 8.05 4.78 8 4.5 8 3.28 8 2 8.95 2 10.6 2 14.09 3.89 16 6 16c1.06 0 1.64-.29 3.91-1.19.19.14.4.27.62.37-.25 1.03-.61 1.53-1.33 2.04-.81.57-1.2 1.34-1.2 2.28 0 1.22.95 2.5 2.6 2.5 3.08 0 4.92-1.47 5.32-3.26l3.86 3.86 1.41-1.41L2.81 2.81 1.39 4.22zm11.13 11.24c.03 0 .06-.02.09-.02l.97.97c.35.9.42 1.21.42 1.59 0 1.18-1.4 2-3.4 2-.57 0-.6-.42-.6-.5 0-.27.05-.43.35-.65 1.28-.89 1.83-1.91 2.17-3.39zm-3.98-2.94c.03.22.08.42.15.62-1.8.74-2.18.86-2.69.86-1.18 0-2-1.4-2-3.4 0-.57.42-.6.5-.6.27 0 .43.05.65.35.89 1.28 1.91 1.83 3.39 2.17z"
  }));
});
exports.ModeFanOff = ModeFanOff;
ModeFanOff.displayName = 'ModeFanOff';
var ModeFanOffDimensions = {
  height: 24,
  width: 24
};
exports.ModeFanOffDimensions = ModeFanOffDimensions;