"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanoramaPhotosphereSelectDimensions = exports.PanoramaPhotosphereSelect = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PanoramaPhotosphereSelect = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.95 8.15c-.29-.16-.61-.31-.93-.46C19.4 4.33 15.98 2 12 2 8.02 2 4.6 4.33 2.99 7.68c-.33.15-.64.3-.93.46C1.41 8.5 1 9.17 1 9.91v4.18c0 .74.41 1.41 1.05 1.77.29.16.61.31.93.46C4.6 19.67 8.02 22 12 22c3.98 0 7.4-2.33 9.01-5.68.33-.15.64-.3.93-.46.65-.36 1.06-1.03 1.06-1.77V9.91c0-.74-.41-1.41-1.05-1.76zM12 4c2.37 0 4.49 1.04 5.95 2.68C16.17 6.25 14.15 6 12 6c-2.15 0-4.17.25-5.95.68A7.943 7.943 0 0 1 12 4zm0 16c-2.37 0-4.49-1.04-5.95-2.68 1.78.43 3.8.68 5.95.68s4.17-.25 5.95-.68A7.943 7.943 0 0 1 12 20z"
  }));
});
exports.PanoramaPhotosphereSelect = PanoramaPhotosphereSelect;
PanoramaPhotosphereSelect.displayName = 'PanoramaPhotosphereSelect';
var PanoramaPhotosphereSelectDimensions = {
  height: 24,
  width: 24
};
exports.PanoramaPhotosphereSelectDimensions = PanoramaPhotosphereSelectDimensions;