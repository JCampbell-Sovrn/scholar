"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SqlRunnerDimensions = exports.SqlRunner = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const SqlRunner = _react.default.forwardRef((props, ref) => {
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
    d: "M14.5608 11.3098C15.2783 10.7373 15.7475 9.8665 15.7475 8.87567C15.7475 7.364 14.6733 6.10317 13.25 5.81484V3.25067H12.0016V5.81484C10.5775 6.10317 9.50581 7.36484 9.50581 8.87567C9.50581 9.86567 9.97498 10.7365 10.6908 11.3098L8.10414 15.5148C6.41998 14.3957 5.13164 12.7307 4.53998 10.7507H3.24664C3.87498 13.1807 5.41164 15.2265 7.45414 16.5748L4.50748 21.3682L5.56998 21.9948L8.52164 17.194C9.85914 17.8557 11.355 18.2515 12.9508 18.2515C14.3491 18.2515 15.67 17.9507 16.8783 17.434L19.6833 21.9957L20.7458 21.369L14.5616 11.3107L14.5608 11.3098ZM12.625 7.0015C13.66 7.0015 14.4975 7.8415 14.4975 8.8765C14.4975 9.9115 13.66 10.7515 12.625 10.7515C11.5908 10.7515 10.7525 9.9115 10.7525 8.8765C10.7525 7.8415 11.5925 7.0015 12.625 7.0015ZM12.95 17.0015C11.595 17.0015 10.3208 16.6748 9.17498 16.129L11.79 11.8748C12.0575 11.9482 12.335 12.0015 12.625 12.0015C12.9166 12.0015 13.1925 11.949 13.4583 11.874L16.2175 16.3607C15.2075 16.7682 14.11 17.0023 12.95 17.0023V17.0015Z"
  }));
});

exports.SqlRunner = SqlRunner;
SqlRunner.displayName = 'SqlRunner';
const SqlRunnerDimensions = {
  height: 24,
  width: 24
};
exports.SqlRunnerDimensions = SqlRunnerDimensions;
//# sourceMappingURL=SqlRunner.js.map