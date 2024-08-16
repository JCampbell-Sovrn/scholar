"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TsunamiDimensions = exports.Tsunami = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Tsunami = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18.16 17.98c-2.76 1.76-4.67.77-5.61.08a.961.961 0 0 0-1.12.01c-.97.7-2.83 1.65-5.55-.06-.33-.21-.75-.23-1.07-.01-.91.61-1.53.85-2 .94-.47.09-.81.5-.81.97 0 .6.54 1.09 1.13.98.77-.14 1.51-.42 2.2-.83a6.582 6.582 0 0 0 6.67 0 6.535 6.535 0 0 0 6.67 0c.69.41 1.44.69 2.21.83.59.11 1.13-.38 1.13-.98v-.01c0-.47-.33-.88-.8-.97-.49-.1-1.11-.34-2.02-.94a.96.96 0 0 0-1.03-.01zM19.33 12H21c.55 0 1-.45 1-1s-.45-1-1-1h-1.61c-1.86 0-3.4-1.5-3.39-3.36 0-.37.06-.7.16-1.05.37-1.29-.56-2.56-1.89-2.59H14C7.36 3 2.15 8.03 2.01 14.5v.03c-.04 1.13 1.07 1.98 2.14 1.6.4-.14.78-.32 1.15-.54 2.08 1.2 4.64 1.22 6.7-.02a6.535 6.535 0 0 0 6.67 0c.68.41 1.42.68 2.18.82a.99.99 0 0 0 1.16-.98v-.01c0-.46-.32-.88-.78-.97-.49-.09-1.12-.33-2.03-.94a.954.954 0 0 0-1.05-.01c-2.73 1.74-4.63.77-5.58.09a.99.99 0 0 0-1.16-.01c-.15.11-.09.06-.32.2-.7-.94-1.09-2.06-1.09-3.26 0-2.58 1.77-4.74 4.21-5.33-.13.51-.21 1.02-.21 1.5C14 9.61 16.39 12 19.33 12z"
  }));
});
exports.Tsunami = Tsunami;
Tsunami.displayName = 'Tsunami';
var TsunamiDimensions = {
  height: 24,
  width: 24
};
exports.TsunamiDimensions = TsunamiDimensions;