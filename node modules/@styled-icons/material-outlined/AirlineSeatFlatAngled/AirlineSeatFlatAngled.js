"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AirlineSeatFlatAngledDimensions = exports.AirlineSeatFlatAngled = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AirlineSeatFlatAngled = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6 6.5c.31 0 .7.15.9.56.24.5.02 1.1-.47 1.34a.979.979 0 0 1-1.32-.46.986.986 0 0 1 .46-1.34c.14-.06.28-.1.43-.1m6.47 2.11 6.69 2.41c.52.19.93.56 1.15 1.05.22.48.25 1.03.06 1.53l-.01.02-8.59-3.11.7-1.9M10 15.19l4 1.44V17h-4v-1.81M6 4.5c-.44 0-.88.1-1.3.3a2.99 2.99 0 0 0-1.4 4 2.988 2.988 0 0 0 4 1.4 3.01 3.01 0 0 0 1.41-4A3.013 3.013 0 0 0 6 4.5zm5.28 1.55L9.2 11.71l12.36 4.47.69-1.89a4 4 0 0 0-2.41-5.15l-8.56-3.09zm-9.09 4.2-.69 1.89L8 14.48V19h8v-1.63L20.52 19l.69-1.89-19.02-6.86z"
  }));
});
exports.AirlineSeatFlatAngled = AirlineSeatFlatAngled;
AirlineSeatFlatAngled.displayName = 'AirlineSeatFlatAngled';
var AirlineSeatFlatAngledDimensions = {
  height: 24,
  width: 24
};
exports.AirlineSeatFlatAngledDimensions = AirlineSeatFlatAngledDimensions;