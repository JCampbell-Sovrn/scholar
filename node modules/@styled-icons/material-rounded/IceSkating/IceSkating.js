"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IceSkatingDimensions = exports.IceSkating = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var IceSkating = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.87 17c-.47 0-.85.34-.98.8A2.997 2.997 0 0 1 18 20h-2v-2h1c1.1 0 2-.9 2-2v-.88c0-2.1-1.55-3.53-3.03-3.88l-2.7-.67c-.87-.22-1.57-.81-1.95-1.57H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2.52L11 7H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5H11V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h1v2H3c-.55 0-1 .45-1 1s.45 1 1 1h15c2.33 0 4.29-1.6 4.84-3.75.17-.63-.32-1.25-.97-1.25zM14 20H8v-2h6v2z"
  }));
});
exports.IceSkating = IceSkating;
IceSkating.displayName = 'IceSkating';
var IceSkatingDimensions = {
  height: 24,
  width: 24
};
exports.IceSkatingDimensions = IceSkatingDimensions;