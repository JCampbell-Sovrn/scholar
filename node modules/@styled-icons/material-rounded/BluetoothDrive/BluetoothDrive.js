"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BluetoothDriveDimensions = exports.BluetoothDrive = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BluetoothDrive = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m19.85 6 1.8-1.8c.2-.2.2-.51 0-.71L19.5 1.36c-.32-.31-.85-.09-.85.35v3.08L16.7 2.85a.501.501 0 0 0-.7 0c-.19.19-.19.51 0 .7L18.44 6 16 8.44c-.19.19-.19.5 0 .7.19.2.51.2.7 0l1.95-1.95v3.09c0 .45.54.67.85.35l2.14-2.15c.2-.2.19-.51 0-.71L19.85 6zm-.2-3.09.94.94-.94.94V2.91zm0 6.17V7.2l.94.94-.94.94z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 10H4.81l1.04-3H15V5H5.5c-.66 0-1.21.42-1.42 1.01L2 12v7.5c0 .83.67 1.5 1.5 1.5S5 20.33 5 19.5V19h12v.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V12h-3c-1.1 0-2-.9-2-2zm-8.5 6c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  }));
});
exports.BluetoothDrive = BluetoothDrive;
BluetoothDrive.displayName = 'BluetoothDrive';
var BluetoothDriveDimensions = {
  height: 24,
  width: 24
};
exports.BluetoothDriveDimensions = BluetoothDriveDimensions;