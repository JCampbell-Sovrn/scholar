"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClosedCaptionDisabledDimensions = exports.ClosedCaptionDisabled = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ClosedCaptionDisabled = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.83 4H19c1.1 0 2 .9 2 2v12c0 .05-.01.1-.02.16l-3.38-3.38c.24-.19.4-.46.4-.78v-.5c0-.28-.22-.5-.5-.5H17c-.28 0-.5.22-.5.5h-.17l-1.83-1.83V10.5h2c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V10c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v.17L6.83 4zm13.66 17.9a.996.996 0 0 1-1.41 0l-1.9-1.9H5a2 2 0 0 1-2-2V6c0-.05.02-.1.02-.15l-.92-.92a.996.996 0 1 1 1.41-1.41l16.97 16.97c.4.39.4 1.02.01 1.41zM11 13.83l-.83-.83H10c-.28 0-.5.22-.5.5h-2v-3h.17L6.4 9.22c-.24.19-.4.46-.4.78v4c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-.17z"
  }));
});
exports.ClosedCaptionDisabled = ClosedCaptionDisabled;
ClosedCaptionDisabled.displayName = 'ClosedCaptionDisabled';
var ClosedCaptionDisabledDimensions = {
  height: 24,
  width: 24
};
exports.ClosedCaptionDisabledDimensions = ClosedCaptionDisabledDimensions;