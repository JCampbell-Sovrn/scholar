"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DinnerDiningDimensions = exports.DinnerDining = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DinnerDining = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M2 19h20l-2 2H4l-2-2zM5 6h1v1H5V6zm0-2h1v1H5V4zm4 0v1H7V4h2zm0 3H7V6h2v1zm-3 8.23c-.36.11-.69.28-1 .47V8h1v7.23zm-2 1.29c-.38.44-.68.93-.84 1.48h16.82c.01-.16.03-.33.03-.5a5.497 5.497 0 0 0-10.58-2.1c-.59-.25-1.24-.4-1.93-.4-.17 0-.33.02-.5.04V8h2c1.03.06 1.9-.96 2-2h10V5H11c-.1-1.05-.97-1.97-2-2H3v1h1v1H3v1h1v1H3v1h1v8.52z"
  }));
});
exports.DinnerDining = DinnerDining;
DinnerDining.displayName = 'DinnerDining';
var DinnerDiningDimensions = {
  height: 24,
  width: 24
};
exports.DinnerDiningDimensions = DinnerDiningDimensions;