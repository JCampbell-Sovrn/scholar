"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExtensionConnector = void 0;
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _extensionSdk = require("@looker/extension-sdk");
var _ErrorMessage = require("../ErrorMessage");
var _RouteChangeListener = require("../RouteChangeListener");
var _get_initial_route_entries = require("../utils/get_initial_route_entries");
var _setup_close_popovers = require("../utils/setup_close_popovers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var ExtensionConnector = _ref => {
  var {
    contextData,
    updateContextData,
    connectedCallback,
    unloadedCallback,
    onPathnameChange,
    onRouteChange,
    hostTracksRoute = true,
    loadingComponent,
    requiredLookerVersion,
    chattyTimeout,
    children
  } = _ref;
  var contextDataRef = (0, _react.useRef)(contextData);
  var [initialRouteData, setInitialRouteData] = (0, _react.useState)();
  var [hostRouteData, setHostRouteData] = (0, _react.useState)({
    route: ''
  });
  var [initializing, setInitializing] = (0, _react.useState)(true);
  var [initializeError, setInitializeError] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    contextDataRef.current = contextData;
  }, [contextData]);
  var setInitialRouteAndRouteState = (0, _react.useCallback)((route, routeState) => {
    if (hostTracksRoute) {
      setInitialRouteData({
        route,
        routeState
      });
    }
  }, [hostTracksRoute, setInitialRouteData]);
  var hostChangedRoute = (0, _react.useCallback)((_route, routeState) => {
    var route = _route.startsWith('/') ? _route : '/' + _route;
    if (route !== hostRouteData.route || !(0, _isEqual.default)(routeState, hostRouteData.routeState)) {
      setHostRouteData({
        route,
        routeState
      });
      updateContextData({
        route,
        routeState
      });
    }
  }, [setHostRouteData, updateContextData]);
  var visualizationDataReceivedCallback = (0, _react.useCallback)(visualizationData => {
    updateContextData({
      visualizationData
    });
  }, [updateContextData]);
  var tileHostDataChangedCallback = (0, _react.useCallback)(partialHostData => {
    if (contextDataRef.current.tileSDK) {
      var {
        tileSDK
      } = contextDataRef.current;
      tileSDK.tileHostDataChanged(partialHostData);
      updateContextData({
        tileHostData: tileSDK.tileHostData
      });
    }
  }, [updateContextData]);
  (0, _react.useEffect)(() => {
    var initialize = function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          var extensionHost = yield (0, _extensionSdk.connectExtensionHost)({
            setInitialRoute: setInitialRouteAndRouteState,
            requiredLookerVersion,
            hostChangedRoute,
            chattyTimeout,
            visualizationDataReceivedCallback,
            tileHostDataChangedCallback
          });
          connectedCallback(extensionHost);
          setInitializing(false);
        } catch (error) {
          console.error(error);
          setInitializeError(error.message || 'Extension failed to initialize.');
          setInitializing(false);
        }
      });
      return function initialize() {
        return _ref2.apply(this, arguments);
      };
    }();
    initialize();
    return () => {
      unloadedCallback();
    };
  }, []);
  (0, _react.useEffect)(() => {
    return initializing ? undefined : (0, _setup_close_popovers.setupClosePopoversListener)(contextData.extensionSDK);
  }, [initializing]);
  return _react.default.createElement(_react.default.Fragment, null, initializing ? loadingComponent : _react.default.createElement(_react.default.Fragment, null, initializeError ? _react.default.createElement(_ErrorMessage.ErrorMessage, {
    errorMessage: initializeError
  }) : _react.default.createElement(_react.default.Fragment, null, hostTracksRoute ? _react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: (0, _get_initial_route_entries.getInitialRouteEntries)(initialRouteData)
  }, _react.default.createElement(_RouteChangeListener.RouteChangeListener, {
    onRouteChange: onRouteChange,
    onPathnameChange: onPathnameChange,
    extensionHost: contextData.extensionSDK,
    hostRoute: hostRouteData.route,
    hostRouteState: hostRouteData.routeState
  }), children) : _react.default.createElement(_react.default.Fragment, null, children))));
};
exports.ExtensionConnector = ExtensionConnector;
//# sourceMappingURL=ExtensionConnector.js.map