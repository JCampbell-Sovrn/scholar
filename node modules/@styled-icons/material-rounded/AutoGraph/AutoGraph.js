"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoGraphDimensions = exports.AutoGraph = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AutoGraph = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M14.06 9.94 13 9.45a.5.5 0 0 1 0-.91l1.06-.49.49-1.05a.5.5 0 0 1 .91 0l.49 1.06 1.05.49a.5.5 0 0 1 0 .91l-1.06.49-.49 1.05a.5.5 0 0 1-.91 0l-.48-1.06zM4.45 13l.49-1.06L6 11.45a.5.5 0 0 0 0-.91l-1.06-.49L4.45 9a.492.492 0 0 0-.9 0l-.49 1.06-1.06.49a.5.5 0 0 0 0 .91l1.06.49.49 1.05c.17.39.73.39.9 0zm4.51-5.01.63-1.4 1.4-.63a.5.5 0 0 0 0-.91l-1.4-.63-.63-1.4a.5.5 0 0 0-.91 0l-.63 1.4-1.4.63a.5.5 0 0 0 0 .91l1.4.63.63 1.4c.17.39.73.39.91 0zm13.38.28a1 1 0 0 0-1.45.04l-6.39 7.18-3.29-3.29a.996.996 0 0 0-1.41 0l-6.04 6.05c-.41.41-.41 1.09 0 1.5.41.41 1.09.41 1.5 0l5.25-5.26 3.25 3.25c.41.41 1.07.39 1.45-.04l7.17-8.07c.35-.39.33-.99-.04-1.36z"
  }));
});
exports.AutoGraph = AutoGraph;
AutoGraph.displayName = 'AutoGraph';
var AutoGraphDimensions = {
  height: 24,
  width: 24
};
exports.AutoGraphDimensions = AutoGraphDimensions;