"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublishedWithChangesDimensions = exports.PublishedWithChanges = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PublishedWithChanges = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m16.95 10.23-5.66 5.66a.996.996 0 0 1-1.41 0l-2.83-2.83a.996.996 0 1 1 1.41-1.41l2.12 2.12 4.95-4.95a.996.996 0 0 1 1.41 0c.4.39.4 1.02.01 1.41zM4 12c0-2.33 1.02-4.42 2.62-5.88l1.53 1.53A.5.5 0 0 0 9 7.29V3c0-.28-.22-.5-.5-.5H4.21c-.45 0-.67.54-.35.85L5.2 4.7C3.24 6.52 2 9.11 2 12c0 4.75 3.32 8.73 7.76 9.75.63.14 1.24-.33 1.24-.98 0-.47-.33-.87-.79-.98C6.66 18.98 4 15.8 4 12zm18 0c0-4.75-3.32-8.73-7.76-9.75-.63-.14-1.24.33-1.24.98 0 .47.33.87.79.98C17.34 5.02 20 8.2 20 12c0 2.33-1.02 4.42-2.62 5.88l-1.53-1.53a.5.5 0 0 0-.85.36V21c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L18.8 19.3c1.96-1.82 3.2-4.41 3.2-7.3z"
  }));
});
exports.PublishedWithChanges = PublishedWithChanges;
PublishedWithChanges.displayName = 'PublishedWithChanges';
var PublishedWithChangesDimensions = {
  height: 24,
  width: 24
};
exports.PublishedWithChangesDimensions = PublishedWithChangesDimensions;