"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeveloperBoardOffDimensions = exports.DeveloperBoardOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DeveloperBoardOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M7.83 5H18v10.17L19.83 17H21c.55 0 1-.45 1-1s-.45-1-1-1h-1v-2h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V9h1c.55 0 1-.45 1-1s-.45-1-1-1h-1V5c0-1.1-.9-2-2-2H5.83l2 2zM15 10h-2c-.06 0-.13-.01-.19-.02l-.79-.79C12.01 9.13 12 9.06 12 9V8c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1c0 .55-.45 1-1 1zm-4-2v.17L9.83 7H10c.55 0 1 .45 1 1zm5 4v1.17L13.83 11H15c.55 0 1 .45 1 1zM1.39 2.81a.996.996 0 0 0 0 1.41l.61.61V19c0 1.1.9 2 2 2h14c.06 0 .11 0 .16-.01l1.61 1.61a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0zM4 19V6.83l2 2V11c0 .55.45 1 1 1h2.17l1.02 1.02c-.06-.01-.13-.02-.19-.02H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2c0-.06-.01-.13-.02-.19L12 14.83V16c0 .55.45 1 1 1h1.18l2 2H4z"
  }));
});
exports.DeveloperBoardOff = DeveloperBoardOff;
DeveloperBoardOff.displayName = 'DeveloperBoardOff';
var DeveloperBoardOffDimensions = {
  height: 24,
  width: 24
};
exports.DeveloperBoardOffDimensions = DeveloperBoardOffDimensions;