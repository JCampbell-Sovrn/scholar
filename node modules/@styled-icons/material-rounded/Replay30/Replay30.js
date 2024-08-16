"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Replay30Dimensions = exports.Replay30 = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Replay30 = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M12 5V2.21c0-.45-.54-.67-.85-.35l-3.8 3.79c-.2.2-.2.51 0 .71l3.79 3.79c.32.31.86.09.86-.36V7c3.73 0 6.68 3.42 5.86 7.29-.47 2.27-2.31 4.1-4.57 4.57-3.57.75-6.75-1.7-7.23-5.01a1 1 0 0 0-.98-.85c-.6 0-1.08.53-1 1.13.62 4.39 4.8 7.64 9.53 6.72 3.12-.61 5.63-3.12 6.24-6.24C20.84 9.48 16.94 5 12 5zm-2.44 8.49h.45c.21 0 .37-.05.48-.16s.16-.25.16-.43a.538.538 0 0 0-.15-.39c-.05-.05-.11-.09-.18-.11s-.16-.04-.25-.04c-.08 0-.15.01-.22.03s-.13.05-.18.1-.09.09-.12.15-.05.13-.05.2h-.85a1.06 1.06 0 0 1 .41-.85c.13-.1.27-.18.44-.23s.35-.08.54-.08c.21 0 .41.03.59.08s.33.13.46.23.23.23.3.38.11.33.11.53a.842.842 0 0 1-.17.52 1.1 1.1 0 0 1-.48.39c.24.09.42.21.54.39s.18.38.18.61c0 .2-.04.38-.12.53s-.18.29-.32.39-.29.19-.48.24-.38.08-.6.08c-.18 0-.36-.02-.53-.07s-.33-.12-.46-.23-.25-.23-.33-.38-.12-.34-.12-.55h.85c0 .08.02.15.05.22s.07.12.13.17.12.09.2.11.16.04.25.04c.1 0 .19-.01.27-.04s.15-.07.2-.12.1-.11.13-.18.04-.15.04-.24c0-.11-.02-.21-.05-.29s-.08-.15-.14-.2-.13-.09-.22-.11-.18-.04-.29-.04h-.47v-.65zm5.74.75c0 .32-.03.6-.1.82s-.17.42-.29.57-.28.26-.45.33-.37.1-.59.1-.41-.03-.59-.1-.33-.18-.46-.33-.23-.34-.3-.57-.11-.5-.11-.82v-.74c0-.32.03-.6.1-.82s.17-.42.29-.57.28-.26.45-.33.37-.1.59-.1.41.03.59.1.33.18.46.33.23.34.3.57.11.5.11.82v.74zm-.85-.86c0-.19-.01-.35-.04-.48s-.07-.23-.12-.31-.11-.14-.19-.17-.16-.05-.25-.05-.18.02-.25.05-.14.09-.19.17-.09.18-.12.31-.04.29-.04.48v.97c0 .19.01.35.04.48s.07.24.12.32.11.14.19.17.16.05.25.05.18-.02.25-.05.14-.09.19-.17.09-.19.11-.32c.03-.13.04-.29.04-.48v-.97z"
  }));
});
exports.Replay30 = Replay30;
Replay30.displayName = 'Replay30';
var Replay30Dimensions = {
  height: 24,
  width: 24
};
exports.Replay30Dimensions = Replay30Dimensions;