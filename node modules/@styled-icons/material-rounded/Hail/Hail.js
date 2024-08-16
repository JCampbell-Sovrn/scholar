"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HailDimensions = exports.Hail = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Hail = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.95-4a1 1 0 0 1 1 1.09c-.02.15-.21 4.06-3.95 5.31V21c0 .55-.45 1-1 1s-1-.45-1-1v-5h-2v5c0 .55-.45 1-1 1s-1-.45-1-1V10.1c-.3.1-.5.2-.6.3-.46.36-1.17.87-1.36 2.67-.05.52-.47.93-1 .93a.995.995 0 0 1-1-1.07c.13-1.6.62-2.98 2.07-4.22C8.21 7.81 10 7 12 7s2.68-.46 3.48-1.06c.43-.34 1.28-.99 1.48-3.02a1 1 0 0 1 .99-.92zM5 16h1c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1z"
  }));
});
exports.Hail = Hail;
Hail.displayName = 'Hail';
var HailDimensions = {
  height: 24,
  width: 24
};
exports.HailDimensions = HailDimensions;