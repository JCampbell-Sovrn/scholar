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
    d: "M12.95 19H20V7H4v12h7.24c.14-.98.42-2.05-.16-2.43-.89-.59-1.27 2.06-2.8 1.35-1.39-1.12 1.05-1.29.5-3.27-.22-.79-2.28.36-2.4-1.24-.08-1 1.49-.74 1.51-1.49.03-.75-1.03-1.05-.25-1.91.22-.24.71-.26.91-.19.79.27 1.55 1.82 2.51 1.19 1.03-.66-1.88-2.35 0-2.86 1.64-.44 1.31 2.08 2.65 2.44 1.94.52 2.65-4.55 4.41-2.33 1.85 2.33-3.43 2.27-2.85 4.01.34 1.01 2.15-1.2 2.76.53.64 1.83-3.09.82-3.04 1.66.06.83 2.41.55 1.64 2.12-1.14 1.86-3-1.03-3.81.09-.39.57-.09 1.49.13 2.33zM20 5c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h3.17L9 3h6l1.83 2H20zm-1.86 13.01c-.47 0-.86-.38-.86-.86s.38-.86.86-.86c.47 0 .86.38.86.86s-.38.86-.86.86z"
  }));
});
exports.DirtyLens = DirtyLens;
DirtyLens.displayName = 'DirtyLens';
var DirtyLensDimensions = {
  height: 24,
  width: 24
};
exports.DirtyLensDimensions = DirtyLensDimensions;