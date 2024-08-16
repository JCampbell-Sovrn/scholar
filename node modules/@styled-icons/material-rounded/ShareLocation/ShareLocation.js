"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShareLocationDimensions = exports.ShareLocation = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ShareLocation = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M13.02 20.77c0 .64.59 1.13 1.21.99 1.12-.26 2.18-.7 3.12-1.3.53-.34.61-1.1.16-1.55-.32-.32-.83-.4-1.21-.16-.77.49-1.62.85-2.53 1.05-.45.1-.75.51-.75.97zM4.03 12c0-3.79 2.65-6.97 6.2-7.79.44-.1.75-.51.75-.96 0-.64-.6-1.13-1.22-.98A9.985 9.985 0 0 0 2.03 12c0 4.74 3.3 8.71 7.73 9.74.62.15 1.22-.34 1.22-.98 0-.46-.31-.86-.75-.96-3.55-.83-6.2-4.01-6.2-7.8zm16.76-1c.64 0 1.13-.59.99-1.21-.26-1.12-.7-2.17-1.3-3.12-.34-.54-1.1-.61-1.55-.16-.32.32-.4.83-.15 1.21.49.76.85 1.61 1.05 2.53.09.45.5.75.96.75zm-3.44-7.45c-.95-.6-2-1.04-3.12-1.3-.62-.14-1.21.35-1.21.98 0 .45.3.87.74.96.91.2 1.77.57 2.53 1.05.39.24.89.17 1.21-.16a.972.972 0 0 0-.15-1.53zm1.57 13.94c.45.45 1.21.38 1.55-.16.6-.94 1.04-2 1.3-3.12.14-.62-.35-1.21-.98-1.21-.45 0-.87.3-.96.74-.2.91-.57 1.77-1.05 2.53-.26.39-.18.9.14 1.22z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 11.1C16 8.61 14.1 7 12 7s-4 1.61-4 4.1c0 1.51 1.1 3.28 3.31 5.3.39.36.98.36 1.38 0C14.9 14.37 16 12.61 16 11.1zm-4 .9a1.071 1.071 0 0 1 0-2.14A1.071 1.071 0 0 1 12 12z"
  }));
});
exports.ShareLocation = ShareLocation;
ShareLocation.displayName = 'ShareLocation';
var ShareLocationDimensions = {
  height: 24,
  width: 24
};
exports.ShareLocationDimensions = ShareLocationDimensions;