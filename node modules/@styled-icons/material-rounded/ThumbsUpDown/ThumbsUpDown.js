"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThumbsUpDownDimensions = exports.ThumbsUpDown = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ThumbsUpDown = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M10.06 5H5.82l.66-3.18c.08-.37-.04-.75-.3-1.02A1.11 1.11 0 0 0 4.6.8l-4 4c-.39.37-.6.88-.6 1.41V12c0 1.1.9 2 2 2h5.92c.8 0 1.52-.48 1.84-1.21l2.14-5C12.46 6.47 11.49 5 10.06 5zM22 10h-5.92c-.8 0-1.52.48-1.84 1.21l-2.14 5c-.56 1.32.4 2.79 1.84 2.79h4.24l-.66 3.18c-.08.37.04.75.3 1.02.44.44 1.15.44 1.58 0l4-4c.38-.38.59-.88.59-1.41V12c.01-1.1-.89-2-1.99-2z"
  }));
});
exports.ThumbsUpDown = ThumbsUpDown;
ThumbsUpDown.displayName = 'ThumbsUpDown';
var ThumbsUpDownDimensions = {
  height: 24,
  width: 24
};
exports.ThumbsUpDownDimensions = ThumbsUpDownDimensions;