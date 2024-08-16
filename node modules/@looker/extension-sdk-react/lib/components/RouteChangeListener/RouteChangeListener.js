"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteChangeListener = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _clone = _interopRequireDefault(require("lodash/clone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var RouteChangeListener = _ref => {
  var {
    onPathnameChange,
    onRouteChange,
    extensionHost,
    hostRoute,
    hostRouteState
  } = _ref;
  var history = (0, _reactRouterDom.useHistory)();
  var location = (0, _reactRouterDom.useLocation)();
  (0, _react.useEffect)(() => {
    if (onPathnameChange) {
      onPathnameChange(location.pathname);
    }
    if (onRouteChange) {
      onRouteChange(location.pathname + location.search, (0, _clone.default)(location.state));
    }
    ;
    extensionHost.clientRouteChanged(location.pathname + location.search, location.state);
  }, [location]);
  (0, _react.useEffect)(() => {
    if (hostRoute) {
      history.push(hostRoute, hostRouteState);
    }
  }, [hostRoute]);
  return _react.default.createElement(_react.default.Fragment, null);
};
exports.RouteChangeListener = RouteChangeListener;
//# sourceMappingURL=RouteChangeListener.js.map