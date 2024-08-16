"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RemoveDoneDimensions = exports.RemoveDone = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RemoveDone = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4.14 2.69a.996.996 0 0 0 0 1.41l9.67 9.67-1.41 1.41-3.54-3.53a.996.996 0 1 0-1.41 1.41l4.24 4.24c.39.39 1.02.39 1.41 0l2.12-2.12 5.89 5.89a.996.996 0 1 0 1.41-1.41L5.55 2.69a.996.996 0 0 0-1.41 0zm13.91 9.67 4.24-4.24a.999.999 0 0 0-.01-1.42c-.39-.38-1.02-.38-1.41.01l-4.24 4.24 1.42 1.41zM16.64 6.7a.996.996 0 0 0-1.41 0l-1.42 1.42 1.41 1.41 1.42-1.42a.996.996 0 0 0 0-1.41zM1.79 13.06l4.95 4.95 1.41-1.41-4.95-4.95a.996.996 0 1 0-1.41 1.41z"
  }));
});
exports.RemoveDone = RemoveDone;
RemoveDone.displayName = 'RemoveDone';
var RemoveDoneDimensions = {
  height: 24,
  width: 24
};
exports.RemoveDoneDimensions = RemoveDoneDimensions;