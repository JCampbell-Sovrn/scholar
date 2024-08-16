"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RsvpDimensions = exports.Rsvp = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Rsvp = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16.54 9c.48 0 .83.46.69.92l-1.27 4.36c-.12.43-.52.72-.96.72-.44 0-.84-.29-.96-.72l-1.27-4.36c-.14-.46.21-.92.69-.92.32 0 .6.21.69.52l.85 2.91.85-2.91c.09-.31.37-.52.69-.52zM5.1 12.9l.49 1.14c.19.45-.14.96-.63.96-.28 0-.53-.17-.63-.42L3.65 13H2.5v1.31c0 .38-.31.69-.69.69h-.12c-.38 0-.69-.31-.69-.69V10c0-.55.45-1 1-1h2.5c.83 0 1.5.67 1.5 1.5v1c0 .6-.4 1.15-.9 1.4zm-.6-2.4h-2v1h2v-1zm17 2.5h-2v1.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10c0-.55.45-1 1-1h2.5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zm0-2.5h-2v1h2v-1zm-10-.75c0 .41-.34.75-.75.75H8.5v.75h2c.55 0 1 .45 1 1V14c0 .55-.45 1-1 1H7.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H10v-.75H7.75c-.41 0-.75-.34-.75-.75v-2c0-.55.45-1 1-1h2.75c.41 0 .75.34.75.75z"
  }));
});
exports.Rsvp = Rsvp;
Rsvp.displayName = 'Rsvp';
var RsvpDimensions = {
  height: 24,
  width: 24
};
exports.RsvpDimensions = RsvpDimensions;