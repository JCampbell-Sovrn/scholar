"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PublicDimensions = exports.Public = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Public = _react.default.forwardRef((props, ref) => {
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
  }), _react.default.createElement("g", {
    clipPath: "url(#clip0)"
  }, _react.default.createElement("path", {
    d: "M23.974 11.248C23.587 4.97105 18.375 -0.00195312 12 -0.00195312C5.625 -0.00195312 0.413 4.97105 0.026 11.248H0V12.748H0.026C0.413 19.025 5.625 23.997 12 23.997C18.375 23.997 23.587 19.025 23.974 12.748H24V11.248H23.974ZM20.031 5.24805H18.694C17.9 5.46905 16.932 5.65005 15.847 5.77905C15.475 4.14505 14.961 2.76605 14.35 1.76505C16.611 2.28205 18.589 3.53205 20.03 5.24705L20.031 5.24805ZM9.008 12.748H14.991C14.963 14.13 14.859 15.438 14.692 16.621C13.831 16.542 12.931 16.498 11.999 16.498C11.067 16.498 10.167 16.542 9.306 16.621C9.14 15.438 9.035 14.13 9.007 12.748H9.008ZM9.008 11.248C9.036 9.86405 9.141 8.55505 9.307 7.37105C10.167 7.45205 11.068 7.49805 12 7.49805C12.932 7.49805 13.833 7.45205 14.692 7.37105C14.858 8.55505 14.963 9.86405 14.991 11.248H9.008ZM12 1.49805C13.008 1.49805 13.899 3.24005 14.443 5.91005C13.665 5.96505 12.849 5.99805 12 5.99805C11.151 5.99805 10.335 5.96505 9.557 5.91005C10.1 3.24005 10.991 1.49805 12 1.49805V1.49805ZM9.648 1.76605C9.037 2.76705 8.523 4.14505 8.151 5.78005C7.067 5.65105 6.098 5.47005 5.304 5.24905H3.967C5.409 3.53405 7.387 2.28405 9.648 1.76605V1.76605ZM3.449 5.92105C4.562 6.47905 6.092 6.92305 7.877 7.19605C7.671 8.45005 7.542 9.81505 7.509 11.249H1.532C1.672 9.27005 2.364 7.44505 3.449 5.92105V5.92105ZM7.509 12.748C7.542 14.179 7.671 15.54 7.876 16.792C6.09 17.057 4.551 17.487 3.418 18.03C2.352 16.514 1.671 14.707 1.533 12.748H7.51H7.509ZM3.968 18.748H5.207C6.026 18.523 7.027 18.339 8.15 18.209C8.522 19.847 9.037 21.229 9.649 22.231C7.388 21.714 5.41 20.464 3.968 18.748V18.748ZM12 22.498C10.992 22.498 10.1 20.754 9.556 18.082C10.335 18.028 11.151 17.997 12 17.997C12.849 17.997 13.665 18.029 14.444 18.082C13.901 20.754 13.009 22.498 12 22.498ZM14.35 22.231C14.962 21.229 15.477 19.847 15.849 18.21C16.972 18.34 17.973 18.524 18.792 18.749H20.031C18.589 20.464 16.611 21.714 14.35 22.231V22.231ZM20.581 18.03C19.448 17.487 17.909 17.057 16.123 16.793C16.328 15.541 16.457 14.18 16.49 12.749H22.467C22.328 14.708 21.648 16.515 20.581 18.03V18.03ZM16.49 11.248C16.457 9.81305 16.328 8.44905 16.122 7.19505C17.907 6.92205 19.437 6.47805 20.55 5.92005C21.635 7.44505 22.326 9.26905 22.467 11.248H16.49V11.248Z"
  })), _react.default.createElement("defs", null, _react.default.createElement("clipPath", {
    id: "clip0"
  }, _react.default.createElement("rect", {
    width: 24,
    height: 24
  }))));
});

exports.Public = Public;
Public.displayName = 'Public';
const PublicDimensions = {
  height: 24,
  width: 24
};
exports.PublicDimensions = PublicDimensions;
//# sourceMappingURL=Public.js.map