"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MediaBluetoothOffDimensions = exports.MediaBluetoothOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MediaBluetoothOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M9 6.17V5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2s-.9 2-2 2h-2v1.17l-2-2zM19.42 15l2.18 2.17c.22.22.22.58 0 .8-.22.22-.58.22-.8 0l-5.98-5.98a.567.567 0 0 1 0-.8c.22-.22.58-.22.8 0l2.35 2.35V9.61c0-.45.54-.67.85-.35l2.82 2.82c.2.2.2.51 0 .71L19.42 15zm-.25-1.45 1.13-1.13-1.13-1.13v2.26zm1.32 6.94a.996.996 0 1 1-1.41 1.41l-3.28-3.28-.16.16a.61.61 0 0 1-.85 0 .61.61 0 0 1 0-.85l.16-.16L11 13.83v3.02c0 2.07-1.68 4.01-3.74 4.14C4.94 21.13 3 19.29 3 17c0-2.21 1.79-4 4.01-4 .73 0 1.41.21 2 .55v-1.72L2.1 4.92a.996.996 0 1 1 1.41-1.41l16.98 16.98z"
  }));
});
exports.MediaBluetoothOff = MediaBluetoothOff;
MediaBluetoothOff.displayName = 'MediaBluetoothOff';
var MediaBluetoothOffDimensions = {
  height: 24,
  width: 24
};
exports.MediaBluetoothOffDimensions = MediaBluetoothOffDimensions;