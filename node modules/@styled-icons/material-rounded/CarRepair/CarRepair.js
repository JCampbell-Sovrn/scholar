"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarRepairDimensions = exports.CarRepair = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CarRepair = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M7 15v-1h10v1c0 .55.45 1 1 1s1-.45 1-1V8.69L17.44 4c-.05-.16-.12-.29-.19-.4-.02-.02-.03-.04-.05-.07-.38-.52-.92-.53-.92-.53H7.72s-.54.01-.92.54c-.02.02-.03.04-.05.06-.07.11-.14.24-.19.4L5 8.69V15c0 .55.45 1 1 1s1-.45 1-1zm2-3.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM8.33 5h7.34l.23.69.43 1.31H7.67l.66-2zM4 18.01c0 .54.45.99.99.99H11v2.01c0 .55.45.99.99.99H12c.55 0 .99-.45.99-.99V19H19c.55 0 .99-.45.99-.99 0-.55-.45-.99-.99-.99H4.99a.986.986 0 0 0-.99.99z"
  }));
});
exports.CarRepair = CarRepair;
CarRepair.displayName = 'CarRepair';
var CarRepairDimensions = {
  height: 24,
  width: 24
};
exports.CarRepairDimensions = CarRepairDimensions;