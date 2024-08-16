"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingsBackupRestoreDimensions = exports.SettingsBackupRestore = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SettingsBackupRestore = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M11.77 3c-2.65.07-5 1.28-6.6 3.16L3.85 4.85a.5.5 0 0 0-.85.36V9.5c0 .28.22.5.5.5h4.29c.45 0 .67-.54.35-.85L6.59 7.59C7.88 6.02 9.82 5 12 5c4.32 0 7.74 3.94 6.86 8.41-.54 2.77-2.81 4.98-5.58 5.47-3.8.68-7.18-1.74-8.05-5.16-.12-.42-.52-.72-.96-.72-.65 0-1.14.61-.98 1.23C4.28 18.12 7.8 21 12 21c5.06 0 9.14-4.17 9-9.26-.14-4.88-4.35-8.86-9.23-8.74zM14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z"
  }));
});
exports.SettingsBackupRestore = SettingsBackupRestore;
SettingsBackupRestore.displayName = 'SettingsBackupRestore';
var SettingsBackupRestoreDimensions = {
  height: 24,
  width: 24
};
exports.SettingsBackupRestoreDimensions = SettingsBackupRestoreDimensions;