"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoFlashDimensions = exports.NoFlash = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NoFlash = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M13.93 13.93 2.45 2.45 1.04 3.87l5.3 5.3-.2.23H3.6c-.88 0-1.6.72-1.6 1.6v9.4c0 .88.72 1.6 1.6 1.6h12.8c.75 0 1.38-.52 1.55-1.22l2.18 2.18 1.41-1.41L18 18l-4.07-4.07zM10 20c-2.21 0-4-1.79-4-4 0-1.95 1.4-3.57 3.25-3.92l1.57 1.57c-.26-.09-.53-.15-.82-.15a2.5 2.5 0 0 0 0 5 2.5 2.5 0 0 0 2.5-2.5c0-.29-.06-.56-.15-.82l1.57 1.57A3.993 3.993 0 0 1 10 20zm8-4.83L10.83 8h1.75l1.28 1.4h2.54c.88 0 1.6.72 1.6 1.6v4.17zm2.4-9.57H22L19 11V7h-1V2h4l-1.6 3.6z"
  }));
});
exports.NoFlash = NoFlash;
NoFlash.displayName = 'NoFlash';
var NoFlashDimensions = {
  height: 24,
  width: 24
};
exports.NoFlashDimensions = NoFlashDimensions;