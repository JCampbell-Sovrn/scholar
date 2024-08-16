"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RecyclingDimensions = exports.Recycling = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Recycling = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.2 7.41a.501.501 0 0 1-.17-.68L7.2 4.78l1.03-1.71c.39-.65 1.33-.65 1.72 0l1.48 2.46-1.23 2.06-.72 1.2a.54.54 0 0 1-.71.17L6.2 7.41zm15.52 5.56-1.34-2.24a.512.512 0 0 0-.68-.18l-2.6 1.5c-.24.14-.32.45-.18.69L18.87 16h1.09c.61 0 1.2-.26 1.59-.73.3-.37.45-.82.45-1.27 0-.36-.1-.71-.28-1.03zM16 21h1.5a2 2 0 0 0 1.79-1.11L20.74 17H16v-.79c0-.45-.54-.67-.85-.35l-2.79 2.79c-.2.2-.2.51 0 .71l2.79 2.79a.5.5 0 0 0 .85-.35V21zm-6.5-4H5.7l-.84 1.41c-.3.5-.32 1.12-.06 1.65.28.57.87.94 1.52.94H9.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5zm-3.38-2.65.7.42c.38.23.85-.12.74-.55l-.96-3.84a.49.49 0 0 0-.6-.36l-3.83.96c-.43.11-.52.68-.14.91l.66.4-.41.69c-.35.59-.38 1.31-.07 1.92l1.63 3.26 2.28-3.81zm10.9-9.21-1.3-2.17C15.35 2.37 14.7 2 14 2h-3.53l3.12 5.2-.69.41c-.38.23-.3.81.14.91l3.83.96c.27.07.54-.1.61-.36l.96-3.83a.499.499 0 0 0-.74-.55l-.68.4z"
  }));
});
exports.Recycling = Recycling;
Recycling.displayName = 'Recycling';
var RecyclingDimensions = {
  height: 24,
  width: 24
};
exports.RecyclingDimensions = RecyclingDimensions;