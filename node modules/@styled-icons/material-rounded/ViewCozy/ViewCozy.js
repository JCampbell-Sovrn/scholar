"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ViewCozyDimensions = exports.ViewCozy = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ViewCozy = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-9.25 12.75h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5zm0-5.5h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5zm5.5 5.5h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5zm0-5.5h-3c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5z"
  }));
});
exports.ViewCozy = ViewCozy;
ViewCozy.displayName = 'ViewCozy';
var ViewCozyDimensions = {
  height: 24,
  width: 24
};
exports.ViewCozyDimensions = ViewCozyDimensions;