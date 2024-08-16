"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarDayDimensions = exports.CalendarDay = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CalendarDay = _react.default.forwardRef((props, ref) => {
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
    d: "M21 6V20C21 21.1 20.1 22 19 22H5C3.89 22 3 21.1 3 20L3.01 6C3.01 4.9 3.89 4 5 4H6V2H8V4H16V2H18V4H19C20.1 4 21 4.9 21 6ZM5 8H19V6H5V8ZM19 20V10H5V20H19Z"
  }), _react.default.createElement("path", {
    d: "M10.3883 18H9.18125V14.6953L9.19297 14.1523L9.2125 13.5586C9.01198 13.7591 8.87266 13.8906 8.79453 13.9531L8.13828 14.4805L7.55625 13.7539L9.39609 12.2891H10.3883V18ZM13.2617 18.0781C12.7487 18.0781 12.3451 17.8789 12.0508 17.4805C11.7591 17.082 11.6133 16.5299 11.6133 15.8242C11.6133 15.1081 11.7617 14.5508 12.0586 14.1523C12.3581 13.7513 12.7695 13.5508 13.293 13.5508C13.8424 13.5508 14.2617 13.7643 14.5508 14.1914H14.5898C14.5299 13.8659 14.5 13.5755 14.5 13.3203V11.9219H15.6953V18H14.7812L14.5508 17.4336H14.5C14.2292 17.8633 13.8164 18.0781 13.2617 18.0781ZM13.6797 17.1289C13.9844 17.1289 14.207 17.0404 14.3477 16.8633C14.4909 16.6862 14.569 16.3854 14.582 15.9609V15.832C14.582 15.3633 14.5091 15.0273 14.3633 14.8242C14.2201 14.6211 13.9857 14.5195 13.6602 14.5195C13.3945 14.5195 13.1875 14.6328 13.0391 14.8594C12.8932 15.0833 12.8203 15.4102 12.8203 15.8398C12.8203 16.2695 12.8945 16.5924 13.043 16.8086C13.1914 17.0221 13.4036 17.1289 13.6797 17.1289Z"
  }));
});

exports.CalendarDay = CalendarDay;
CalendarDay.displayName = 'CalendarDay';
const CalendarDayDimensions = {
  height: 24,
  width: 24
};
exports.CalendarDayDimensions = CalendarDayDimensions;
//# sourceMappingURL=CalendarDay.js.map