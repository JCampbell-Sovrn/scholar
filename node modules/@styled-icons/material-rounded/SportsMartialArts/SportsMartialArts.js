"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SportsMartialArtsDimensions = exports.SportsMartialArts = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SportsMartialArts = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M19.06 2.6 11.6 8.7l-1.21-1.04 2.48-1.43a1 1 0 0 0 .21-1.57l-2.95-2.95a.996.996 0 1 0-1.41 1.41l2.03 2.03-5.4 3.11a.99.99 0 0 0-.46.6l-.96 3.49c-.07.26-.04.53.1.77l1.74 3.02c.28.48.89.64 1.37.37.48-.28.64-.89.37-1.37l-1.53-2.66.36-1.29L9.5 13l.44 8c.03.56.49 1 1.05 1s1.02-.44 1.05-1l.45-9 7.87-7.96a.972.972 0 0 0-1.3-1.44z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5,
    cy: 5,
    r: 2
  }));
});
exports.SportsMartialArts = SportsMartialArts;
SportsMartialArts.displayName = 'SportsMartialArts';
var SportsMartialArtsDimensions = {
  height: 24,
  width: 24
};
exports.SportsMartialArtsDimensions = SportsMartialArtsDimensions;