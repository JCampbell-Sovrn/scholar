"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BedroomBabyDimensions = exports.BedroomBaby = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BedroomBaby = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 15.99a9.83 9.83 0 0 1-6.4-2.35.762.762 0 0 1-.04-1.11c.27-.27.71-.29 1.01-.04.19.16.39.31.6.46L8 13.49V9.5l-1 .65c-.32.21-.73.16-.99-.12L6 10.01a.8.8 0 0 1-.03-1.08c.3-.33.65-.74.86-.98.09-.11.07-.28-.04-.36 0 0-.81-.31-.79-.57 0-.11 3.36-.03 3.36-.03.18 0 .34.1.43.25l1.44 2.5c.09.15.25.25.43.25h4.83c.28 0 .5.22.5.5s-.22.5-.5.5H16v2.5l.84 1.46c.2-.15.4-.3.6-.46.3-.25.73-.23 1.01.04.31.31.29.82-.04 1.11A9.875 9.875 0 0 1 12 17.99z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14.69 14.24a7.72 7.72 0 0 1-5.4 0l-.81 1.41-.03.06c1.1.52 2.28.79 3.53.79s2.45-.28 3.55-.79l-.03-.06-.81-1.41z"
  }));
});
exports.BedroomBaby = BedroomBaby;
BedroomBaby.displayName = 'BedroomBaby';
var BedroomBabyDimensions = {
  height: 24,
  width: 24
};
exports.BedroomBabyDimensions = BedroomBabyDimensions;