"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellWifiDimensions = exports.CellWifi = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CellWifi = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20.29 7.68 7.7 20.29c-.63.63-.18 1.71.71 1.71H21c.55 0 1-.45 1-1V8.39c0-.89-1.08-1.34-1.71-.71zM20 20h-2v-7.22l2-2V20zM9.61 10.68c-.28.17-.32.56-.09.79l.82.82c.39.39 1.02.39 1.41 0l.82-.82c.23-.23.18-.62-.09-.79-.87-.54-1.99-.54-2.87 0zM8.42 9.3a4.553 4.553 0 0 1 5.27 0c.36.26.85.22 1.16-.1.39-.39.35-1.06-.1-1.38a6.402 6.402 0 0 0-7.4 0c-.45.32-.5.99-.1 1.38a.9.9 0 0 0 1.17.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.26 6.69c.34.28.83.28 1.14-.03l.12-.12c.35-.35.31-.92-.08-1.24-3.67-3.05-9.02-3.07-12.7-.06-.43.35-.47.99-.08 1.37.32.33.84.37 1.19.08 3.01-2.48 7.4-2.48 10.41 0z"
  }));
});
exports.CellWifi = CellWifi;
CellWifi.displayName = 'CellWifi';
var CellWifiDimensions = {
  height: 24,
  width: 24
};
exports.CellWifiDimensions = CellWifiDimensions;