"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VideoSettingsDimensions = exports.VideoSettings = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var VideoSettings = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M4 6h16c.55 0 1 .45 1 1v4h2V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9v-2H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15 12 9 8v8zm7.71 6.43c.03-.29.04-.58.01-.86l1.07-.85c.1-.08.12-.21.06-.32l-1.03-1.79c-.06-.11-.19-.15-.31-.11l-1.28.5a3.44 3.44 0 0 0-.75-.42l-.2-1.36a.249.249 0 0 0-.25-.22h-2.07c-.12 0-.23.09-.25.21l-.2 1.36c-.26.11-.51.26-.74.42l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.79c-.06.11-.04.24.06.32l1.07.86c-.03.29-.04.58-.01.86l-1.07.85c-.1.08-.12.21-.06.32l1.03 1.79c.06.11.19.15.31.11l1.27-.5c.23.17.48.31.75.42l.2 1.36c.02.12.12.21.25.21h2.07c.12 0 .23-.09.25-.21l.2-1.36c.26-.11.51-.26.74-.42l1.28.5c.12.05.25 0 .31-.11l1.03-1.79c.06-.11.04-.24-.06-.32l-1.06-.85zM19 19.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
  }));
});
exports.VideoSettings = VideoSettings;
VideoSettings.displayName = 'VideoSettings';
var VideoSettingsDimensions = {
  height: 24,
  width: 24
};
exports.VideoSettingsDimensions = VideoSettingsDimensions;