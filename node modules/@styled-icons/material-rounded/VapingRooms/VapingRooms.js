"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VapingRoomsDimensions = exports.VapingRooms = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var VapingRooms = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 17.5c0 .83-.67 1.5-1.5 1.5H8v-3h12.5c.83 0 1.5.67 1.5 1.5zM10.5 17c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm8.35-9.27c.62-.61 1-1.45 1-2.38 0-1.51-1-2.79-2.38-3.21a.758.758 0 0 0-.97.72c0 .33.21.62.52.71.77.23 1.33.94 1.33 1.78 0 .82-.53 1.51-1.27 1.76-.33.11-.58.39-.58.74V8c0 .37.27.69.64.75 1.93.31 3.36 2 3.36 4.02v1.48c0 .41.34.75.75.75s.75-.34.75-.75v-1.49c0-2.22-1.28-4.14-3.15-5.03zM18.76 15c.41 0 .75-.33.75-.75v-.89c-.01-1.81-1.61-3.16-3.48-3.16h-1.3c-1.02 0-1.94-.73-2.07-1.75-.12-.95.46-1.7 1.3-1.93.32-.09.54-.38.54-.72 0-.49-.46-.86-.93-.72a3.35 3.35 0 0 0-2.42 3.28c.03 1.84 1.62 3.29 3.46 3.29h1.42c1.05 0 1.97.74 1.97 2.05v.55c0 .41.34.75.76.75zM3 18.5c1.33 0 2.71.18 4 .5v-3c-1.29.32-2.67.5-4 .5-.55 0-1 .45-1 1s.45 1 1 1z"
  }));
});
exports.VapingRooms = VapingRooms;
VapingRooms.displayName = 'VapingRooms';
var VapingRoomsDimensions = {
  height: 24,
  width: 24
};
exports.VapingRoomsDimensions = VapingRoomsDimensions;