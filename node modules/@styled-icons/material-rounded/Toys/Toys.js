"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToysDimensions = exports.Toys = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Toys = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 14c0-1.95-1.4-3.57-3.25-3.92L17.4 6.05A2.978 2.978 0 0 0 14.56 4H9.44C8.15 4 7 4.82 6.6 6.05L5.81 8.4 4.41 7l.29-.29A.996.996 0 1 0 3.29 5.3l-2 2A.996.996 0 1 0 2.7 8.71l.3-.3 1.79 1.79C3.18 10.72 2 12.22 2 14c0 1.5.83 2.79 2.05 3.48A3 3 0 0 0 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2a3 3 0 0 0 2.95-2.52C21.17 16.79 22 15.5 22 14zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-8H7.41l-.02-.02 1.1-3.3A1 1 0 0 1 9.44 6H11v4zm2-4h1.56a1 1 0 0 1 .95.68l1.1 3.32H13V6zm4 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
  }));
});
exports.Toys = Toys;
Toys.displayName = 'Toys';
var ToysDimensions = {
  height: 24,
  width: 24
};
exports.ToysDimensions = ToysDimensions;