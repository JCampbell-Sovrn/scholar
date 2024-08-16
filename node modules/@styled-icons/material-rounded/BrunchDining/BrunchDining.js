"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrunchDiningDimensions = exports.BrunchDining = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BrunchDining = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18 8h2V4h-2v4zm-3 14H3c-.55 0-1-.45-1-1v-1h14v1c0 .55-.45 1-1 1zm3-6.11-.4-.42a5.788 5.788 0 0 1-1.6-4V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v8.51c0 1.46-.54 2.87-1.53 3.94l-.47.52V20h1c.55 0 1 .45 1 1s-.45 1-1 1h-2c-.55 0-1-.45-1-1v-5.11zM7 16v-1c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h4c.55 0 1 .45 1 1v1H2v-1c0-.55.45-1 1-1h4z"
  }));
});
exports.BrunchDining = BrunchDining;
BrunchDining.displayName = 'BrunchDining';
var BrunchDiningDimensions = {
  height: 24,
  width: 24
};
exports.BrunchDiningDimensions = BrunchDiningDimensions;