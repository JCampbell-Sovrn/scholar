"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PersonOffDimensions = exports.PersonOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PersonOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M8.65 5.82a3.999 3.999 0 1 1 5.53 5.53L8.65 5.82zM20 17.17c-.02-1.1-.63-2.11-1.61-2.62-.54-.28-1.13-.54-1.77-.76L20 17.17zm.49 3.32L3.51 3.51A.996.996 0 1 0 2.1 4.92l8.18 8.18c-1.82.23-3.41.8-4.7 1.46C4.6 15.08 4 16.11 4 17.22V20h13.17l1.9 1.9c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41z"
  }));
});
exports.PersonOff = PersonOff;
PersonOff.displayName = 'PersonOff';
var PersonOffDimensions = {
  height: 24,
  width: 24
};
exports.PersonOffDimensions = PersonOffDimensions;