"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CableDimensions = exports.Cable = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Cable = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 5V4c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v6.91c0 1.04-.76 1.98-1.79 2.08-1.2.12-2.21-.82-2.21-1.99V7.14c0-2.13-1.61-3.99-3.74-4.13A3.993 3.993 0 0 0 5 7v7H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1v1c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1H7V7.09c0-1.04.76-1.98 1.79-2.08C9.99 4.89 11 5.83 11 7v9.86c0 2.13 1.61 3.99 3.74 4.13C17.07 21.14 19 19.3 19 17v-7h1c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
  }));
});
exports.Cable = Cable;
Cable.displayName = 'Cable';
var CableDimensions = {
  height: 24,
  width: 24
};
exports.CableDimensions = CableDimensions;