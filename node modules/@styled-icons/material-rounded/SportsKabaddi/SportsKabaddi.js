"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SportsKabaddiDimensions = exports.SportsKabaddi = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SportsKabaddi = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16.5,
    cy: 2.38,
    r: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M24 10.88v-3.7l-4.99-2.11c-.98-.41-2.12-.07-2.71.81l-1 1.6c-.67 1.18-1.91 2.06-3.41 2.32l.06.06c.69.69 1.52 1.07 2.46 1.17.8-.42 1.52-.98 2.09-1.64l.6 3-1.16 1.1-.94.89v6.5c0 .55.45 1 1 1s1-.45 1-1v-5l2.1-2 1.62 7.19c.11.47.53.81 1.02.81.66 0 1.15-.6 1.02-1.24l-1.94-9.76-.62-3.1 1.8.7v2.4c0 .55.45 1 1 1s1-.45 1-1zM10.29 8.09c.22.15.47.24.72.29.13.02.25.04.38.04s.26-.01.38-.04c.13-.02.25-.06.37-.11.24-.1.47-.24.66-.44.49-.49.67-1.17.55-1.8-.07-.37-.25-.74-.55-1.03-.19-.19-.42-.34-.66-.44-.12-.05-.24-.09-.37-.11s-.25-.04-.38-.04c-.12 0-.23.01-.35.03-.14.02-.28.06-.41.11-.23.11-.46.26-.65.45-.3.29-.48.66-.55 1.03-.12.63.06 1.31.55 1.8.09.1.2.18.31.26z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m11.24 10.56-2-2c-.1-.1-.2-.18-.31-.26a1.93 1.93 0 0 0-.72-.28c-.13-.03-.25-.04-.38-.04-.51 0-1.02.2-1.41.59l-3.34 3.34c-.41.41-.62.98-.58 1.54 0 .18.04.37.11.55l1.07 2.95-2.92 2.92a.996.996 0 1 0 1.41 1.41l3.54-3.54v-2.22L7 16.75v4.13c0 .55.45 1 1 1s1-.45 1-1v-5l-2.12-2.12 2.36-2.36.71.71c1.02 1 2.28 1.69 3.79 1.94.64.11 1.21-.45 1.16-1.1-.03-.48-.4-.87-.87-.94-1.13-.18-2.06-.72-2.79-1.45z"
  }));
});
exports.SportsKabaddi = SportsKabaddi;
SportsKabaddi.displayName = 'SportsKabaddi';
var SportsKabaddiDimensions = {
  height: 24,
  width: 24
};
exports.SportsKabaddiDimensions = SportsKabaddiDimensions;