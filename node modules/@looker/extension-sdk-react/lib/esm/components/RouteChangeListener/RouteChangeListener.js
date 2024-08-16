import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import clone from 'lodash/clone';
export var RouteChangeListener = _ref => {
  var {
    onPathnameChange,
    onRouteChange,
    extensionHost,
    hostRoute,
    hostRouteState
  } = _ref;
  var history = useHistory();
  var location = useLocation();
  useEffect(() => {
    if (onPathnameChange) {
      onPathnameChange(location.pathname);
    }
    if (onRouteChange) {
      onRouteChange(location.pathname + location.search, clone(location.state));
    }
    ;
    extensionHost.clientRouteChanged(location.pathname + location.search, location.state);
  }, [location]);
  useEffect(() => {
    if (hostRoute) {
      history.push(hostRoute, hostRouteState);
    }
  }, [hostRoute]);
  return React.createElement(React.Fragment, null);
};
//# sourceMappingURL=RouteChangeListener.js.map