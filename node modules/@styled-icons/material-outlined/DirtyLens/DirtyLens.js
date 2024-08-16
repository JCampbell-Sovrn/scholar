"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirtyLensDimensions = exports.DirtyLens = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DirtyLens = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-7.02c-.22-.84-.52-1.76-.13-2.33.81-1.12 2.67 1.77 3.81-.09.77-1.57-1.58-1.29-1.64-2.12-.05-.84 3.68.17 3.04-1.66-.61-1.73-2.42.48-2.76-.53-.58-1.74 4.7-1.68 2.85-4.01-1.76-2.22-2.47 2.85-4.41 2.33-1.34-.36-1.01-2.88-2.65-2.44-1.88.51 1.03 2.2 0 2.86-.96.63-1.72-.92-2.51-1.19-.2-.07-.69-.05-.91.19-.78.86.28 1.16.25 1.91-.02.75-1.59.49-1.51 1.49.12 1.6 2.18.45 2.4 1.24.55 1.98-1.89 2.15-.5 3.27 1.53.71 1.91-1.94 2.8-1.35.58.38.3 1.45.16 2.43H4V7h4.05l1.83-2h4.24l1.83 2H20v12z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.28 17.15c0 .48.39.86.86.86.48 0 .86-.38.86-.86s-.39-.86-.86-.86c-.48 0-.86.38-.86.86z"
  }));
});
exports.DirtyLens = DirtyLens;
DirtyLens.displayName = 'DirtyLens';
var DirtyLensDimensions = {
  height: 24,
  width: 24
};
exports.DirtyLensDimensions = DirtyLensDimensions;