"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DryCleaningDimensions = exports.DryCleaning = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DryCleaning = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19.56 11.36 13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1 .45-1 1-1 1 .45 1 1h2c0-1.84-1.66-3.3-3.56-2.95-1.18.22-2.15 1.17-2.38 2.35-.3 1.56.6 2.94 1.94 3.42v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v6h10v-6h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21zM18.58 14H17v-1H7v1H5.42c-.23 0-.42-.19-.42-.43 0-.17.1-.32.25-.38l6.75-3 6.75 3a.423.423 0 0 1-.17.81z"
  }));
});
exports.DryCleaning = DryCleaning;
DryCleaning.displayName = 'DryCleaning';
var DryCleaningDimensions = {
  height: 24,
  width: 24
};
exports.DryCleaningDimensions = DryCleaningDimensions;