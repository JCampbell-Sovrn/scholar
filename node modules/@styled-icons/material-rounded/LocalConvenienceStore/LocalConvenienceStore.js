"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocalConvenienceStoreDimensions = exports.LocalConvenienceStore = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var LocalConvenienceStore = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "m21.9 7.89-1.05-3.37c-.22-.9-1-1.52-1.91-1.52H5.05c-.9 0-1.69.63-1.9 1.52L2.1 7.89c-.46 1.97.85 3.11.9 3.17V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7.94c1.12-1.12 1.09-2.41.9-3.17zM13 5h1.96l.54 3.52c.09.71-.39 1.48-1.28 1.48-.67 0-1.22-.59-1.22-1.31V5zM6.44 8.86c-.08.65-.6 1.14-1.21 1.14-.93 0-1.35-.97-1.19-1.64L5.05 5h1.97l-.58 3.86zM10.5 16H9v1h1.5c.28 0 .5.22.5.5s-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5H10v-1H8.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h2c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5zm.5-7.31c0 .72-.55 1.31-1.29 1.31-.75 0-1.3-.7-1.22-1.48L9.04 5H11v3.69zM15.5 18c-.28 0-.5-.22-.5-.5V16h-1.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5s.5.22.5.5V15h1v-1.5c0-.28.22-.5.5-.5s.5.22.5.5v4c0 .28-.22.5-.5.5zm3.27-8c-.61 0-1.14-.49-1.21-1.14L16.98 5l1.93-.01 1.05 3.37c.16.67-.25 1.64-1.19 1.64z"
  }));
});
exports.LocalConvenienceStore = LocalConvenienceStore;
LocalConvenienceStore.displayName = 'LocalConvenienceStore';
var LocalConvenienceStoreDimensions = {
  height: 24,
  width: 24
};
exports.LocalConvenienceStoreDimensions = LocalConvenienceStoreDimensions;