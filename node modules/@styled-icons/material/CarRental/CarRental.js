"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarRentalDimensions = exports.CarRental = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CarRental = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16.39 9H7.61c-.43 0-.81.28-.95.68l-1.66 5v6.81c0 .29.23.51.5.51h1c.28 0 .5-.22.5-.5V20h10v1.5c0 .28.22.5.5.5h1c.28 0 .5-.22.5-.5v-6.81l-1.66-5a1.01 1.01 0 0 0-.95-.69zm-8.61 9c-.68 0-1.22-.54-1.22-1.22s.54-1.22 1.22-1.22S9 16.11 9 16.78 8.46 18 7.78 18zm8.44 0c-.67 0-1.22-.54-1.22-1.22s.54-1.22 1.22-1.22 1.22.54 1.22 1.22S16.9 18 16.22 18zm-9.93-4 1.33-4h8.78l1.33 4H6.29zm4.54-11A3.01 3.01 0 0 0 8 1C6.34 1 5 2.34 5 4c0 1.65 1.34 3 3 3 1.3 0 2.41-.84 2.83-2H16v2h2V5h1V3h-8.17zM8 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
  }));
});
exports.CarRental = CarRental;
CarRental.displayName = 'CarRental';
var CarRentalDimensions = {
  height: 24,
  width: 24
};
exports.CarRentalDimensions = CarRentalDimensions;