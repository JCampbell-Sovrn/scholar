"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowingDimensions = exports.Rowing = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Rowing = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4.75 18.25c-.41.41-.41 1.09 0 1.5.41.41 1.09.41 1.5 0L9 17h2l-2.5-2.5-3.75 3.75zM15 5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.29 15.3-2-2.01c-.18-.18-.44-.29-.71-.29H16.5l-6.29-6.29a9.79 9.79 0 0 0 2.29-1.39v2.27l3.58 3.58c.57-.55.92-1.32.92-2.16V8.26A2.27 2.27 0 0 0 14.74 6h-.02c-.34 0-.67.09-.96.23-.26.12-.5.29-.69.5l-1.4 1.55C10.61 9.45 8.66 10.35 7 10.32c-.6 0-1.08.48-1.08 1.08 0 .6.48 1.08 1.08 1.08.31 0 .61-.03.9-.07l7.11 7.09v1.08c0 .26.1.52.29.7l1.99 2.01c.39.39 1.02.39 1.42 0l1.58-1.58a.996.996 0 0 0 0-1.41z"
  }));
});
exports.Rowing = Rowing;
Rowing.displayName = 'Rowing';
var RowingDimensions = {
  height: 24,
  width: 24
};
exports.RowingDimensions = RowingDimensions;