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
    d: "M7.83 5H18v10.17L19.83 17H22v-2h-2v-2h2v-2h-2V9h2V7h-2V5c0-1.1-.9-2-2-2H5.83l2 2zM12 9.17V7h4v3h-3.17L12 9.17zM9.83 7H11v1.17L9.83 7zm4 4H16v2.17L13.83 11zM18 21c.06 0 .11 0 .16-.01l2.32 2.32 1.41-1.41L2.1 2.1.69 3.51l1.32 1.32C2 4.89 2 4.94 2 5v14c0 1.1.9 2 2 2h14zM4 19V6.83l2 2V12h3.17l1 1H6v4h5v-3.17l1 1V17h2.17l2 2H4z"
  }));
});
exports.DeveloperBoardOff = DeveloperBoardOff;
DeveloperBoardOff.displayName = 'DeveloperBoardOff';
var DeveloperBoardOffDimensions = {
  height: 24,
  width: 24
};
exports.DeveloperBoardOffDimensions = DeveloperBoardOffDimensions;