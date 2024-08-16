"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnlinePredictionDimensions = exports.OnlinePrediction = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var OnlinePrediction = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M15.5 11.5c0 2-2.5 3.5-2.5 5h-2c0-1.5-2.5-3-2.5-5C8.5 9.57 10.07 8 12 8s3.5 1.57 3.5 3.5zm-2.5 6h-2v.5c0 .55.45 1 1 1s1-.45 1-1v-.5zm9-5.5c0-2.46-.89-4.71-2.36-6.45a.759.759 0 0 0-1.12-.06c-.27.27-.3.71-.06 1A8.444 8.444 0 0 1 20.5 12c0 2.1-.77 4.03-2.04 5.52-.25.29-.21.73.06 1 .32.32.83.28 1.12-.06 1.47-1.75 2.36-4 2.36-6.46zM3.5 12c0-2.1.77-4.03 2.04-5.52.25-.29.21-.73-.06-1a.767.767 0 0 0-1.12.06C2.89 7.29 2 9.54 2 12s.89 4.71 2.36 6.46c.29.34.8.38 1.12.06.27-.27.3-.71.06-1A8.49 8.49 0 0 1 3.5 12zm14 0c0 1.28-.44 2.47-1.18 3.41-.23.29-.2.71.07.98.32.32.85.29 1.13-.07A7.05 7.05 0 0 0 19 12c0-1.63-.56-3.13-1.49-4.31a.755.755 0 0 0-1.13-.07c-.26.26-.3.68-.07.98.75.93 1.19 2.12 1.19 3.4zm-9.88 4.38c.26-.26.3-.68.07-.98A5.405 5.405 0 0 1 6.5 12c0-1.28.44-2.47 1.18-3.41.23-.29.2-.71-.07-.98a.76.76 0 0 0-1.12.07A6.996 6.996 0 0 0 5 12c0 1.63.56 3.13 1.49 4.32.28.35.81.38 1.13.06z"
  }));
});
exports.OnlinePrediction = OnlinePrediction;
OnlinePrediction.displayName = 'OnlinePrediction';
var OnlinePredictionDimensions = {
  height: 24,
  width: 24
};
exports.OnlinePredictionDimensions = OnlinePredictionDimensions;