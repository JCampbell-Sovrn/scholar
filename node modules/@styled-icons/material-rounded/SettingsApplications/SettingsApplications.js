"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsApplicationsDimensions = exports.SettingsApplications = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SettingsApplications = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-3.25 9c0 .22-.03.42-.06.63l.84.73c.18.16.22.42.1.63l-.59 1.02c-.12.21-.37.3-.59.22l-1.06-.36c-.32.27-.68.48-1.08.63l-.22 1.09c-.05.23-.25.4-.49.4h-1.18c-.24 0-.44-.17-.49-.4l-.22-1.09c-.4-.15-.76-.36-1.08-.63l-1.06.36a.496.496 0 0 1-.59-.22l-.59-1.02a.503.503 0 0 1 .1-.63l.84-.73c-.05-.21-.08-.41-.08-.63s.03-.42.06-.63l-.84-.73a.503.503 0 0 1-.1-.63l.59-1.02c.12-.21.37-.3.59-.22l1.06.36c.32-.27.68-.48 1.08-.63l.22-1.09c.06-.24.26-.41.5-.41h1.18c.24 0 .44.17.49.4l.22 1.09c.4.15.76.36 1.08.63l1.06-.36c.23-.08.47.02.59.22l.59 1.02c.12.21.08.47-.1.63l-.84.73c.04.22.07.42.07.64z"
  }));
});
exports.SettingsApplications = SettingsApplications;
SettingsApplications.displayName = 'SettingsApplications';
var SettingsApplicationsDimensions = {
  height: 24,
  width: 24
};
exports.SettingsApplicationsDimensions = SettingsApplicationsDimensions;