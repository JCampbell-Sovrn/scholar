"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PestControlDimensions = exports.PestControl = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PestControl = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21 14c0-.55-.45-1-1-1h-2.07c-.05-.39-.12-.77-.22-1.14l1.72-.99c.48-.28.64-.89.37-1.37a1.01 1.01 0 0 0-1.37-.37l-1.51.87c-.28-.48-.62-.91-.99-1.29.04-.23.07-.46.07-.71 0-.8-.24-1.55-.65-2.18l.94-.94a.996.996 0 1 0-1.41-1.41l-1.02 1.02c-1.68-.89-3.1-.33-3.73 0L9.12 3.46a.996.996 0 1 0-1.41 1.41l.94.94C8.24 6.45 8 7.2 8 8c0 .25.03.48.07.72-.37.38-.71.81-.99 1.28l-1.51-.87a.996.996 0 0 0-1.36.37c-.28.48-.11 1.09.37 1.37l1.72.99c-.1.37-.17.75-.22 1.14H4c-.55 0-1 .45-1 1s.45 1 1 1h2.07c.05.39.12.77.22 1.14l-1.72.99c-.48.28-.64.89-.37 1.37.28.48.89.64 1.37.37L7.08 18c1.08 1.81 2.88 3 4.92 3s3.84-1.19 4.92-3l1.51.87c.48.28 1.09.11 1.37-.37s.11-1.09-.37-1.37l-1.72-.99c.1-.37.17-.75.22-1.14H20c.55 0 1-.45 1-1zm-9 3c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1z"
  }));
});
exports.PestControl = PestControl;
PestControl.displayName = 'PestControl';
var PestControlDimensions = {
  height: 24,
  width: 24
};
exports.PestControlDimensions = PestControlDimensions;