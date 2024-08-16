"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisScatterDimensions = exports.VisScatter = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledIcon = require("@styled-icons/styled-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const VisScatter = _react.default.forwardRef((props, ref) => {
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
    d: "M13.5328 8.93563C13.5328 9.78163 12.8468 10.4676 12.0008 10.4676C11.1548 10.4676 10.4688 9.78163 10.4688 8.93563C10.4688 8.08963 11.1548 7.40363 12.0008 7.40363C12.8468 7.40363 13.5328 8.08963 13.5328 8.93563Z"
  }), _react.default.createElement("path", {
    d: "M18.1271 14.8087C18.1271 16.36 16.8698 17.6173 15.3184 17.6173C13.7671 17.6173 12.5098 16.36 12.5098 14.8087C12.5098 13.2573 13.7671 12 15.3184 12C16.8698 12 18.1271 13.2573 18.1271 14.8087Z"
  }), _react.default.createElement("path", {
    d: "M8.93618 15.8301C8.93618 16.2528 8.59351 16.5961 8.17018 16.5961C7.74751 16.5961 7.40417 16.2534 7.40417 15.8301C7.40417 15.4074 7.74684 15.0641 8.17018 15.0641C8.59284 15.0641 8.93618 15.4068 8.93618 15.8301Z"
  }), _react.default.createElement("path", {
    d: "M8.25547 10.8088C8.25547 11.4668 7.72214 12.0001 7.06414 12.0001C6.40614 12.0001 5.8728 11.4668 5.8728 10.8088C5.8728 10.1508 6.40614 9.61743 7.06414 9.61743C7.72214 9.61743 8.25547 10.1508 8.25547 10.8088Z"
  }), _react.default.createElement("path", {
    d: "M19.9159 19.9147H4.08594V4.08466H19.9159V19.9147ZM4.59727 19.404H19.4059V4.59532H4.59727V19.404Z"
  }));
});

exports.VisScatter = VisScatter;
VisScatter.displayName = 'VisScatter';
const VisScatterDimensions = {
  height: 24,
  width: 24
};
exports.VisScatterDimensions = VisScatterDimensions;
//# sourceMappingURL=VisScatter.js.map