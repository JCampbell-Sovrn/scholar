"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddToDriveDimensions = exports.AddToDrive = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AddToDrive = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 21v-3h3v-2h-3v-3h-2v3h-3v2h3v3h2zm-4.97.5H5.66c-.72 0-1.38-.38-1.73-1l-2.36-4.1c-.36-.62-.35-1.38.01-2L7.92 3.49c.36-.61 1.02-.99 1.73-.99h4.7c.71 0 1.37.38 1.73.99l4.48 7.71a6.176 6.176 0 0 0-2.4-.14L14.35 4.5h-4.7L3.31 15.41l2.35 4.09h7.89c.35.77.85 1.45 1.48 2zM13.34 15c-.22.63-.34 1.3-.34 2H7.25l-.73-1.27 4.58-7.98h1.8l2.53 4.42c-.56.42-1.05.93-1.44 1.51l-2-3.49L9.25 15h4.09z"
  }));
});
exports.AddToDrive = AddToDrive;
AddToDrive.displayName = 'AddToDrive';
var AddToDriveDimensions = {
  height: 24,
  width: 24
};
exports.AddToDriveDimensions = AddToDriveDimensions;