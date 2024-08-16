"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MicrowaveDimensions = exports.Microwave = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Microwave = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.15 9.97c-.46-.46-.38-1.24.18-1.57.4-.22.88-.4 1.42-.4.8 0 1.39.39 1.81.67.31.21.51.33.69.33.13 0 .26-.05.39-.12a1 1 0 0 1 1.2.16c.46.46.38 1.24-.18 1.56-.39.23-.87.4-1.41.4-.79 0-1.37-.38-1.79-.66-.33-.22-.52-.34-.71-.34a.84.84 0 0 0-.39.12c-.4.23-.89.16-1.21-.15zM7.75 15c.19 0 .38.12.71.34.42.28 1 .66 1.79.66.54 0 1.02-.17 1.41-.4.56-.32.64-1.1.18-1.56a1 1 0 0 0-1.2-.16.84.84 0 0 1-.39.12c-.18 0-.38-.12-.69-.33-.42-.28-1.01-.67-1.81-.67-.54 0-1.02.18-1.42.4-.56.33-.64 1.11-.18 1.56a1 1 0 0 0 1.2.16c.14-.07.27-.12.4-.12zM22 6v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2zm-8 0H4v12h10V6zm5 10c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0-4c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zm0-5h-2v2h2V7z"
  }));
});
exports.Microwave = Microwave;
Microwave.displayName = 'Microwave';
var MicrowaveDimensions = {
  height: 24,
  width: 24
};
exports.MicrowaveDimensions = MicrowaveDimensions;