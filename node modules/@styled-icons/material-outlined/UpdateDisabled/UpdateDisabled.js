"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateDisabledDimensions = exports.UpdateDisabled = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var UpdateDisabled = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20.94 13a8.865 8.865 0 0 1-1.33 3.79l-1.47-1.47c.38-.71.65-1.49.77-2.32h2.03zM8.67 5.84A7.06 7.06 0 0 1 12 5a7.01 7.01 0 0 1 5.74 3H15v2h6V4h-2v2.36C17.35 4.32 14.83 3 12 3c-1.76 0-3.4.51-4.78 1.39l1.45 1.45zM11 7v1.17l2 2V7h-2zm8.78 15.61-3-3A8.973 8.973 0 0 1 12 21a9 9 0 0 1-9-9c0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67A7.06 7.06 0 0 0 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85z"
  }));
});
exports.UpdateDisabled = UpdateDisabled;
UpdateDisabled.displayName = 'UpdateDisabled';
var UpdateDisabledDimensions = {
  height: 24,
  width: 24
};
exports.UpdateDisabledDimensions = UpdateDisabledDimensions;