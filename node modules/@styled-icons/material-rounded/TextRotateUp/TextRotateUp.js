"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextRotateUpDimensions = exports.TextRotateUp = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TextRotateUp = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.35 4.35c-.2-.2-.51-.2-.71 0l-1.79 1.79c-.31.32-.09.86.36.86H17v12c0 .55.45 1 1 1s1-.45 1-1V7h.79c.45 0 .67-.54.35-.85l-1.79-1.8zM11.8 15.5v-5l1.6-.66c.36-.14.6-.49.6-.88 0-.69-.71-1.15-1.34-.88l-8.97 3.88c-.42.17-.69.58-.69 1.04 0 .46.27.87.69 1.05l8.97 3.88c.63.27 1.34-.2 1.34-.89 0-.39-.24-.74-.6-.89l-1.6-.65zM4.98 13 10 11.13v3.74L4.98 13z"
  }));
});
exports.TextRotateUp = TextRotateUp;
TextRotateUp.displayName = 'TextRotateUp';
var TextRotateUpDimensions = {
  height: 24,
  width: 24
};
exports.TextRotateUpDimensions = TextRotateUpDimensions;