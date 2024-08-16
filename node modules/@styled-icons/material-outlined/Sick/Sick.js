"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SickDimensions = exports.Sick = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Sick = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M7.32 10.56 8.38 9.5 7.32 8.44l1.06-1.06L10.5 9.5l-2.12 2.12-1.06-1.06zM4.5 9c.03 0 .05.01.08.01A8.002 8.002 0 0 1 12 4c2.19 0 4.16.88 5.61 2.3.15-.6.45-1.29.81-1.96A9.965 9.965 0 0 0 11.99 2c-4.88 0-8.94 3.51-9.81 8.14C2.74 9.44 3.59 9 4.5 9zM21 10.5c-.42 0-.82-.09-1.19-.22.12.55.19 1.13.19 1.72 0 4.42-3.58 8-8 8-3.36 0-6.23-2.07-7.42-5.01-.03 0-.05.01-.08.01-.52 0-1.04-.14-1.5-.4-.32-.18-.59-.42-.82-.7.89 4.61 4.93 8.1 9.8 8.1C17.52 22 22 17.52 22 12c0-.55-.06-1.09-.14-1.62a3.5 3.5 0 0 1-.86.12zM21 3s-2 2.9-2 4 .9 2 2 2 2-.9 2-2-2-4-2-4zm-5.38 4.38L13.5 9.5l2.12 2.12 1.06-1.06-1.06-1.06 1.06-1.06-1.06-1.06zM8.56 17c.69-1.19 1.97-2 3.44-2s2.75.81 3.44 2h1.68c-.8-2.05-2.79-3.5-5.12-3.5-.87 0-1.7.2-2.43.57L5.99 12c0-.52-.26-1.02-.74-1.29-.72-.41-1.63-.17-2.05.55-.41.72-.17 1.63.55 2.05.48.28 1.05.25 1.49 0l2.97 1.72c-.57.53-1.03 1.21-1.33 1.97h1.68z"
  }));
});
exports.Sick = Sick;
Sick.displayName = 'Sick';
var SickDimensions = {
  height: 24,
  width: 24
};
exports.SickDimensions = SickDimensions;