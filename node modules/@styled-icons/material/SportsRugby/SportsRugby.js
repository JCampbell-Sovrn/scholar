"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SportsRugbyDimensions = exports.SportsRugby = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SportsRugby = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20.49 3.51c-.56-.56-2.15-.97-4.16-.97-3.08 0-7.15.96-9.98 3.79-4.69 4.7-4.25 12.74-2.84 14.16.56.56 2.15.97 4.16.97 3.08 0 7.15-.96 9.98-3.79 4.69-4.7 4.25-12.74 2.84-14.16zM7.76 7.76c2.64-2.64 6.35-3.12 8.03-3.19-2.05.94-4.46 2.45-6.61 4.61a23.462 23.462 0 0 0-4.62 6.63c.1-2.48.88-5.74 3.2-8.05zm8.48 8.48c-2.64 2.64-6.35 3.12-8.03 3.19 2.05-.94 4.46-2.45 6.61-4.61 2.16-2.16 3.67-4.58 4.62-6.63-.1 2.48-.88 5.74-3.2 8.05z"
  }));
});
exports.SportsRugby = SportsRugby;
SportsRugby.displayName = 'SportsRugby';
var SportsRugbyDimensions = {
  height: 24,
  width: 24
};
exports.SportsRugbyDimensions = SportsRugbyDimensions;