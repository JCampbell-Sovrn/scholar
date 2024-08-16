"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RotateLeftDimensions = exports.RotateLeft = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RotateLeft = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.56 7.98C6.1 7.52 5.31 7.6 5 8.17c-.28.51-.5 1.03-.67 1.58-.19.63.31 1.25.96 1.25h.01c.43 0 .82-.28.94-.7.12-.4.28-.79.48-1.17.22-.37.15-.84-.16-1.15zM5.31 13h-.02c-.65 0-1.15.62-.96 1.25.16.54.38 1.07.66 1.58.31.57 1.11.66 1.57.2.3-.31.38-.77.17-1.15-.2-.37-.36-.76-.48-1.16a.97.97 0 0 0-.94-.72zm2.85 6.02c.51.28 1.04.5 1.59.66.62.18 1.24-.32 1.24-.96v-.03c0-.43-.28-.82-.7-.94-.4-.12-.78-.28-1.15-.48a.97.97 0 0 0-1.16.17l-.03.03c-.45.45-.36 1.24.21 1.55zM13 4.07v-.66c0-.89-1.08-1.34-1.71-.71L9.17 4.83c-.4.4-.4 1.04 0 1.43l2.13 2.08c.63.62 1.7.17 1.7-.72V6.09c2.84.48 5 2.94 5 5.91 0 2.73-1.82 5.02-4.32 5.75a.97.97 0 0 0-.68.94v.02c0 .65.61 1.14 1.23.96A7.976 7.976 0 0 0 20 12c0-4.08-3.05-7.44-7-7.93z"
  }));
});
exports.RotateLeft = RotateLeft;
RotateLeft.displayName = 'RotateLeft';
var RotateLeftDimensions = {
  height: 24,
  width: 24
};
exports.RotateLeftDimensions = RotateLeftDimensions;