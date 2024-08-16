"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsInputAntennaDimensions = exports.SettingsInputAntenna = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SettingsInputAntenna = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 5c-3.48 0-6.37 2.54-6.91 5.87-.1.59.39 1.13 1 1.13.49 0 .9-.36.98-.85C7.48 8.79 9.53 7 12 7s4.52 1.79 4.93 4.15c.08.49.49.85.98.85.61 0 1.09-.54.99-1.13A6.984 6.984 0 0 0 12 5zm1 9.29a2.518 2.518 0 0 0 1.41-2.99c-.22-.81-.87-1.47-1.68-1.7-1.69-.48-3.23.78-3.23 2.4 0 1.02.62 1.9 1.5 2.29v3.3l-2.71 2.7A.996.996 0 1 0 9.7 21.7l2.3-2.3 2.3 2.3a.996.996 0 1 0 1.41-1.41L13 17.59v-3.3zM12 1C6.3 1 1.61 5.34 1.05 10.9c-.05.59.41 1.1 1 1.1.51 0 .94-.38.99-.88C3.48 6.56 7.33 3 12 3s8.52 3.56 8.96 8.12c.05.5.48.88.99.88.59 0 1.06-.51 1-1.1C22.39 5.34 17.7 1 12 1z"
  }));
});
exports.SettingsInputAntenna = SettingsInputAntenna;
SettingsInputAntenna.displayName = 'SettingsInputAntenna';
var SettingsInputAntennaDimensions = {
  height: 24,
  width: 24
};
exports.SettingsInputAntennaDimensions = SettingsInputAntennaDimensions;