"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContactlessDimensions = exports.Contactless = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Contactless = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.46 14.45l-1.36-.62c.28-.61.41-1.24.4-1.86a4.42 4.42 0 0 0-.4-1.8l1.36-.63c.35.75.53 1.56.54 2.4.01.86-.17 1.7-.54 2.51zm3.07 1.56-1.3-.74c.52-.92.78-1.98.78-3.15 0-1.19-.27-2.33-.8-3.4l1.34-.67c.64 1.28.96 2.65.96 4.07 0 1.43-.33 2.74-.98 3.89zm3.14 1.32-1.35-.66c.78-1.6 1.18-3.18 1.18-4.69 0-1.51-.4-3.07-1.18-4.64l1.34-.67c.9 1.78 1.34 3.56 1.34 5.31 0 1.74-.44 3.54-1.33 5.35z"
  }));
});
exports.Contactless = Contactless;
Contactless.displayName = 'Contactless';
var ContactlessDimensions = {
  height: 24,
  width: 24
};
exports.ContactlessDimensions = ContactlessDimensions;