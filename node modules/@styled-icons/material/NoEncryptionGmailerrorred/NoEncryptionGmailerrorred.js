"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoEncryptionGmailerrorredDimensions = exports.NoEncryptionGmailerrorred = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NoEncryptionGmailerrorred = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2h-4.27L20 17.17V10c0-1.1-.9-2-2-2h-1V6c0-2.76-2.24-5-5-5-2.21 0-4.07 1.45-4.73 3.44L8.9 6.07V6zM2.1 2.1.69 3.51 5.3 8.13C4.55 8.42 4 9.15 4 10v10c0 1.1.9 2 2 2h12c.34 0 .65-.09.93-.24l1.56 1.56 1.41-1.41L2.1 2.1zM12 17c-1.1 0-2-.9-2-2 0-.59.27-1.12.68-1.49l2.81 2.81c-.37.41-.9.68-1.49.68z"
  }));
});
exports.NoEncryptionGmailerrorred = NoEncryptionGmailerrorred;
NoEncryptionGmailerrorred.displayName = 'NoEncryptionGmailerrorred';
var NoEncryptionGmailerrorredDimensions = {
  height: 24,
  width: 24
};
exports.NoEncryptionGmailerrorredDimensions = NoEncryptionGmailerrorredDimensions;