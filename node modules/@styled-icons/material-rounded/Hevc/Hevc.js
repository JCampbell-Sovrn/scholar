"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HevcDimensions = exports.Hevc = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Hevc = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.25 9c-.41 0-.75.34-.75.75V11h-1V9.75c0-.41-.34-.75-.75-.75S3 9.34 3 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h1v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5C7 9.34 6.66 9 6.25 9zm4.5 1.5c.41 0 .75-.34.75-.75S11.16 9 10.75 9H9c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h1.75c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.5v-1h1.25c.41 0 .75-.34.75-.75s-.34-.75-.75-.75H9.5v-.5h1.25zM15.63 9a.74.74 0 0 0-.73.62l-.65 3.88-.65-3.88a.74.74 0 0 0-1.46.24l.65 3.91c.12.71.73 1.23 1.46 1.23s1.34-.52 1.46-1.23l.65-3.91a.746.746 0 0 0-.73-.86zm3.87 1.5c0 .28.22.5.5.5h.5c.28 0 .5-.22.5-.5V10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-.5c0-.28-.22-.5-.5-.5H20c-.28 0-.5.22-.5.5h-1v-3h1z"
  }));
});
exports.Hevc = Hevc;
Hevc.displayName = 'Hevc';
var HevcDimensions = {
  height: 24,
  width: 24
};
exports.HevcDimensions = HevcDimensions;