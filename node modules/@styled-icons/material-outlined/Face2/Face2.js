"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Face2Dimensions = exports.Face2 = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Face2 = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.97 13.52v-.04C23.21 12.38 24 10.78 24 9c0-3.31-2.69-6-6-6-.26 0-.52.02-.78.06a5.98 5.98 0 0 0-10.44 0C6.52 3.02 6.26 3 6 3 2.69 3 0 5.69 0 9c0 1.78.79 3.38 2.02 4.48v.04A6.008 6.008 0 0 0 0 18c0 3.31 2.69 6 6 6 1.39 0 2.67-.48 3.69-1.28.74.18 1.51.28 2.31.28s1.57-.1 2.31-.28c1.02.8 2.3 1.28 3.69 1.28 3.31 0 6-2.69 6-6 0-1.78-.79-3.38-2.03-4.48zM22 9c0 .55-.12 1.07-.32 1.54A10 10 0 0 0 17.98 5H18c2.21 0 4 1.79 4 4zm-9.97-4c2.73.01 5.13 1.39 6.57 3.48-.71.57-1.6.89-2.53.89A4.059 4.059 0 0 1 12 5.31c0-.1.02-.2.03-.31zM12 2c1.25 0 2.36.59 3.1 1.5-.98-.32-2.02-.5-3.1-.5s-2.12.18-3.1.5C9.64 2.59 10.75 2 12 2zM6 5h.02a10 10 0 0 0-3.7 5.54C2.12 10.07 2 9.55 2 9c0-2.21 1.79-4 4-4zm0 17c-2.21 0-4-1.79-4-4 0-.69.19-1.32.5-1.88.8 2.44 2.52 4.47 4.74 5.68-.39.13-.8.2-1.24.2zm-2-9c0-3.72 2.56-6.85 6-7.74v.05c0 3.34 2.72 6.06 6.06 6.06 1.26 0 2.45-.39 3.45-1.09.31.86.49 1.77.49 2.72 0 4.41-3.59 8-8 8s-8-3.59-8-8zm14 9c-.44 0-.85-.07-1.25-.2 2.23-1.21 3.94-3.24 4.74-5.68.31.56.5 1.2.5 1.88.01 2.21-1.78 4-3.99 4z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 9,
    cy: 14,
    r: 1.25
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15,
    cy: 14,
    r: 1.25
  }));
});
exports.Face2 = Face2;
Face2.displayName = 'Face2';
var Face2Dimensions = {
  height: 24,
  width: 24
};
exports.Face2Dimensions = Face2Dimensions;