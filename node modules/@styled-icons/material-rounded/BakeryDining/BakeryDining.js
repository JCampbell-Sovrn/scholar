"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BakeryDiningDimensions = exports.BakeryDining = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BakeryDining = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m18.77 8.55-1.17-.47c-.62-.25-1.31.17-1.37.84L15.49 17H17l2.6-6.5c.31-.77-.06-1.65-.83-1.95zM6.4 8.08l-1.17.47c-.77.3-1.14 1.18-.83 1.95L7 17h1.5l-.74-8.08a.993.993 0 0 0-1.36-.84zM13.36 6h-2.71c-.89 0-1.58.76-1.5 1.64l.85 9.35h4l.85-9.36c.08-.87-.61-1.63-1.49-1.63zM3.18 13.72l-1 1.93c-.19.36-.23.78-.12 1.19.29 1.01 1.43 1.41 2.38.94l1.05-.52-1.4-3.49a.5.5 0 0 0-.91-.05zm18.64 1.93-1-1.93a.503.503 0 0 0-.91.04l-1.4 3.49 1.05.52c.94.47 2.09.07 2.38-.94.11-.4.07-.82-.12-1.18z"
  }));
});
exports.BakeryDining = BakeryDining;
BakeryDining.displayName = 'BakeryDining';
var BakeryDiningDimensions = {
  height: 24,
  width: 24
};
exports.BakeryDiningDimensions = BakeryDiningDimensions;