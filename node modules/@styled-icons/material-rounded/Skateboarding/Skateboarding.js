"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkateboardingDimensions = exports.Skateboarding = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Skateboarding = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M13 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zM7.25 22.5c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm8.5 0c-.41 0-.75.34-.75.75s.34.75.75.75.75-.34.75-.75-.34-.75-.75-.75zm3.49-3.5a.72.72 0 0 0-.59.3c-.55.73-1.42 1.2-2.4 1.2H16v-4.88c0-.69-.36-1.34-.95-1.7l-3.37-2.08 1.8-2.89a6.507 6.507 0 0 0 4.39 2.96c.6.11 1.13-.39 1.13-.99 0-.48-.35-.89-.83-.98a4.503 4.503 0 0 1-3.3-2.64l-.52-1.21C14.16 5.64 13.61 5 12.7 5H8.11c-.69 0-1.33.36-1.7.94L5.03 8.15a1.003 1.003 0 0 0 1.7 1.06L8.1 7h2.35l-2.4 3.84c-.31.5-.39 1.11-.21 1.67l1.34 4.15-3.12 3.76c-.7-.16-1.3-.57-1.71-1.12a.749.749 0 1 0-1.2.9c.82 1.1 2.13 1.8 3.6 1.8h9.5c1.47 0 2.78-.7 3.6-1.8.1-.14.15-.3.15-.45 0-.39-.32-.75-.76-.75zM14 20.5H8.6l2.21-2.67c.43-.52.57-1.21.37-1.86l-.68-2.27 3.5 2.2v4.6z"
  }));
});
exports.Skateboarding = Skateboarding;
Skateboarding.displayName = 'Skateboarding';
var SkateboardingDimensions = {
  height: 24,
  width: 24
};
exports.SkateboardingDimensions = SkateboardingDimensions;