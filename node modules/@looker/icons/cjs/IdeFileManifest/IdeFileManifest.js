"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdeFileManifestDimensions = exports.IdeFileManifest = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const IdeFileManifest = _react.default.forwardRef((props, ref) => {
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.82744 4.05316L8.51855 3.12305L9.48239 4.87548L7.79128 5.80559C7.47173 5.98134 7.2732 6.31711 7.2732 6.68181V9.09513C7.2732 9.95726 6.9023 10.7777 6.25508 11.3473L5.51418 11.9993L6.33546 12.722C6.91178 13.2292 7.27175 13.938 7.34126 14.7025L7.61686 17.7342C7.6498 18.0965 7.87697 18.4124 8.21001 18.5589L9.40321 19.0839L8.59773 20.9146L7.40454 20.3896C6.4054 19.95 5.7239 19.0023 5.62507 17.9152L5.34947 14.8836C5.3263 14.6287 5.20631 14.3925 5.0142 14.2234L5.65211 13.4985L5.0142 14.2234L3.33984 12.75V11.2485L4.93383 9.84584L5.59445 10.5966L4.93383 9.84584C5.14956 9.65599 5.2732 9.38251 5.2732 9.09513V6.68181C5.2732 5.58773 5.8688 4.58041 6.82744 4.05316Z"
  }), _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17.1726 19.9468L15.4814 20.877L14.5176 19.1245L16.2087 18.1944C16.5283 18.0187 16.7268 17.6829 16.7268 17.3182L16.7268 14.9049C16.7268 14.0427 17.0977 13.2223 17.7449 12.6527L18.4858 12.0007L17.6645 11.278C17.0882 10.7708 16.7283 10.062 16.6587 9.29748L16.3831 6.26584C16.3502 5.90347 16.123 5.5876 15.79 5.44106L14.5968 4.91605L15.4023 3.08542L16.5955 3.61043C17.5946 4.05005 18.2761 4.99767 18.3749 6.08477L18.6505 9.11641C18.6737 9.37126 18.7937 9.60753 18.9858 9.77659L18.3479 10.5015L18.9858 9.77659L20.6602 11.25L20.6602 12.7515L19.0662 14.1542C18.8504 14.344 18.7268 14.6175 18.7268 14.9049L18.7268 17.3182C18.7268 18.4123 18.1312 19.4196 17.1726 19.9468Z"
  }));
});

exports.IdeFileManifest = IdeFileManifest;
IdeFileManifest.displayName = 'IdeFileManifest';
const IdeFileManifestDimensions = {
  height: 24,
  width: 24
};
exports.IdeFileManifestDimensions = IdeFileManifestDimensions;
//# sourceMappingURL=IdeFileManifest.js.map