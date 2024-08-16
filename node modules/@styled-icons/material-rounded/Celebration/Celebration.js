"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CelebrationDimensions = exports.Celebration = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Celebration = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m3.99 21.29 9.04-3.23c1.38-.49 1.78-2.26.74-3.3l-4.53-4.53c-1.04-1.04-2.8-.64-3.3.74l-3.23 9.04c-.28.8.48 1.56 1.28 1.28zM15.06 12l5.06-5.06a1.25 1.25 0 0 1 1.77 0l.06.06c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.06-.06a2.758 2.758 0 0 0-3.89 0L14 10.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0zm-5-5.12-.06.06c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.06-.06a2.758 2.758 0 0 0 0-3.89L11.07 4c-.3-.3-.78-.3-1.07 0-.29.29-.29.77 0 1.06l.06.06c.48.48.48 1.28 0 1.76zm7 5L16 12.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.06-1.06a1.25 1.25 0 0 1 1.77 0l1.08 1.08c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-1.08-1.08a2.758 2.758 0 0 0-3.89 0zm-2-6L12 8.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l3.06-3.06a2.758 2.758 0 0 0 0-3.89l-1.06-1.06a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.06 1.06c.48.49.48 1.29 0 1.77z"
  }));
});
exports.Celebration = Celebration;
Celebration.displayName = 'Celebration';
var CelebrationDimensions = {
  height: 24,
  width: 24
};
exports.CelebrationDimensions = CelebrationDimensions;