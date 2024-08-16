"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlarmOffDimensions = exports.AlarmOff = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AlarmOff = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M10.04 6.29C10.66 6.11 11.32 6 12 6c3.86 0 7 3.14 7 7 0 .68-.11 1.34-.29 1.96l1.56 1.56c.47-1.08.73-2.27.73-3.52A9 9 0 0 0 8.47 4.72l1.57 1.57zm-6.33-3.5a.99.99 0 0 0-1.39 0l-.02.03a.972.972 0 0 0 0 1.39l.68.68-.17.14c-.42.34-.47.96-.13 1.38l.03.03c.35.42.96.47 1.38.12l.31-.25.8.8A8.964 8.964 0 0 0 3 13a9 9 0 0 0 9 9c2.25 0 4.31-.83 5.89-2.2l1.41 1.41c.38.38 1 .38 1.39 0l.03-.03c.38-.38.38-1 0-1.39l-17.01-17zM12 20c-3.86 0-7-3.14-7-7 0-1.7.61-3.26 1.62-4.47l9.85 9.85A6.956 6.956 0 0 1 12 20zm7.91-13.44c.42.35 1.03.29 1.38-.12l.03-.03a.981.981 0 0 0-.12-1.38l-3.1-2.59a.981.981 0 0 0-1.38.12l-.03.03a.981.981 0 0 0 .12 1.38l3.1 2.59zM7.43 3.68c.18-.34.15-.77-.11-1.09l-.03-.03c-.3-.36-.8-.43-1.2-.22l1.34 1.34z"
  }));
});
exports.AlarmOff = AlarmOff;
AlarmOff.displayName = 'AlarmOff';
var AlarmOffDimensions = {
  height: 24,
  width: 24
};
exports.AlarmOffDimensions = AlarmOffDimensions;