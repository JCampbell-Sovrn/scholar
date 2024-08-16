"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Diversity2Dimensions = exports.Diversity2 = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Diversity2 = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m10.1 15.9 1.42-1.42C8.79 12.05 7 10.41 7 8.85 7 7.8 7.8 7 8.85 7c1.11 0 1.54.65 2.68 2h.93c1.12-1.31 1.53-2 2.68-2 .87 0 1.55.54 1.77 1.32.35-.04.68-.06 1-.06.36 0 .7.03 1.03.08C18.7 6.43 17.13 5 15.15 5c-.12 0-.23.03-.35.04.12-.33.2-.67.2-1.04 0-1.66-1.34-3-3-3S9 2.34 9 4c0 .37.08.71.2 1.04-.12-.01-.23-.04-.35-.04C6.69 5 5 6.69 5 8.85c0 2.42 2.04 4.31 5.1 7.05z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.5 16.24c-.32-.18-.66-.29-1-.35.07-.1.15-.18.21-.28 1.08-1.87.46-4.18-1.41-5.26-2.09-1.21-4.76-.39-8.65.9l.52 1.94c3.47-1.14 5.79-1.88 7.14-1.1.91.53 1.2 1.61.68 2.53-.56.96-1.33 1-3.07 1.32l-.47.81c.58 1.62.97 2.33.39 3.32-.53.91-1.61 1.2-2.53.68-.06-.03-.11-.09-.17-.13-.3.67-.64 1.24-1.03 1.73.07.04.13.09.2.14 1.87 1.08 4.18.46 5.26-1.41.06-.1.09-.21.14-.32.22.27.48.51.8.69 1.43.83 3.27.34 4.1-1.1s.32-3.29-1.11-4.11z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12.32 14.01c-.74 3.58-1.27 5.95-2.62 6.73-.91.53-2 .24-2.53-.68-.56-.96-.2-1.66.39-3.32l-.46-.81c-1.7-.31-2.5-.33-3.07-1.32-.53-.91-.24-2 .68-2.53.09-.05.19-.08.29-.11-.35-.56-.64-1.17-.82-1.85-.16.07-.32.14-.48.23-1.87 1.08-2.49 3.39-1.41 5.26.06.1.14.18.21.28-.34.06-.68.17-1 .35-1.43.83-1.93 2.66-1.1 4.1s2.66 1.93 4.1 1.1c.32-.18.58-.42.8-.69.05.11.08.22.14.32 1.08 1.87 3.39 2.49 5.26 1.41 2.09-1.21 2.71-3.93 3.55-7.94l-1.93-.53z"
  }));
});
exports.Diversity2 = Diversity2;
Diversity2.displayName = 'Diversity2';
var Diversity2Dimensions = {
  height: 24,
  width: 24
};
exports.Diversity2Dimensions = Diversity2Dimensions;