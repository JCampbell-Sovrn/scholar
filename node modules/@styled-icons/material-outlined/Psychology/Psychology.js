"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PsychologyDimensions = exports.Psychology = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Psychology = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m15.82 7.22-1 .4c-.21-.16-.43-.29-.67-.39L14 6.17c-.02-.1-.1-.17-.2-.17h-1.6c-.1 0-.18.07-.19.17l-.15 1.06c-.24.1-.47.23-.67.39l-1-.4c-.09-.03-.2 0-.24.09l-.8 1.38a.2.2 0 0 0 .05.26l.85.66c-.03.12-.05.26-.05.39s.01.26.03.39l-.84.66a.19.19 0 0 0-.05.25l.8 1.39c.05.09.15.12.25.09l.99-.4c.21.16.43.29.68.39l.14 1.06c.02.1.1.17.2.17h1.6c.1 0 .18-.07.2-.17l.15-1.06c.24-.1.47-.23.67-.39l.99.4c.09.04.2 0 .24-.09l.8-1.39c.05-.09.03-.19-.05-.25l-.83-.66a2.561 2.561 0 0 0 0-.78l.85-.66a.2.2 0 0 0 .05-.26l-.8-1.38c-.05-.09-.16-.12-.25-.09zM13 11.43a1.43 1.43 0 1 1 0-2.86 1.43 1.43 0 0 1 0 2.86z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.94 9.06c-.43-3.27-3.23-5.86-6.53-6.05C13.27 3 13.14 3 13 3 9.47 3 6.57 5.61 6.08 9l-1.93 3.48c-.41.66.07 1.52.85 1.52h1v2c0 1.1.9 2 2 2h1v3h7v-4.68a7.016 7.016 0 0 0 3.94-7.26zm-5.05 5.57-.89.42V19h-3v-3H8v-4H6.7l1.33-2.33C8.21 7.06 10.35 5 13 5c2.76 0 5 2.24 5 5 0 2.09-1.29 3.88-3.11 4.63z"
  }));
});
exports.Psychology = Psychology;
Psychology.displayName = 'Psychology';
var PsychologyDimensions = {
  height: 24,
  width: 24
};
exports.PsychologyDimensions = PsychologyDimensions;