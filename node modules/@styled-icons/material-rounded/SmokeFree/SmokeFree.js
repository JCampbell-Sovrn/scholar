"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SmokeFreeDimensions = exports.SmokeFree = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SmokeFree = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20.5 13H22v3h-1.5zM18 13h1.5v3H18zm-1 1.5c0-.83-.67-1.5-1.5-1.5h-.84l2.18 2.18c.1-.21.16-.44.16-.68zm1.96-12.15H19h-.04zm-.11 2.38c.38-.38.67-.84.84-1.35a.771.771 0 0 0-.71-1.02c-.34.01-.61.25-.72.58-.18.55-.62.99-1.17 1.17-.34.11-.59.39-.59.74V5c0 .37.27.69.64.75 1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75V9.76c0-2.22-1.28-4.14-3.15-5.03zm-4.24 3.92h1.42c1.05 0 1.97.74 1.97 2.05v.55c0 .41.33.75.75.75h.01c.41 0 .75-.33.75-.75v-.89c0-1.81-1.6-3.16-3.47-3.16h-1.3c-1.02 0-1.94-.73-2.07-1.75-.12-.95.46-1.7 1.3-1.93.32-.09.54-.38.54-.72 0-.49-.46-.86-.93-.72a3.35 3.35 0 0 0-2.42 3.28c.02 1.85 1.61 3.29 3.45 3.29zM4.12 5.29A.996.996 0 1 0 2.71 6.7L9 13H3.5c-.83 0-1.5.67-1.5 1.5S2.67 16 3.5 16H12l6.29 6.29a.996.996 0 1 0 1.41-1.41L4.12 5.29z"
  }));
});
exports.SmokeFree = SmokeFree;
SmokeFree.displayName = 'SmokeFree';
var SmokeFreeDimensions = {
  height: 24,
  width: 24
};
exports.SmokeFreeDimensions = SmokeFreeDimensions;