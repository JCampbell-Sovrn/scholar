"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaBluetoothOnDimensions = exports.MediaBluetoothOn = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MediaBluetoothOn = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m9 5 .01 8.55c-.6-.34-1.28-.55-2-.55a4.001 4.001 0 1 0 0 8C9.23 21 11 19.21 11 17V7h2c1.1 0 2-.9 2-2s-.9-2-2-2h-2c-1.1 0-2 .9-2 2zm11.29 6.72-2.47-2.47c-.32-.31-.85-.09-.85.35v3.94l-2.33-2.33a.61.61 0 0 0-.85 0 .61.61 0 0 0 0 .85L16.73 15l-2.93 2.93a.61.61 0 0 0 0 .85c.23.23.61.23.85 0l2.33-2.33v3.94c0 .45.54.67.85.35l2.46-2.46a.996.996 0 0 0 0-1.41L18.42 15l1.87-1.86c.39-.39.39-1.03 0-1.42zm-2.12-.42 1.13 1.13-1.13 1.13V11.3zm1.13 6.27-1.13 1.13v-2.26l1.13 1.13z"
  }));
});
exports.MediaBluetoothOn = MediaBluetoothOn;
MediaBluetoothOn.displayName = 'MediaBluetoothOn';
var MediaBluetoothOnDimensions = {
  height: 24,
  width: 24
};
exports.MediaBluetoothOnDimensions = MediaBluetoothOnDimensions;