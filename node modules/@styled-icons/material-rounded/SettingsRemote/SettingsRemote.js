"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsRemoteDimensions = exports.SettingsRemote = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SettingsRemote = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 5.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5zM7.82 6.82c.35.35.9.38 1.3.1C9.93 6.34 10.93 6 12 6c1.07 0 2.07.34 2.88.91.4.28.95.26 1.3-.09.43-.43.39-1.15-.09-1.5A6.959 6.959 0 0 0 12 4c-1.53 0-2.94.49-4.09 1.32-.49.35-.52 1.07-.09 1.5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 0C9.36 0 6.94.93 5.05 2.47c-.46.38-.5 1.07-.08 1.49.36.36.93.39 1.32.07A9.034 9.034 0 0 1 12 2c2.17 0 4.16.77 5.7 2.04.39.32.96.29 1.32-.07.42-.42.38-1.11-.08-1.49C17.06.93 14.64 0 12 0z"
  }));
});
exports.SettingsRemote = SettingsRemote;
SettingsRemote.displayName = 'SettingsRemote';
var SettingsRemoteDimensions = {
  height: 24,
  width: 24
};
exports.SettingsRemoteDimensions = SettingsRemoteDimensions;