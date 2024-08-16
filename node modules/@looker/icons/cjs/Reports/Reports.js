"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportsDimensions = exports.Reports = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Reports = _react.default.forwardRef((props, ref) => {
  const attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return _react.default.createElement(_styledIcon.StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), _react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 3H9V17H19V3ZM9 1C7.89543 1 7 1.89543 7 3V17C7 18.1046 7.89543 19 9 19H19C20.1046 19 21 18.1046 21 17V3C21 1.89543 20.1046 1 19 1H9ZM3 9C3 7.89543 3.89543 7 5 7V21H16C16 22.1046 15.1046 23 14 23H5C3.89543 23 3 22.1046 3 21V9ZM15 5H11V7H15V5ZM11 9H17V11H11V9ZM17 13H11V15H17V13Z"
  }));
});

exports.Reports = Reports;
Reports.displayName = 'Reports';
const ReportsDimensions = {
  height: 24,
  width: 24
};
exports.ReportsDimensions = ReportsDimensions;
//# sourceMappingURL=Reports.js.map