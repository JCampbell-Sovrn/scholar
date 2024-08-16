"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MicExternalOnDimensions = exports.MicExternalOn = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MicExternalOn = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M9.22 7H4.78C4.3 6.47 4 5.77 4 5c0-1.66 1.34-3 3-3s3 1.34 3 3c0 .77-.3 1.47-.78 2zm7.02-4.99C18.32 2.13 20 4.08 20 6.16V21c0 .55-.45 1-1 1s-1-.45-1-1V6.09c0-.96-.64-1.86-1.58-2.05A2.01 2.01 0 0 0 14 6v11.84c0 2.08-1.68 4.03-3.76 4.15C7.92 22.13 6 20.29 6 18h-.55a.5.5 0 0 1-.5-.45L4.11 9.1c-.06-.59.4-1.1.99-1.1h3.8c.59 0 1.05.51 1 1.1l-.85 8.45c-.03.26-.25.45-.5.45H8a2.01 2.01 0 0 0 2.42 1.96c.94-.19 1.58-1.09 1.58-2.05V6c0-2.29 1.92-4.13 4.24-3.99z"
  }));
});
exports.MicExternalOn = MicExternalOn;
MicExternalOn.displayName = 'MicExternalOn';
var MicExternalOnDimensions = {
  height: 24,
  width: 24
};
exports.MicExternalOnDimensions = MicExternalOnDimensions;