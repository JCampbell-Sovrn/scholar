"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NearbyOffDimensions = exports.NearbyOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NearbyOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.41 13.42 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l2.58-2.58c.78-.78 2.05-.78 2.83 0l8 8c.79.78.79 2.04 0 2.83zm-.22 7.77-1.41 1.41L16 18.83l-2.58 2.58c-.78.78-2.05.78-2.83 0l-8-8c-.78-.78-.78-2.05 0-2.83L5.17 8 1.39 4.22 2.8 2.81l18.39 18.38zm-7-4.17-1.39-1.39-.8.8L7.58 12l.8-.8-1.4-1.39L4.8 12l7.2 7.2 2.19-2.18zM16.42 12 12 7.58l-.8.8 4.42 4.42.8-.8z"
  }));
});
exports.NearbyOff = NearbyOff;
NearbyOff.displayName = 'NearbyOff';
var NearbyOffDimensions = {
  height: 24,
  width: 24
};
exports.NearbyOffDimensions = NearbyOffDimensions;