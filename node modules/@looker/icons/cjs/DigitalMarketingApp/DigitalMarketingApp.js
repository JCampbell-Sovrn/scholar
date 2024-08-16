"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DigitalMarketingAppDimensions = exports.DigitalMarketingApp = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DigitalMarketingApp = _react.default.forwardRef((props, ref) => {
  const attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return _react.default.createElement(_styledIcon.StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), _react.default.createElement("path", {
    d: "M11.8148 8.10172H4.13484C3.62584 8.10172 3.13684 8.30372 2.77684 8.66372C2.41684 9.02372 2.21484 9.51172 2.21484 10.0217V13.8617C2.21484 14.3707 2.41684 14.8597 2.77684 15.2197C3.13684 15.5797 3.62484 15.7817 4.13484 15.7817H5.09484V19.6217C5.09484 19.8767 5.19584 20.1207 5.37584 20.3007C5.55584 20.4807 5.79984 20.5817 6.05484 20.5817H7.97484C8.22984 20.5817 8.47384 20.4807 8.65384 20.3007C8.83384 20.1207 8.93484 19.8767 8.93484 19.6217V15.7817H11.8148L16.6148 19.6217V4.26172L11.8148 8.10172V8.10172ZM14.6948 15.3977L12.7748 13.8617H4.13484V10.0217H12.7748L14.6948 8.48572V15.3977ZM20.9348 11.9417C20.9348 13.5837 20.0128 15.0717 18.5348 15.7817V8.10172C20.0038 8.82172 20.9348 10.3097 20.9348 11.9417Z"
  }));
});

exports.DigitalMarketingApp = DigitalMarketingApp;
DigitalMarketingApp.displayName = 'DigitalMarketingApp';
const DigitalMarketingAppDimensions = {
  height: 24,
  width: 24
};
exports.DigitalMarketingAppDimensions = DigitalMarketingAppDimensions;
//# sourceMappingURL=DigitalMarketingApp.js.map