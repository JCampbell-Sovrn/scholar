"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BeachAccessDimensions = exports.BeachAccess = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var BeachAccess = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m21 19.57-1.427 1.428-6.442-6.442 1.43-1.428zM13.12 3c-2.58 0-5.16.98-7.14 2.95l-.01.01c-3.95 3.95-3.95 10.36 0 14.31l14.3-14.31A10.086 10.086 0 0 0 13.12 3zM6.14 17.27a8.063 8.063 0 0 1-.68-6.82c.19 1.91.89 3.79 2.07 5.44l-1.39 1.38zm2.84-2.84C7.63 12.38 7.12 9.93 7.6 7.6c.58-.12 1.16-.18 1.75-.18 1.8 0 3.55.55 5.08 1.56l-5.45 5.45zm1.47-8.97a8.063 8.063 0 0 1 6.82.68l-1.39 1.39a11.25 11.25 0 0 0-5.43-2.07z"
  }));
});
exports.BeachAccess = BeachAccess;
BeachAccess.displayName = 'BeachAccess';
var BeachAccessDimensions = {
  height: 24,
  width: 24
};
exports.BeachAccessDimensions = BeachAccessDimensions;