"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HomeWorkDimensions = exports.HomeWork = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HomeWork = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m14.16 10.4-5-3.57c-.7-.5-1.63-.5-2.32 0l-5 3.57c-.53.38-.84.98-.84 1.63V20c0 .55.45 1 1 1h4v-6h4v6h4c.55 0 1-.45 1-1v-7.97c0-.65-.31-1.25-.84-1.63z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21.03 3h-9.06C10.88 3 10 3.88 10 4.97l.09.09c.08.05.16.09.24.14l5 3.57c.76.54 1.3 1.34 1.54 2.23H19v2h-2v2h2v2h-2v4h4.03c1.09 0 1.97-.88 1.97-1.97V4.97C23 3.88 22.12 3 21.03 3zM19 9h-2V7h2v2z"
  }));
});
exports.HomeWork = HomeWork;
HomeWork.displayName = 'HomeWork';
var HomeWorkDimensions = {
  height: 24,
  width: 24
};
exports.HomeWorkDimensions = HomeWorkDimensions;