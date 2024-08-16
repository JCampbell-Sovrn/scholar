"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarWeekDimensions = exports.CalendarWeek = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const CalendarWeek = _react.default.forwardRef((props, ref) => {
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
    d: "M9.49375 18H8.28672V14.6953L8.29844 14.1523L8.31797 13.5586C8.11745 13.7591 7.97813 13.8906 7.9 13.9531L7.24375 14.4805L6.66172 13.7539L8.50156 12.2891H9.49375V18ZM14.5742 18L14.2383 16.4727L13.7852 14.543H13.7578L12.9609 18H11.6797L10.4375 13.6328H11.625L12.1289 15.5664C12.2096 15.9128 12.2917 16.3906 12.375 17H12.3984C12.4089 16.8021 12.4544 16.4883 12.5352 16.0586L12.5977 15.7266L13.1367 13.6328H14.4492L14.9609 15.7266C14.9714 15.7839 14.987 15.8685 15.0078 15.9805C15.0312 16.0924 15.0534 16.2122 15.0742 16.3398C15.0951 16.4648 15.1133 16.5885 15.1289 16.7109C15.1471 16.8307 15.1576 16.9271 15.1602 17H15.1836C15.207 16.8125 15.2487 16.556 15.3086 16.2305C15.3685 15.9023 15.4115 15.681 15.4375 15.5664L15.9609 13.6328H17.1289L15.8711 18H14.5742Z"
  }));
});

exports.CalendarWeek = CalendarWeek;
CalendarWeek.displayName = 'CalendarWeek';
const CalendarWeekDimensions = {
  height: 24,
  width: 24
};
exports.CalendarWeekDimensions = CalendarWeekDimensions;
//# sourceMappingURL=CalendarWeek.js.map