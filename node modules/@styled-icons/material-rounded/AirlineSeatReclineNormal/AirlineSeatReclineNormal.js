"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AirlineSeatReclineNormalDimensions = exports.AirlineSeatReclineNormal = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AirlineSeatReclineNormal = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M7.59 5.41c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83c-.79.79-2.05.79-2.83 0zM6 16V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 2.76 2.24 5 5 5h5c.55 0 1-.45 1-1s-.45-1-1-1H9c-1.66 0-3-1.34-3-3zm13.28 3.35-3.77-3.77c-.37-.37-.88-.58-1.41-.58h-2.6v-3.68c1.09.89 2.66 1.7 4.2 2.02.67.14 1.3-.36 1.3-1.04 0-.53-.39-.96-.92-1.05-1.42-.24-2.88-1.01-3.75-1.97l-1.4-1.55c-.19-.21-.43-.38-.69-.5-.29-.14-.62-.23-.96-.23h-.03C8.01 7 7 8.01 7 9.25V15c0 1.66 1.34 3 3 3h5.07l2.78 2.78c.39.39 1.04.39 1.43 0 .4-.39.4-1.03 0-1.43z"
  }));
});
exports.AirlineSeatReclineNormal = AirlineSeatReclineNormal;
AirlineSeatReclineNormal.displayName = 'AirlineSeatReclineNormal';
var AirlineSeatReclineNormalDimensions = {
  height: 24,
  width: 24
};
exports.AirlineSeatReclineNormalDimensions = AirlineSeatReclineNormalDimensions;