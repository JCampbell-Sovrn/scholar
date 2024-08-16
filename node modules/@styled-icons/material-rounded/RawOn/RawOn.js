"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RawOnDimensions = exports.RawOn = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RawOn = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M6.5 9H4c-.55 0-1 .45-1 1v4.31c0 .38.31.69.69.69h.11c.38 0 .69-.31.69-.69V13h1.1l.72 1.59c.12.25.37.41.64.41.5 0 .83-.51.64-.97L7.1 12.9c.5-.3.9-.8.9-1.4v-1C8 9.68 7.32 9 6.5 9zm0 2.5h-2v-1h2v1zm5-2.5c-.73 0-1.37.5-1.55 1.21l-.97 3.89c-.12.46.23.9.7.9.33 0 .62-.23.7-.55l.24-.95h1.75l.23.95a.73.73 0 0 0 1.42-.35l-.97-3.88C12.87 9.5 12.23 9 11.5 9zm-.5 3 .25-1h.5l.25 1h-1zm8.84-2.45-.6 2.45-.56-2.26a.954.954 0 0 0-.94-.74c-.45 0-.84.3-.94.74L16.24 12l-.6-2.45a.73.73 0 0 0-1.42.35l1.09 4.38c.12.42.5.72.93.72.43 0 .81-.3.92-.72l.58-2.32.58 2.32c.11.42.49.72.92.72.43 0 .81-.3.92-.72l1.09-4.38a.72.72 0 0 0-.7-.9.73.73 0 0 0-.71.55z"
  }));
});
exports.RawOn = RawOn;
RawOn.displayName = 'RawOn';
var RawOnDimensions = {
  height: 24,
  width: 24
};
exports.RawOnDimensions = RawOnDimensions;