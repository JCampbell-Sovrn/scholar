"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SleddingDimensions = exports.Sledding = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Sledding = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M14 4.5c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4.92 14.74c-.13.39-.55.61-.95.48l-2.61-.85-.46 1.43 3.32 1.08c1.31.43 2.72-.29 3.15-1.61a2.52 2.52 0 0 0-1.07-2.91c-.32-.2-.45-.6-.3-.95.2-.44.71-.57 1.12-.31a4.01 4.01 0 0 1 1.68 4.62 4.003 4.003 0 0 1-5.04 2.57L1.74 17.6c-.39-.13-.63-.54-.52-.93.12-.41.55-.63.95-.5l3.22 1.05.46-1.43-3.19-1.04c-.39-.13-.63-.54-.52-.93.12-.41.55-.63.95-.5l.91.28v-2.78c0-.8.48-1.52 1.21-1.84.75-.32 4.11-1.76 4.26-1.83.41-.18.89-.21 1.35-.04.91.34 1.37 1.36 1.07 2.28l-1.04 3.2 2.15-.34c.89-.15 1.76.32 2.14 1.14l2.08 4.51 1.22.4c.4.12.61.54.48.94zM6 14.25l1.01.33c-.22-.42-.28-.92-.12-1.4L7.92 10 6 10.82v3.43zm7.94 4.16-6.66-2.16-.46 1.43 6.66 2.16.46-1.43zm.69-1.36-1.18-2.56-3.97.89 5.15 1.67z"
  }));
});
exports.Sledding = Sledding;
Sledding.displayName = 'Sledding';
var SleddingDimensions = {
  height: 24,
  width: 24
};
exports.SleddingDimensions = SleddingDimensions;