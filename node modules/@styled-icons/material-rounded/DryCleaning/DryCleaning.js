"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DryCleaningDimensions = exports.DryCleaning = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DryCleaning = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19.56 11.36 13 8.44V7c0-.55-.45-1-1-1s-1-.45-1-1 .45-1 1-1c.38 0 .72.22.88.53.16.31.51.47.85.47.74 0 1.26-.79.91-1.44-.6-1.1-1.86-1.78-3.24-1.51-1.17.23-2.12 1.2-2.34 2.37-.29 1.56.61 2.93 1.94 3.4v.63l-6.56 2.92c-.88.38-1.44 1.25-1.44 2.2v.01C3 14.92 4.08 16 5.42 16H7v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4h1.58c1.34 0 2.42-1.08 2.42-2.42v-.01c0-.95-.56-1.82-1.44-2.21zM18.58 14h-1.86c-.35-.6-.98-1-1.72-1H9c-.74 0-1.38.4-1.72 1H5.42c-.46 0-.58-.65-.17-.81l6.75-3 6.75 3c.42.19.28.81-.17.81z"
  }));
});
exports.DryCleaning = DryCleaning;
DryCleaning.displayName = 'DryCleaning';
var DryCleaningDimensions = {
  height: 24,
  width: 24
};
exports.DryCleaningDimensions = DryCleaningDimensions;