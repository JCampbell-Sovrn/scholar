"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MicExternalOffDimensions = exports.MicExternalOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var MicExternalOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M14 6a2.01 2.01 0 0 1 2.42-1.96c.94.2 1.58 1.09 1.58 2.05v9.08l2 2V6.16c0-2.08-1.68-4.03-3.76-4.15A3.993 3.993 0 0 0 12 6v3.17l2 2V6zm-4-1c0-1.66-1.34-3-3-3-.62 0-1.19.19-1.67.5l4.15 4.15C9.8 6.18 10 5.61 10 5zM1.39 2.81a.996.996 0 0 0 0 1.41L5.17 8H5.1c-.59 0-1.05.51-1 1.1l.85 8.45c.03.26.25.45.5.45H6c0 2.34 2.01 4.21 4.39 3.98 2.08-.2 3.61-2.06 3.61-4.15v-1l5.78 5.78a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0zM12 17.91c0 .96-.64 1.86-1.58 2.05A2.01 2.01 0 0 1 8 18h.55a.5.5 0 0 0 .5-.45l.52-5.16L12 14.83v3.08z"
  }));
});
exports.MicExternalOff = MicExternalOff;
MicExternalOff.displayName = 'MicExternalOff';
var MicExternalOffDimensions = {
  height: 24,
  width: 24
};
exports.MicExternalOffDimensions = MicExternalOffDimensions;