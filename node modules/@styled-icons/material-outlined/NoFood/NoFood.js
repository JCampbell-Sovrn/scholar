"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoFoodDimensions = exports.NoFood = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var NoFood = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M1 21h15.01v.98c0 .56-.45 1.01-1.01 1.01H2.01c-.56 0-1.01-.45-1.01-1.01V21zm19.49 2.31L16 18.83V19H1v-2h13.17l-2-2H1c0-3.24 2.46-5.17 5.38-5.79l-5.7-5.7L2.1 2.1 13 13l2 2 6.9 6.9-1.41 1.41zM10.17 13l-2-2c-1.42.06-3.52.56-4.55 2h6.55zM23 5h-5V1h-2v4h-5l.23 2h9.56l-1 9.97 1.83 1.83L23 5z"
  }));
});
exports.NoFood = NoFood;
NoFood.displayName = 'NoFood';
var NoFoodDimensions = {
  height: 24,
  width: 24
};
exports.NoFoodDimensions = NoFoodDimensions;