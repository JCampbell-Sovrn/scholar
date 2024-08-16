"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MoneyOffCsredDimensions = exports.MoneyOffCsred = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MoneyOffCsred = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M10.53 7.43c.42-.31.93-.47 1.54-.47s1.11.16 1.5.49c.39.32.65.7.79 1.12l1.89-.8c-.24-.71-.71-1.35-1.4-1.92-.5-.4-1.12-.65-1.85-.77V3h-2v2.11c-.41.08-.79.21-1.14.39-.35.18-.64.39-.9.63l1.43 1.43c.04-.04.09-.09.14-.13zM2.81 2.81 1.39 4.22l12.35 12.35c-.43.28-.95.43-1.55.43-.71 0-1.32-.23-1.83-.7-.5-.47-.86-1.07-1.06-1.81l-1.98.8c.34 1.17.95 2.08 1.83 2.73.57.42 1.19.68 1.85.83V21h2v-2.08c.44-.07.87-.17 1.29-.35.34-.14.64-.32.92-.53l4.57 4.57 1.41-1.41L2.81 2.81z"
  }));
});
exports.MoneyOffCsred = MoneyOffCsred;
MoneyOffCsred.displayName = 'MoneyOffCsred';
var MoneyOffCsredDimensions = {
  height: 24,
  width: 24
};
exports.MoneyOffCsredDimensions = MoneyOffCsredDimensions;