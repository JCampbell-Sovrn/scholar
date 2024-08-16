"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoMealsDimensions = exports.NoMeals = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NoMeals = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m21 18.17-2-2V14h-1c-1.1 0-2-.9-2-2V6c0-1.49 1.6-3.32 3.76-3.85.63-.15 1.24.33 1.24.98v15.04zm.19 4.44a.996.996 0 0 1-1.41 0l-9.76-9.76c-.33.09-.66.15-1.02.15v8c0 .55-.45 1-1 1s-1-.45-1-1v-8c-2.21 0-4-1.79-4-4V5.83L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.38 18.38c.4.39.4 1.03.01 1.42zM6.17 9 5 7.83V9h1.17zM13 9V3c0-.55-.45-1-1-1s-1 .45-1 1v5.17l1.85 1.85c.09-.33.15-.66.15-1.02zM9 3c0-.55-.45-1-1-1s-1 .45-1 1v1.17l2 2V3z"
  }));
});
exports.NoMeals = NoMeals;
NoMeals.displayName = 'NoMeals';
var NoMealsDimensions = {
  height: 24,
  width: 24
};
exports.NoMealsDimensions = NoMealsDimensions;