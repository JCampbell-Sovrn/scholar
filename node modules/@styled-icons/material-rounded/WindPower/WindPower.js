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
    d: "M9 3H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1zM5 7H2c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1zM4 21h3c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm9.73-10.39c.75.23 1.3.78 1.57 1.46l4.27-7.11a2.28 2.28 0 0 0-3.51-2.84l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15.98-.33 1.73-.1zm-3.12 1.66c.16-.52.48-.96.89-1.27H3.28a2.279 2.279 0 0 0-.63 4.47l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61a2.487 2.487 0 0 1-.82-2.67zm11.6 6.34-2.28-4.1a2.05 2.05 0 0 0-1.26-.97l-3.18-.8c.03.32 0 .66-.1.99A2.478 2.478 0 0 1 13 15.5c-.61 0-.99-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0 .72-.72.88-1.83.38-2.72z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.56 14.43c.79.24 1.63-.2 1.87-1 .24-.79-.2-1.63-1-1.87-.79-.24-1.63.2-1.87 1-.24.79.21 1.63 1 1.87z"
  }));
});
exports.WindPower = WindPower;
WindPower.displayName = 'WindPower';
var WindPowerDimensions = {
  height: 24,
  width: 24
};
exports.WindPowerDimensions = WindPowerDimensions;