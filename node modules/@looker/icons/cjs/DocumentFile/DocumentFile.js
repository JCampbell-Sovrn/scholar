"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentFileDimensions = exports.DocumentFile = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const DocumentFile = _react.default.forwardRef((props, ref) => {
  const attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return _react.default.createElement(_styledIcon.StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 19 24"
  }, props, {
    ref: ref
  }), _react.default.createElement("g", {
    clipPath: "url(#clip0)"
  }, _react.default.createElement("path", {
    d: "M0.012 2.4C0.012 1.08 1.08 0 2.4 0H12L19.2 7.2V21.6C19.2 22.92 18.12 24 16.8 24H2.388C1.068 24 0 22.92 0 21.6L0.012 2.4V2.4ZM10.8 1.8V8.4H17.4L10.8 1.8V1.8ZM8.523 20.663C9.341 19.861 9.75 18.719 9.75 17.236C9.75 15.859 9.361 14.805 8.583 14.076C7.809 13.347 6.709 12.982 5.283 12.982H2.208V21.866H5.082C6.56 21.866 7.707 21.465 8.521 20.663H8.523ZM6.773 15.511C7.097 15.904 7.259 16.508 7.259 17.322C7.259 18.193 7.089 18.841 6.749 19.266C6.409 19.687 5.874 19.898 5.145 19.898H4.61V14.921H5.309C5.965 14.921 6.453 15.117 6.774 15.51L6.773 15.511ZM16.498 21.046C17.106 20.414 17.409 19.535 17.409 18.409C17.409 17.692 17.267 17.066 16.984 16.531C16.704 15.992 16.306 15.579 15.787 15.291C15.268 15.003 14.671 14.86 13.994 14.86C12.9 14.86 12.05 15.172 11.442 15.796C10.839 16.416 10.537 17.287 10.537 18.409C10.537 19.507 10.845 20.378 11.461 21.022C12.081 21.666 12.913 21.988 13.958 21.988C15.048 21.988 15.894 21.674 16.498 21.046V21.046ZM13.187 19.764C13.029 19.452 12.95 19 12.95 18.409C12.95 17.818 13.029 17.374 13.187 17.078C13.345 16.778 13.606 16.628 13.971 16.628C14.344 16.628 14.607 16.778 14.761 17.078C14.915 17.378 14.992 17.821 14.992 18.409C14.992 19 14.915 19.452 14.761 19.764C14.611 20.072 14.352 20.226 13.983 20.226C13.61 20.226 13.345 20.072 13.187 19.764Z"
  })), _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
    id: "clip0"
  }, _react.default.createElement("rect", {
    width: 19,
    height: 24
  }))));
});

exports.DocumentFile = DocumentFile;
DocumentFile.displayName = 'DocumentFile';
const DocumentFileDimensions = {
  height: 24,
  width: 19
};
exports.DocumentFileDimensions = DocumentFileDimensions;
//# sourceMappingURL=DocumentFile.js.map