"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VolunteerActivismDimensions = exports.VolunteerActivism = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var VolunteerActivism = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M3 11c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2s2-.9 2-2v-7c0-1.1-.9-2-2-2zm7-5.7C10 3.45 11.45 2 13.3 2c1.04 0 2.05.49 2.7 1.25.65-.76 1.66-1.25 2.7-1.25C20.55 2 22 3.45 22 5.3c0 2.1-2.5 4.51-5.33 7.09a1 1 0 0 1-1.35 0C12.5 9.81 10 7.4 10 5.3M19.99 17h-6.83a.96.96 0 0 1-.33-.06l-1.47-.51a.49.49 0 0 1-.3-.63c.09-.26.38-.4.64-.3l1.12.43c.11.04.24.07.36.07h2.63c.65 0 1.18-.53 1.18-1.18 0-.49-.31-.93-.77-1.11L9.3 11.13c-.22-.09-.46-.13-.7-.13H7v9.02l6.37 1.81c.41.12.85.1 1.25-.05L22 19c0-1.11-.9-2-2.01-2z"
  }));
});
exports.VolunteerActivism = VolunteerActivism;
VolunteerActivism.displayName = 'VolunteerActivism';
var VolunteerActivismDimensions = {
  height: 24,
  width: 24
};
exports.VolunteerActivismDimensions = VolunteerActivismDimensions;