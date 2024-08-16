"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotesDimensions = exports.Notes = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Notes = _react.default.forwardRef((props, ref) => {
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
    d: "M20 18H14L12 20L10 18H4C2.89543 18 2 17.1046 2 16V6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V16C22 17.1046 21.1046 18 20 18ZM13.1716 16L12 17.1716L10.8284 16H5C4.44771 16 4 15.5523 4 15V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V15C20 15.5523 19.5523 16 19 16H13.1716ZM7.5 9.5C6.80964 9.5 6.25 10.0596 6.25 10.75C6.25 11.4404 6.80964 12 7.5 12C8.19036 12 8.75 11.4404 8.75 10.75C8.75 10.0596 8.19036 9.5 7.5 9.5ZM10.75 10.75C10.75 10.0596 11.3096 9.5 12 9.5C12.6904 9.5 13.25 10.0596 13.25 10.75C13.25 11.4404 12.6904 12 12 12C11.3096 12 10.75 11.4404 10.75 10.75ZM16.5 9.5C15.8096 9.5 15.25 10.0596 15.25 10.75C15.25 11.4404 15.8096 12 16.5 12C17.1904 12 17.75 11.4404 17.75 10.75C17.75 10.0596 17.1904 9.5 16.5 9.5Z"
  }));
});

exports.Notes = Notes;
Notes.displayName = 'Notes';
const NotesDimensions = {
  height: 24,
  width: 24
};
exports.NotesDimensions = NotesDimensions;
//# sourceMappingURL=Notes.js.map