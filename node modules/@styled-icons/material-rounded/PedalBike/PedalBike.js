"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PedalBikeDimensions = exports.PedalBike = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PedalBike = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m18.18 10-1.7-4.68A2.008 2.008 0 0 0 14.6 4H13c-.55 0-1 .45-1 1s.45 1 1 1h1.6l1.46 4h-4.81l-.36-1h.09c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1h.75l1.82 5H9.9c-.44-2.23-2.31-3.88-4.65-3.99C2.45 9.87 0 12.2 0 15c0 2.8 2.2 5 5 5 2.46 0 4.45-1.69 4.9-4h4.2c.44 2.23 2.31 3.88 4.65 3.99 2.8.13 5.25-2.19 5.25-5 0-2.8-2.2-5-5-5h-.82zM7.82 16c-.42 1.23-1.6 2.08-3.02 1.99-1.49-.09-2.73-1.35-2.8-2.85C1.93 13.39 3.27 12 5 12c1.33 0 2.42.83 2.82 2H6c-.55 0-1 .45-1 1s.45 1 1 1h1.82zm6.28-2h-1.4l-.73-2H15c-.44.58-.76 1.25-.9 2zm4.78 4c-1.54-.06-2.84-1.37-2.88-2.92-.02-.96.39-1.8 1.05-2.36l.62 1.7c.19.52.76.79 1.28.6.52-.19.79-.76.6-1.28l-.63-1.73.01-.01c1.72-.04 3.08 1.29 3.08 3a2.99 2.99 0 0 1-3.13 3z"
  }));
});
exports.PedalBike = PedalBike;
PedalBike.displayName = 'PedalBike';
var PedalBikeDimensions = {
  height: 24,
  width: 24
};
exports.PedalBikeDimensions = PedalBikeDimensions;