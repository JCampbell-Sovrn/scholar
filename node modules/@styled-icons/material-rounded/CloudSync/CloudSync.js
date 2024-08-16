"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CloudSyncDimensions = exports.CloudSync = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _styledIcon = require("@styled-icons/styled-icon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var CloudSync = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M24 17.48a2.5 2.5 0 0 1-2.5 2.5L15 20c-1.66 0-3-1.34-3-3 0-1.6 1.26-2.9 2.84-2.98A3.495 3.495 0 0 1 18 12c1.76 0 3.2 1.3 3.45 2.99.02 0 .03-.01.05-.01a2.5 2.5 0 0 1 2.5 2.5zM10 15c0-.55-.45-1-1-1s-1 .45-1 1v1.44c-1.22-1.1-2-2.67-2-4.44 0-2.38 1.39-4.43 3.4-5.4.37-.18.6-.56.6-.97 0-.71-.73-1.18-1.37-.88C5.89 6.03 4 8.79 4 12c0 2.4 1.06 4.54 2.73 6H5c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1v-4zm9-9c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7.56c.98.89 1.68 2.08 1.92 3.44h2.02a7.98 7.98 0 0 0-2.66-5H19z"
  }));
});
exports.CloudSync = CloudSync;
CloudSync.displayName = 'CloudSync';
var CloudSyncDimensions = {
  height: 24,
  width: 24
};
exports.CloudSyncDimensions = CloudSyncDimensions;