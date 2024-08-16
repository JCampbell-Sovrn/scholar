"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoStrollerDimensions = exports.NoStroller = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NoStroller = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm6.3-15.9a8.88 8.88 0 0 0-7.76-.39l4.37 4.37L14.3 4.1zm6.19 17.8a.996.996 0 0 0 0-1.41l-9.82-9.82-7.16-7.16A.996.996 0 1 0 2.1 4.92l7.26 7.26L6.7 15.3c-.55.65-.09 1.65.76 1.65h6.66l1.17 1.17c-.88.33-1.47 1.25-1.26 2.28.15.76.78 1.39 1.54 1.54 1.03.21 1.95-.38 2.28-1.26l1.2 1.2c.41.41 1.04.41 1.44.02zM17 6.27c.58-.68.97-1.27 1.65-1.27.68 0 1.22.52 1.33 1.21.1.45.5.79.98.79.55 0 1-.45 1-1 0-.06 0-.11-.01-.16v-.01C21.65 4.22 20.3 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11L17 14.17v-7.9z"
  }));
});
exports.NoStroller = NoStroller;
NoStroller.displayName = 'NoStroller';
var NoStrollerDimensions = {
  height: 24,
  width: 24
};
exports.NoStrollerDimensions = NoStrollerDimensions;