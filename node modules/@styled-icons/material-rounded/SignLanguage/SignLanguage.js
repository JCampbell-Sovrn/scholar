"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SignLanguageDimensions = exports.SignLanguage = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SignLanguage = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m12.49 13-.93-1.86c-.37-.74-.07-1.64.67-2.01a.41.41 0 0 1 .47.07l5.53 5.26c.5.47.78 1.13.78 1.81v5.23a2.5 2.5 0 0 1-2.5 2.5h-11c-.55 0-1-.45-1-1s.45-1 1-1H10v-1H4c-.55 0-1-.45-1-1s.45-1 1-1h6v-1H3c-.55 0-1-.45-1-1s.45-1 1-1h7v-1H4.5c-.55 0-1-.45-1-1s.45-1 1-1h7.99zm-.71-5.88c-.84.4-1.17.62-1.63 1.19l-2.7-2.85A.996.996 0 1 1 8.9 4.09l2.88 3.03zM9.64 9.21a3.46 3.46 0 0 0-.2 1.79h-.86L6.31 8.61a.987.987 0 0 1 .04-1.41.996.996 0 0 1 1.41.04l1.88 1.97zm10.69 4.7.88-.83c.5-.47.79-1.13.79-1.82V3.64c0-.17-.11-.33-.27-.39-.78-.28-1.64.12-1.92.9l-.71 1.96-5.5-5.8a.996.996 0 1 0-1.45 1.37l3.79 3.99-.73.69-4.82-5.08a.996.996 0 1 0-1.45 1.37l3.78 3.98L15.38 9l3.61 3.43.61.58c.29.27.53.57.73.9z"
  }));
});
exports.SignLanguage = SignLanguage;
SignLanguage.displayName = 'SignLanguage';
var SignLanguageDimensions = {
  height: 24,
  width: 24
};
exports.SignLanguageDimensions = SignLanguageDimensions;