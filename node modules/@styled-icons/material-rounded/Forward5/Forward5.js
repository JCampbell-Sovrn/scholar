"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Forward5Dimensions = exports.Forward5 = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Forward5 = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.87 13c-.5 0-.91.37-.98.86a6.006 6.006 0 0 1-7.42 4.96c-2.25-.54-3.91-2.27-4.39-4.53A6.014 6.014 0 0 1 11.95 7v2.79c0 .45.54.67.85.35l3.79-3.79c.2-.2.2-.51 0-.71L12.8 1.85a.5.5 0 0 0-.85.35V5c-4.94 0-8.84 4.48-7.84 9.6.6 3.11 2.9 5.5 5.99 6.19 4.83 1.08 9.15-2.2 9.77-6.67.09-.59-.4-1.12-1-1.12zm-6.44 2.15c-.05.07-.11.13-.18.17s-.17.06-.27.06c-.17 0-.31-.05-.42-.15s-.17-.24-.19-.41h-.84c.01.2.05.37.13.53s.19.28.32.39.29.19.46.24.35.08.53.08c.24 0 .46-.04.64-.12s.33-.18.45-.31.21-.28.27-.45.09-.35.09-.54c0-.22-.03-.43-.09-.6s-.14-.33-.25-.45-.25-.22-.41-.28-.34-.1-.55-.1c-.07 0-.14.01-.2.02s-.13.02-.18.04-.1.03-.15.05-.08.04-.11.05l.11-.92h1.7v-.71H10.9l-.25 2.17.67.17c.03-.03.06-.06.1-.09s.07-.05.12-.07.1-.04.15-.05.13-.02.2-.02c.12 0 .22.02.3.05s.16.09.21.15.1.14.13.24.04.19.04.31-.01.22-.03.31-.06.17-.11.24z"
  }));
});
exports.Forward5 = Forward5;
Forward5.displayName = 'Forward5';
var Forward5Dimensions = {
  height: 24,
  width: 24
};
exports.Forward5Dimensions = Forward5Dimensions;