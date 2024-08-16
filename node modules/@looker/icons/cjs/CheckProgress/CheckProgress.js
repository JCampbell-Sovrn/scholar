"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckProgressDimensions = exports.CheckProgress = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CheckProgress = _react.default.forwardRef((props, ref) => {
  const attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return _react.default.createElement(_styledIcon.StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 25"
  }, props, {
    ref: ref
  }), _react.default.createElement("path", {
    d: "M13.0008 2.0293V2.0493V4.0493C17.3908 4.5893 20.5008 8.5793 19.9608 12.9693C19.5008 16.6093 16.6408 19.4993 13.0008 19.9293V21.9293C18.5008 21.3793 22.5008 16.4993 21.9508 10.9993C21.5008 6.2493 17.7308 2.4993 13.0008 2.0293ZM11.0008 2.0593C9.05078 2.2493 7.19078 2.9993 5.67078 4.2593L7.10078 5.7393C8.22078 4.8393 9.57078 4.2593 11.0008 4.0593V2.0593ZM4.26078 5.6693C3.00078 7.1893 2.25078 9.0393 2.05078 10.9993H4.05078C4.24078 9.5793 4.80078 8.2293 5.69078 7.0993L4.26078 5.6693ZM15.5008 8.4993L10.6208 13.3793L8.50078 11.2593L7.44078 12.3193L10.6208 15.4993L16.5608 9.5593L15.5008 8.4993ZM2.06078 12.9993C2.26078 14.9593 3.03078 16.8093 4.27078 18.3293L5.69078 16.8993C4.81078 15.7693 4.24078 14.4193 4.06078 12.9993H2.06078ZM7.10078 18.3693L5.67078 19.7393C7.18078 20.9993 9.04078 21.7893 11.0008 21.9993V19.9993C9.58078 19.8193 8.23078 19.2493 7.10078 18.3693Z"
  }));
});

exports.CheckProgress = CheckProgress;
CheckProgress.displayName = 'CheckProgress';
const CheckProgressDimensions = {
  height: 25,
  width: 24
};
exports.CheckProgressDimensions = CheckProgressDimensions;
//# sourceMappingURL=CheckProgress.js.map