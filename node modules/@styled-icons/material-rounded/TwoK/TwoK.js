"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwoKDimensions = exports.TwoK = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TwoK = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9.5H8v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1H7.25c-.41 0-.75-.34-.75-.75S6.84 9 7.25 9H10c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zm6.59 2.5c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.55c0 .39-.31.7-.7.7h-.1c-.39 0-.7-.31-.7-.7V9.7c0-.39.31-.7.7-.7h.09c.39 0 .7.31.7.7v1.55l1.54-1.98c.14-.17.35-.27.56-.27.58 0 .91.66.56 1.12L15.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12z"
  }));
});
exports.TwoK = TwoK;
TwoK.displayName = 'TwoK';
var TwoKDimensions = {
  height: 24,
  width: 24
};
exports.TwoKDimensions = TwoKDimensions;