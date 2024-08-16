"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FollowTheSignsDimensions = exports.FollowTheSigns = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var FollowTheSigns = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9 3.23 21.81c-.12.62.35 1.19.98 1.19h.09c.47 0 .88-.33.98-.79L6.85 15 9 17v5c0 .55.45 1 1 1s1-.45 1-1v-6.14c0-.27-.11-.52-.29-.71L8.95 13.4l.6-3a6.967 6.967 0 0 0 4.31 2.51c.6.1 1.14-.39 1.14-1 0-.49-.36-.9-.84-.98a5.14 5.14 0 0 1-3.51-2.38l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15l-4.63 1.9c-.37.15-.62.52-.62.92V12c0 .55.45 1 1 1s1-.45 1-1V9.65l1.75-.75M21 2h-7c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h2.75v13.25c0 .41.34.75.75.75s.75-.34.75-.75V9H21c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-.85 3.85-1.28 1.29c-.31.32-.85.09-.85-.35v-.54h-2.76c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.76v-.54c0-.45.54-.67.85-.35l1.28 1.29c.19.19.19.51 0 .7z"
  }));
});
exports.FollowTheSigns = FollowTheSigns;
FollowTheSigns.displayName = 'FollowTheSigns';
var FollowTheSignsDimensions = {
  height: 24,
  width: 24
};
exports.FollowTheSignsDimensions = FollowTheSignsDimensions;