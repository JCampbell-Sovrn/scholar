"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.YoutubeSearchedForDimensions = exports.YoutubeSearchedFor = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var YoutubeSearchedFor = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M17.01 14h-.8l-.27-.27a6.48 6.48 0 0 0 1.51-5.09C17.11 6 15.1 3.78 12.5 3.18 8.26 2.2 4.51 5.53 4.51 9.5h-2.1a.5.5 0 0 0-.31.89l3.4 2.75c.19.2.51.21.71.01l2.9-2.79c.32-.31.1-.86-.35-.86H6.51c0-2.49 2-4.48 4.46-4.5 2.44-.02 4.54 2.05 4.54 4.49 0 2.48-2.02 4.51-4.5 4.51-.45 0-.89-.07-1.3-.19-.34-.1-.71 0-.96.26-.53.53-.32 1.45.39 1.66.59.17 1.22.27 1.87.27 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l4.27 4.25c.41.41 1.07.41 1.48 0 .41-.41.41-1.08 0-1.49L17.01 14z"
  }));
});
exports.YoutubeSearchedFor = YoutubeSearchedFor;
YoutubeSearchedFor.displayName = 'YoutubeSearchedFor';
var YoutubeSearchedForDimensions = {
  height: 24,
  width: 24
};
exports.YoutubeSearchedForDimensions = YoutubeSearchedForDimensions;