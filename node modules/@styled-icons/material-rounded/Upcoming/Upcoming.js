"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpcomingDimensions = exports.Upcoming = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Upcoming = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20.45 6.55a.99.99 0 0 0-1.39 0L16.89 8.7a.972.972 0 0 0 0 1.39l.01.01c.39.39 1.01.39 1.4 0 .62-.63 1.52-1.54 2.15-2.17.38-.38.38-1 0-1.38zM12.02 3h-.03c-.55 0-.99.44-.99.98v3.03c0 .55.44.99.98.99h.03c.55 0 .99-.44.99-.98V3.98c0-.54-.44-.98-.98-.98zM7.1 10.11l.01-.01a.99.99 0 0 0 0-1.39L4.96 6.54a.972.972 0 0 0-1.39 0l-.02.01a.972.972 0 0 0 0 1.39c.63.62 1.53 1.54 2.15 2.17.39.38 1.02.38 1.4 0zM12 15c-1.24 0-2.31-.75-2.76-1.83-.32-.74-1.1-1.17-1.9-1.17H4c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h-3.34c-.8 0-1.58.43-1.9 1.17A2.985 2.985 0 0 1 12 15"
  }));
});
exports.Upcoming = Upcoming;
Upcoming.displayName = 'Upcoming';
var UpcomingDimensions = {
  height: 24,
  width: 24
};
exports.UpcomingDimensions = UpcomingDimensions;