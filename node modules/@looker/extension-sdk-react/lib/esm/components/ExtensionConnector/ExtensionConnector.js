function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import isEqual from 'lodash/isEqual';
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { connectExtensionHost } from '@looker/extension-sdk';
import { ErrorMessage } from '../ErrorMessage';
import { RouteChangeListener } from '../RouteChangeListener';
import { getInitialRouteEntries } from '../utils/get_initial_route_entries';
import { setupClosePopoversListener } from '../utils/setup_close_popovers';
export var ExtensionConnector = _ref => {
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
  var contextDataRef = useRef(contextData);
  var [initialRouteData, setInitialRouteData] = useState();
  var [hostRouteData, setHostRouteData] = useState({
    route: ''
  });
  var [initializing, setInitializing] = useState(true);
  var [initializeError, setInitializeError] = useState();
  useEffect(() => {
    contextDataRef.current = contextData;
  }, [contextData]);
  var setInitialRouteAndRouteState = useCallback((route, routeState) => {
    if (hostTracksRoute) {
      setInitialRouteData({
        route,
        routeState
      });
    }
  }, [hostTracksRoute, setInitialRouteData]);
  var hostChangedRoute = useCallback((_route, routeState) => {
    var route = _route.startsWith('/') ? _route : '/' + _route;
    if (route !== hostRouteData.route || !isEqual(routeState, hostRouteData.routeState)) {
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
  var visualizationDataReceivedCallback = useCallback(visualizationData => {
    updateContextData({
      visualizationData
    });
  }, [updateContextData]);
  var tileHostDataChangedCallback = useCallback(partialHostData => {
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
  useEffect(() => {
    var initialize = function () {
      var _ref2 = _asyncToGenerator(function* () {
        try {
          var extensionHost = yield connectExtensionHost({
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
  useEffect(() => {
    return initializing ? undefined : setupClosePopoversListener(contextData.extensionSDK);
  }, [initializing]);
  return React.createElement(React.Fragment, null, initializing ? loadingComponent : React.createElement(React.Fragment, null, initializeError ? React.createElement(ErrorMessage, {
    errorMessage: initializeError
  }) : React.createElement(React.Fragment, null, hostTracksRoute ? React.createElement(MemoryRouter, {
    initialEntries: getInitialRouteEntries(initialRouteData)
  }, React.createElement(RouteChangeListener, {
    onRouteChange: onRouteChange,
    onPathnameChange: onPathnameChange,
    extensionHost: contextData.extensionSDK,
    hostRoute: hostRouteData.route,
    hostRouteState: hostRouteData.routeState
  }), children) : React.createElement(React.Fragment, null, children))));
};
//# sourceMappingURL=ExtensionConnector.js.map