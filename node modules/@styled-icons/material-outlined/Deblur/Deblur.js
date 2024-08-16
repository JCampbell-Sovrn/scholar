"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeblurDimensions = exports.Deblur = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Deblur = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 14,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 18,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 10,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 3,
    cy: 10,
    r: .5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 6,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 3,
    cy: 14,
    r: .5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 21,
    r: .5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 3,
    r: .5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 6,
    r: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 14,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 10,
    r: 1.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 10,
    cy: 18,
    r: 1
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v2c3.86 0 7 3.14 7 7s-3.14 7-7 7v2c4.96 0 9-4.04 9-9s-4.04-9-9-9z"
  }));
});
exports.Deblur = Deblur;
Deblur.displayName = 'Deblur';
var DeblurDimensions = {
  height: 24,
  width: 24
};
exports.DeblurDimensions = DeblurDimensions;