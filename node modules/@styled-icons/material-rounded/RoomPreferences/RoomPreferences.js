"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RoomPreferencesDimensions = exports.RoomPreferences = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RoomPreferences = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M21.75 17c0-.22-.03-.42-.06-.63l.84-.73c.18-.16.22-.42.1-.63l-.59-1.02a.488.488 0 0 0-.59-.22l-1.06.36c-.32-.27-.68-.48-1.08-.63l-.22-1.09a.503.503 0 0 0-.49-.4h-1.18c-.24 0-.44.17-.49.4l-.22 1.09c-.4.15-.76.36-1.08.63l-1.06-.36a.496.496 0 0 0-.59.22l-.59 1.02c-.12.21-.08.47.1.63l.84.73c-.03.21-.06.41-.06.63s.03.42.06.63l-.84.73c-.18.16-.22.42-.1.63l.59 1.02c.12.21.37.3.59.22l1.06-.36c.32.27.68.48 1.08.63l.22 1.09c.05.23.25.4.49.4h1.18c.24 0 .44-.17.49-.4l.22-1.09c.4-.15.76-.36 1.08-.63l1.06.36c.23.08.47-.02.59-.22l.59-1.02c.12-.21.08-.47-.1-.63l-.84-.73c.03-.21.06-.41.06-.63zM18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-4-7.74V6h3v4h2V5c0-.55-.45-1-1-1h-4c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v15H4c-.55 0-1 .45-1 1s.45 1 1 1h8.26A6.963 6.963 0 0 1 11 17c0-2.38 1.19-4.47 3-5.74zM10 12c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"
  }));
});
exports.RoomPreferences = RoomPreferences;
RoomPreferences.displayName = 'RoomPreferences';
var RoomPreferencesDimensions = {
  height: 24,
  width: 24
};
exports.RoomPreferencesDimensions = RoomPreferencesDimensions;