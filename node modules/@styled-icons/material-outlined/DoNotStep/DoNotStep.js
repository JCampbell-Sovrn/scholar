"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoNotStepDimensions = exports.DoNotStep = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DoNotStep = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m18.51 15.68-1.41-1.41 4.48-4.48L23 11.2l-4.49 4.48zm-3.53-3.53 3.07-3.07-4.25-4.26-3.08 3.07L9.3 6.47 13.8 2l7.08 7.08-4.48 4.48-1.42-1.41zm6.2 9.05-1.41 1.41-5.94-5.94L10.5 20H1v-2.63c0-.84.52-1.57 1.3-1.88.58-.23 1.28-.56 1.97-1.02l1.38 1.38c.09.1.22.15.35.15s.26-.05.36-.15c.2-.2.2-.51 0-.71l-1.28-1.28c.27-.24.53-.51.77-.8l1.27 1.27a.485.485 0 0 0 .7 0c.2-.2.2-.51 0-.71l-1.4-1.4c.19-.34.34-.72.45-1.12l1.71 1.72a.485.485 0 0 0 .7 0c.19-.2.19-.5.01-.7l-7.9-7.9 1.42-1.41L21.18 21.2zm-8.76-5.94-1.67-1.68-3.33 3.32c-.78.78-2.05.78-2.83-.01l-.19-.17-.47.24c-.29.14-.59.27-.89.39l-.01.65h6.64l2.75-2.74z"
  }));
});
exports.DoNotStep = DoNotStep;
DoNotStep.displayName = 'DoNotStep';
var DoNotStepDimensions = {
  height: 24,
  width: 24
};
exports.DoNotStepDimensions = DoNotStepDimensions;