"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotListedLocationDimensions = exports.NotListedLocation = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NotListedLocation = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12.01 16a.99.99 0 0 1-.71-.29.95.95 0 0 1-.29-.71c-.01-.55.43-.99.98-1h.02c.28 0 .51.1.71.29.18.19.28.43.28.7s-.1.51-.29.71-.43.3-.7.3zm-.88-3.66c0-.45.1-.84.29-1.16.19-.33.53-.7 1-1.12.28-.25.48-.47.61-.66s.19-.4.19-.64c0-.29-.11-.53-.32-.74-.21-.2-.5-.3-.85-.3-.37 0-.74.1-.96.3-.21.2-.4.45-.4.98H9c0-1.01.46-1.73.97-2.21C10.53 6.28 11.25 6 12 6c.59 0 1.11.12 1.57.35s.79.55 1.05.96.38.86.38 1.35-.1.9-.31 1.25-.48.71-.89 1.09c-.32.3-.53.56-.65.77s-.18.49-.18.81V13h-1.85v-.66h.01zM18 10.2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"
  }));
});
exports.NotListedLocation = NotListedLocation;
NotListedLocation.displayName = 'NotListedLocation';
var NotListedLocationDimensions = {
  height: 24,
  width: 24
};
exports.NotListedLocationDimensions = NotListedLocationDimensions;