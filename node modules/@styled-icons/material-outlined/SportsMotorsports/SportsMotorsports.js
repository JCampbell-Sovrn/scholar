"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SportsMotorsportsDimensions = exports.SportsMotorsports = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SportsMotorsports = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.96 11.22C21.57 7.01 17.76 4 13.56 4c-.19 0-.38.01-.57.02C2 4.74 2 17.2 2 17.2v.8c0 1.1.9 2 2 2h10c4.67 0 8.41-4.01 7.96-8.78zm-16.7.34c.57-1.29 1.28-2.35 2.14-3.19l3.62 1.53c.6.25.98.83.98 1.48 0 .89-.72 1.61-1.61 1.61H4.72c.15-.46.32-.94.54-1.43zm13.18 4.48A6.022 6.022 0 0 1 14 18H4v-.8c0-.02.01-.92.24-2.2h6.15c1.99 0 3.61-1.62 3.61-3.61 0-1.45-.87-2.76-2.2-3.32L9.3 7.01c1.1-.57 2.37-.9 3.82-.99.15-.02.3-.02.44-.02 3.31 0 6.13 2.37 6.41 5.41.16 1.72-.38 3.36-1.53 4.63z"
  }));
});
exports.SportsMotorsports = SportsMotorsports;
SportsMotorsports.displayName = 'SportsMotorsports';
var SportsMotorsportsDimensions = {
  height: 24,
  width: 24
};
exports.SportsMotorsportsDimensions = SportsMotorsportsDimensions;