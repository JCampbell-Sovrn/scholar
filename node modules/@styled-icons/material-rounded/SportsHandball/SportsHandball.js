"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SportsHandballDimensions = exports.SportsHandball = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SportsHandball = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M14.27 6c-.55.95-.22 2.18.73 2.73.95.55 2.18.22 2.73-.73.55-.95.22-2.18-.73-2.73-.95-.55-2.18-.22-2.73.73z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m15.84 10.41-2.6-1.5a5.024 5.024 0 0 1-2.18-6.07.991.991 0 0 0-.43-1.21c-.53-.3-1.22-.07-1.43.5-.95 2.51-.35 5.35 1.46 7.27l-4.65 8.05c-.28.48-.11 1.09.37 1.37s1.09.11 1.37-.37l1-1.73 1.73 1-2.5 4.33c-.28.48-.11 1.09.37 1.37s1.09.11 1.37-.37l5.79-10.02a5.03 5.03 0 0 1 .66 4.72.999.999 0 0 0 1.87.7c.97-2.62.41-5.84-2.2-8.04zM12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05a1.501 1.501 0 0 0-1.5 2.6z"
  }));
});
exports.SportsHandball = SportsHandball;
SportsHandball.displayName = 'SportsHandball';
var SportsHandballDimensions = {
  height: 24,
  width: 24
};
exports.SportsHandballDimensions = SportsHandballDimensions;