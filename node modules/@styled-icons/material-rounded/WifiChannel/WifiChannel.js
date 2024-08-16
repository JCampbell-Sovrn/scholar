"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WifiChannelDimensions = exports.WifiChannel = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var WifiChannel = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4.13 21c.5 0 .92-.38.99-.87.65-4.89 1.95-9.01 2.88-10 .91.98 2.19 5.01 2.86 9.82.08.6.59 1.05 1.19 1.05.54 0 1.02-.36 1.16-.89.62-2.38 1.9-5.11 2.79-5.11.9 0 2.19 2.83 2.81 5.2.12.48.56.8 1.05.8.62 0 1.12-.52 1.09-1.14C20.75 15.89 19.81 3 16 3c-2.51 0-3.77 5.61-4.4 10.57C10.79 10.66 9.61 8 8 8c-2.92 0-4.41 8.71-4.85 11.87-.09.6.38 1.13.98 1.13zM16 13c-.99 0-1.82.62-2.5 1.5.57-4.77 1.54-8.62 2.5-9.44.97.81 1.91 4.67 2.49 9.43C17.81 13.62 16.98 13 16 13z"
  }));
});
exports.WifiChannel = WifiChannel;
WifiChannel.displayName = 'WifiChannel';
var WifiChannelDimensions = {
  height: 24,
  width: 24
};
exports.WifiChannelDimensions = WifiChannelDimensions;