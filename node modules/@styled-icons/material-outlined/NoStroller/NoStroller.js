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
    d: "M8 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm7-11.34v3.51l2 2v-7.9c.58-.68.97-1.27 1.65-1.27.77 0 1.35.66 1.35 1.48V7h2v-.52C22 4.56 20.52 3 18.65 3c-1.66 0-2.54 1.27-3.18 2.03l-3.5 4.11 1.42 1.42L15 8.66zm4.78 13.95-1.91-1.91c-.29.76-1.01 1.3-1.87 1.3-1.1 0-2-.9-2-2 0-.86.54-1.58 1.3-1.87L14.17 17H7.43c-.85 0-1.31-1-.76-1.65l2.69-3.16-7.97-7.97L2.8 2.81l7.86 7.86 1.42 1.42 9.11 9.11-1.41 1.41zM12.17 15l-1.39-1.39L9.6 15h2.57zM10 5c.29 0 .58.02.86.05L9.49 6.67l1.42 1.42L14.3 4.1C13.03 3.4 11.56 3 10 3c-1.23 0-2.4.25-3.47.7L8.1 5.27A7.09 7.09 0 0 1 10 5z"
  }));
});
exports.NoStroller = NoStroller;
NoStroller.displayName = 'NoStroller';
var NoStrollerDimensions = {
  height: 24,
  width: 24
};
exports.NoStrollerDimensions = NoStrollerDimensions;