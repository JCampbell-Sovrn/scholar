"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HotTubDimensions = exports.HotTub = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var HotTub = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7,
    cy: 6,
    r: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12h-9.85c-.31-.22-.59-.46-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C6.01 9 5 10.01 5 11.25V12H3c-.55 0-1 .45-1 1v7c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-7c0-.55-.45-1-1-1zM7 19c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm4 0c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4zm-3.94-9c.5 0 .93-.39.94-.89.04-1.4-.58-2.48-1.35-3.25-.65-.72-.8-1.27-.77-1.91.02-.52-.41-.95-.94-.95-.5 0-.93.4-.94.9-.03 1.29.5 2.43 1.35 3.25.61.59.78 1.27.78 1.89-.01.52.4.96.93.96zm4 0c.5 0 .93-.39.94-.89.04-1.4-.58-2.48-1.35-3.25-.65-.72-.8-1.27-.77-1.91.02-.52-.41-.95-.94-.95-.5 0-.93.4-.94.9-.03 1.29.5 2.43 1.35 3.25.61.59.78 1.27.78 1.89-.01.52.4.96.93.96z"
  }));
});
exports.HotTub = HotTub;
HotTub.displayName = 'HotTub';
var HotTubDimensions = {
  height: 24,
  width: 24
};
exports.HotTubDimensions = HotTubDimensions;