"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScoreDimensions = exports.Score = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Score = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2.75c0-.41.34-.75.75-.75s.75.34.75.75V8l1.79-2.69a.71.71 0 0 1 1.18.79L15.2 8l1.27 1.9c.31.47-.02 1.1-.59 1.1-.24 0-.46-.12-.59-.31L13.5 8v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-4.5zm-5 2.5c0-.55.45-1 1-1h1.5V6.5H7.75c-.41 0-.75-.34-.75-.75S7.34 5 7.75 5H10c.55 0 1 .45 1 1v1.75c0 .55-.45 1-1 1H8.5v.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H8c-.55 0-1-.45-1-1V8.25zm11.74 5.01-5.03 5.03a.996.996 0 0 1-1.41 0L9 15l-2.49 2.49c-.56.56-1.51.16-1.51-.62 0-.23.09-.46.26-.62l3.03-3.03a.996.996 0 0 1 1.41 0L13 16.5l4.49-4.49c.56-.56 1.51-.16 1.51.62 0 .24-.09.46-.26.63z"
  }));
});
exports.Score = Score;
Score.displayName = 'Score';
var ScoreDimensions = {
  height: 24,
  width: 24
};
exports.ScoreDimensions = ScoreDimensions;