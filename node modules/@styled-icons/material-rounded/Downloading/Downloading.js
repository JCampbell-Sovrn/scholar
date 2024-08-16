"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadingDimensions = exports.Downloading = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Downloading = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M17.33 3.55c-.94-.6-1.99-1.04-3.12-1.3a.998.998 0 0 0-1.21.98c0 .45.3.87.74.97.91.2 1.77.56 2.53 1.05.39.25.89.17 1.22-.16.45-.45.38-1.2-.16-1.54zM20.77 11c.64 0 1.13-.59.98-1.21-.26-1.12-.7-2.17-1.3-3.12-.34-.54-1.1-.61-1.55-.16-.32.32-.4.83-.16 1.22.49.77.85 1.62 1.05 2.53a1 1 0 0 0 .98.74zm-1.87 6.49c.45.45 1.21.38 1.55-.15.6-.94 1.04-1.99 1.3-3.11.14-.62-.35-1.21-.98-1.21-.45 0-.87.3-.97.74-.2.91-.57 1.76-1.05 2.53-.25.37-.17.88.15 1.2zM13 20.77c0 .64.59 1.13 1.21.98 1.12-.26 2.17-.7 3.11-1.3.54-.34.61-1.1.16-1.55-.32-.32-.83-.4-1.21-.15-.76.49-1.61.85-2.53 1.05-.44.1-.74.51-.74.97zM13 12V8c0-.55-.45-1-1-1s-1 .45-1 1v4H9.41c-.89 0-1.34 1.08-.71 1.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H13zm-2 8.77c0 .64-.59 1.13-1.21.99C5.33 20.75 2 16.77 2 12s3.33-8.75 7.79-9.75a.998.998 0 0 1 1.21.98c0 .46-.31.87-.76.97C6.67 5 4 8.19 4 12s2.67 7 6.24 7.8c.45.1.76.51.76.97z"
  }));
});
exports.Downloading = Downloading;
Downloading.displayName = 'Downloading';
var DownloadingDimensions = {
  height: 24,
  width: 24
};
exports.DownloadingDimensions = DownloadingDimensions;