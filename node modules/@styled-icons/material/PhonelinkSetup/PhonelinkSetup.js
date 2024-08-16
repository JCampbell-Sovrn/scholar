"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PhonelinkSetupDimensions = exports.PhonelinkSetup = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var PhonelinkSetup = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M10.82 12.49c.02-.16.04-.32.04-.49 0-.17-.02-.33-.04-.49l1.08-.82c.1-.07.12-.21.06-.32l-1.03-1.73c-.06-.11-.2-.15-.31-.11l-1.28.5c-.27-.2-.56-.36-.87-.49l-.2-1.33c0-.12-.11-.21-.24-.21H5.98a.26.26 0 0 0-.26.21l-.2 1.32c-.31.12-.6.3-.87.49l-1.28-.5c-.12-.05-.25 0-.31.11l-1.03 1.73c-.06.12-.03.25.07.33l1.08.82c-.02.16-.03.33-.03.49 0 .17.02.33.04.49l-1.09.83c-.1.07-.12.21-.06.32l1.03 1.73c.06.11.2.15.31.11l1.28-.5c.27.2.56.36.87.49l.2 1.32c.01.12.12.21.25.21h2.06c.13 0 .24-.09.25-.21l.2-1.32c.31-.12.6-.3.87-.49l1.28.5c.12.05.25 0 .31-.11l1.03-1.73c.06-.11.04-.24-.06-.32l-1.1-.83zM7 13.75c-.99 0-1.8-.78-1.8-1.75s.81-1.75 1.8-1.75 1.8.78 1.8 1.75S8 13.75 7 13.75zM18 1.01 8 1c-1.1 0-2 .9-2 2v3h2V5h10v14H8v-1H6v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"
  }));
});
exports.PhonelinkSetup = PhonelinkSetup;
PhonelinkSetup.displayName = 'PhonelinkSetup';
var PhonelinkSetupDimensions = {
  height: 24,
  width: 24
};
exports.PhonelinkSetupDimensions = PhonelinkSetupDimensions;