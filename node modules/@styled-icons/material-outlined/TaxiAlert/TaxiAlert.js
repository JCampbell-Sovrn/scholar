"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaxiAlertDimensions = exports.TaxiAlert = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var TaxiAlert = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6.5,
    cy: 15.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15.5,
    cy: 15.5,
    r: 1.5
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 13v5H4v-5h14c-1.91 0-3.63-.76-4.89-2h-8.3l1.04-3h5.44C11.1 7.37 11 6.7 11 6s.1-1.37.29-2H8v2H5.5c-.66 0-1.21.42-1.42 1.01L2 13v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-.09-.27c-.61.17-1.25.27-1.91.27z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 1c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm.5 8h-1V8h1v1zm0-2h-1V3h1v4z"
  }));
});
exports.TaxiAlert = TaxiAlert;
TaxiAlert.displayName = 'TaxiAlert';
var TaxiAlertDimensions = {
  height: 24,
  width: 24
};
exports.TaxiAlertDimensions = TaxiAlertDimensions;