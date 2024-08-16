"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebhookDimensions = exports.Webhook = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var Webhook = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M2 16c0-1.84 1-3.45 2.48-4.32.67-.39 1.52.08 1.52.86 0 .36-.19.68-.5.86-.9.52-1.5 1.49-1.5 2.6 0 1.85 1.68 3.31 3.6 2.94 1.42-.28 2.4-1.61 2.4-3.06 0-.49.39-.88.88-.88h5c.27-.31.67-.5 1.12-.5.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.44 0-.84-.19-1.12-.5H11.9A5 5 0 0 1 2 16zm14.37-9c.65 0 1.14-.62.97-1.25A4.99 4.99 0 0 0 12.5 2a5.002 5.002 0 0 0-3.45 8.62l-2.35 3.9c-.68.14-1.2.75-1.2 1.48 0 .83.67 1.5 1.5 1.5a1.498 1.498 0 0 0 1.43-1.95l2.86-4.75c.25-.41.13-.95-.28-1.19-.9-.53-1.51-1.5-1.51-2.61 0-1.65 1.35-3 3-3 1.38 0 2.54.93 2.89 2.2.13.46.51.8.98.8zm.63 6c-.38 0-.75.07-1.09.2-.4.16-.86-.04-1.08-.41l-2.6-4.32C11.53 8.35 11 7.74 11 7c0-.83.67-1.5 1.5-1.5S14 6.17 14 7c0 .15-.02.29-.06.43l2.19 3.65c.28-.05.57-.08.87-.08 2.76 0 5 2.24 5 5s-2.24 5-5 5c-.86 0-1.68-.22-2.39-.61-.92-.5-.58-1.89.47-1.89.17 0 .34.05.49.14.42.23.91.36 1.43.36 1.65 0 3-1.35 3-3s-1.35-3-3-3z"
  }));
});
exports.Webhook = Webhook;
Webhook.displayName = 'Webhook';
var WebhookDimensions = {
  height: 24,
  width: 24
};
exports.WebhookDimensions = WebhookDimensions;