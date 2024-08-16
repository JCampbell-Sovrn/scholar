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
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.75 13.68c-.13.43-.62.63-1.02.45a.749.749 0 0 1-.4-.9c.12-.41.18-.83.17-1.24-.01-.41-.06-.8-.17-1.18-.1-.36.06-.75.4-.9.42-.19.91.04 1.04.49.15.51.22 1.03.23 1.57a6 6 0 0 1-.25 1.71zm3.14 1.59c-.17.41-.67.57-1.06.35a.755.755 0 0 1-.32-.94c.33-.77.49-1.63.49-2.56 0-.96-.18-1.89-.53-2.78-.14-.36.02-.76.36-.94.39-.2.87-.02 1.03.39.42 1.06.63 2.18.63 3.33.02 1.13-.19 2.19-.6 3.15zM15 16.6a.748.748 0 0 1-1.39-.56c.59-1.39.89-2.75.89-4.06 0-1.31-.3-2.65-.88-4.01-.16-.36.01-.78.36-.95.39-.2.85-.02 1.02.38.66 1.54 1 3.08 1 4.58s-.34 3.06-1 4.62z"
  }));
});
exports.Contactless = Contactless;
Contactless.displayName = 'Contactless';
var ContactlessDimensions = {
  height: 24,
  width: 24
};
exports.ContactlessDimensions = ContactlessDimensions;