"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownhillSkiingDimensions = exports.DownhillSkiing = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DownhillSkiing = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.5 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2.72 16.4.76.27a5.933 5.933 0 0 0 4.34-.17L22 22.13c-1.05.55-2.24.87-3.5.87-.86 0-1.68-.14-2.45-.41L2 17.47l.5-1.41 6.9 2.51 1.72-4.44-3.57-3.73c-.89-.94-.67-2.47.45-3.12l3.48-2.01c1.1-.64 2.52-.1 2.91 1.11l.33 1.08a5.017 5.017 0 0 0 2.83 3.14l.52-1.6 1.43.46-1.12 3.45A7.029 7.029 0 0 1 13 8.59l-2.53 1.45 3.03 3.46-2.22 5.76 3.09 1.12 2.1-6.44c.46.18.94.31 1.44.41l-2.13 6.55z"
  }));
});
exports.DownhillSkiing = DownhillSkiing;
DownhillSkiing.displayName = 'DownhillSkiing';
var DownhillSkiingDimensions = {
  height: 24,
  width: 24
};
exports.DownhillSkiingDimensions = DownhillSkiingDimensions;