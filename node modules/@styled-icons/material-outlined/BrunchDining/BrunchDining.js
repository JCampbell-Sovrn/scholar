"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrunchDiningDimensions = exports.BrunchDining = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BrunchDining = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M2 21.5c0 .28.22.5.49.5h13.02c.27 0 .49-.22.49-.5V20H2v1.5zM15.5 16H11v-2H7v2H2.5c-.28 0-.5.22-.5.5V18h14v-1.5c0-.28-.22-.5-.5-.5zm4.97-.55A5.796 5.796 0 0 0 22 11.51V2h-6v9.47c0 1.48.58 2.92 1.6 4l.4.42V22h4v-2h-2v-4.03l.47-.52zM18 4h2v4h-2V4zm1.03 10.07a3.893 3.893 0 0 1-1.03-2.6V10h2v1.51c0 .95-.34 1.85-.97 2.56z"
  }));
});
exports.BrunchDining = BrunchDining;
BrunchDining.displayName = 'BrunchDining';
var BrunchDiningDimensions = {
  height: 24,
  width: 24
};
exports.BrunchDiningDimensions = BrunchDiningDimensions;