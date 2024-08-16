"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WindPowerDimensions = exports.WindPower = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var WindPower = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22.21 18.61-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-2.69-.67a2.95 2.95 0 0 0-.37-1.33l3.96-6.59c.65-1.08.3-2.48-.78-3.13a2.288 2.288 0 0 0-2.73.3l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.4c-.47.17-.89.45-1.23.82H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.18.05.37.08.55.08.36 0 .72-.1 1.03-.29l2.24-1.34c.29.26.63.47 1.02.61V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.45.45 1.03.67 1.61.67.58 0 1.17-.22 1.61-.67.72-.72.88-1.83.38-2.72zM7.72 14.84 3.2 13.55a.279.279 0 0 1-.2-.27c0-.15.13-.28.28-.28h6.73c0 .15.01.3.03.44l-2.32 1.4zM13 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm1-3.86V6.78l3.43-3.21c.05-.05.19-.12.34-.04.13.08.18.25.1.38l-3.74 6.24-.13-.01zm6.42 9.78c-.05.05-.24.16-.4 0l-4.85-4.85c.08-.09.16-.18.24-.28l2.78.69 2.28 4.1c.06.11.04.25-.05.34z"
  }));
});
exports.WindPower = WindPower;
WindPower.displayName = 'WindPower';
var WindPowerDimensions = {
  height: 24,
  width: 24
};
exports.WindPowerDimensions = WindPowerDimensions;