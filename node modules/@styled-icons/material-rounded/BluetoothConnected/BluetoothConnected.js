"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BluetoothConnectedDimensions = exports.BluetoothConnected = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BluetoothConnected = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6 13c.55-.55.55-1.44 0-1.99V11c-.55-.55-1.45-.55-2 0s-.55 1.45 0 2 1.45.55 2 0zm14-2a1.41 1.41 0 0 0-2-.01V11c-.55.55-.55 1.44 0 1.99V13c.55.55 1.44.55 1.99 0H20c.55-.55.55-1.45 0-2zm-3-4-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71L17 17c.39-.39.39-1.02 0-1.42L13.41 12 17 8.42c.39-.39.39-1.03 0-1.42zm-2.12 9.29L13 18.17v-3.76l1.88 1.88zM13 9.59V5.83l1.88 1.88L13 9.59z"
  }));
});
exports.BluetoothConnected = BluetoothConnected;
BluetoothConnected.displayName = 'BluetoothConnected';
var BluetoothConnectedDimensions = {
  height: 24,
  width: 24
};
exports.BluetoothConnectedDimensions = BluetoothConnectedDimensions;