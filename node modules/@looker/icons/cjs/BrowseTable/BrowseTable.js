"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrowseTableDimensions = exports.BrowseTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const BrowseTable = _react.default.forwardRef((props, ref) => {
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
    d: "M5 5H9V9H5V5ZM3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM5 15H9V19H5V15ZM3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM13 4H21V6H13V4ZM21 8H13V10H21V8ZM13 14H21V16H13V14ZM21 18H13V20H21V18Z"
  }));
});

exports.BrowseTable = BrowseTable;
BrowseTable.displayName = 'BrowseTable';
const BrowseTableDimensions = {
  height: 24,
  width: 24
};
exports.BrowseTableDimensions = BrowseTableDimensions;
//# sourceMappingURL=BrowseTable.js.map