function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import intersects from 'semver/ranges/intersects';
import { logError } from '../util';
import { VisualizationSDKImpl } from './visualization/visualization_sdk';
import { TileSDKImpl } from './tile/tile_sdk';
import { FetchProxyImpl } from './fetch_proxy';
import { ExtensionEvent, ExtensionNotificationType, ExtensionRequestType, MountPoint } from './types';
export var EXTENSION_SDK_VERSION = '0.10.5';
export class ExtensionHostApiImpl {
  constructor(configuration) {
    _defineProperty(this, "_configuration", void 0);
    _defineProperty(this, "_lookerHostData", void 0);
    _defineProperty(this, "chattyHost", void 0);
    _defineProperty(this, "setInitialRoute", void 0);
    _defineProperty(this, "hostChangedRoute", void 0);
    _defineProperty(this, "visualizationDataReceivedCallback", void 0);
    _defineProperty(this, "tileHostDataChangedCallback", void 0);
    _defineProperty(this, "_visualizationSDK", void 0);
    _defineProperty(this, "_tileSDK", void 0);
    _defineProperty(this, "contextData", void 0);
    this._configuration = configuration;
    var {
      chattyHost,
      setInitialRoute,
      hostChangedRoute,
      visualizationDataReceivedCallback,
      tileHostDataChangedCallback
    } = this._configuration;
    this.chattyHost = chattyHost;
    this.setInitialRoute = setInitialRoute;
    this.hostChangedRoute = hostChangedRoute;
    this.visualizationDataReceivedCallback = visualizationDataReceivedCallback;
    this.tileHostDataChangedCallback = tileHostDataChangedCallback;
  }
  get isDashboardMountSupported() {
    var _this$_lookerHostData, _this$lookerHostData, _this$lookerHostData2, _this$lookerHostData3;
    return !!((_this$_lookerHostData = this._lookerHostData) !== null && _this$_lookerHostData !== void 0 && _this$_lookerHostData.extensionDashboardTileEnabled) && (((_this$lookerHostData = this.lookerHostData) === null || _this$lookerHostData === void 0 ? void 0 : _this$lookerHostData.mountPoint) === MountPoint.dashboardTile || ((_this$lookerHostData2 = this.lookerHostData) === null || _this$lookerHostData2 === void 0 ? void 0 : _this$lookerHostData2.mountPoint) === MountPoint.dashboardVisualization || ((_this$lookerHostData3 = this.lookerHostData) === null || _this$lookerHostData3 === void 0 ? void 0 : _this$lookerHostData3.mountPoint) === MountPoint.dashboardTilePopup);
  }
  get visualizationSDK() {
    if (!this._visualizationSDK) {
      this._visualizationSDK = new VisualizationSDKImpl(this);
    }
    return this._visualizationSDK;
  }
  get tileSDK() {
    if (!this._tileSDK) {
      this._tileSDK = new TileSDKImpl(this);
    }
    return this._tileSDK;
  }
  get lookerHostData() {
    return this._lookerHostData;
  }
  handleNotification(message) {
    var {
      type
    } = message;
    switch (type) {
      case ExtensionNotificationType.ROUTE_CHANGED:
        {
          var {
            payload
          } = message;
          if (this.hostChangedRoute && payload) {
            var {
              route: _route,
              routeState: _routeState
            } = payload;
            if (_route) {
              this.hostChangedRoute(_route, _routeState);
            }
          }
          return undefined;
        }
      case ExtensionNotificationType.VISUALIZATION_DATA:
        {
          var {
            payload: _payload
          } = message;
          this.visualizationSDK.updateVisData(_payload);
          if (this.visualizationDataReceivedCallback) {
            this.visualizationDataReceivedCallback(_payload);
          }
          return undefined;
        }
      case ExtensionNotificationType.TILE_HOST_DATA:
        {
          var {
            payload: _payload2
          } = message;
          this.tileSDK.tileHostDataChanged(_payload2);
          if (this.tileHostDataChangedCallback) {
            this.tileHostDataChangedCallback(_payload2);
          }
          return undefined;
        }
      case ExtensionNotificationType.INITIALIZE:
        {
          var {
            payload: _payload3
          } = message;
          var lookerHostData = _payload3 || {};
          if (!lookerHostData.mountPoint) {
            lookerHostData.mountPoint = MountPoint.standalone;
          }
          this._lookerHostData = lookerHostData;
          this.contextData = lookerHostData.contextData;
          var errorMessage;
          if (this._configuration.requiredLookerVersion && lookerHostData.lookerVersion) {
            errorMessage = this.verifyLookerVersion(this._configuration.requiredLookerVersion);
            if (errorMessage) {
              logError(errorMessage);
            }
          }
          if (this.setInitialRoute && _payload3) {
            var {
              route: _route2,
              routeState: _routeState2
            } = _payload3;
            if (_route2) {
              this.setInitialRoute(_route2, _routeState2);
            }
          }
          return {
            extensionSdkVersion: EXTENSION_SDK_VERSION,
            errorMessage
          };
        }
      default:
        logError('Unrecognized extension notification', message);
        throw new Error("Unrecognized extension notification type ".concat(type));
    }
  }
  createSecretKeyTag(keyName) {
    var errorMessage = this.verifyLookerVersion('>=7.11');
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    if (!keyName.match(/^[A-Za-z0-9_.]+$/)) {
      throw new Error('Unsupported characters in key name');
    }
    return "{{".concat(this._lookerHostData.extensionId.replace(/::|-/g, '_'), "_").concat(keyName, "}}");
  }
  verifyHostConnection() {
    var _this = this;
    return _asyncToGenerator(function* () {
      return _this.sendAndReceive(ExtensionRequestType.VERIFY_HOST);
    })();
  }
  invokeCoreSdk(httpMethod, path, params, body, authenticator, options, apiVersion) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      return _this2.sendAndReceive(ExtensionRequestType.INVOKE_CORE_SDK, {
        httpMethod,
        path,
        params,
        body,
        authenticator,
        options,
        apiVersion
      });
    })();
  }
  invokeCoreSdkRaw(httpMethod, path, params, body, apiVersion) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      return _this3.sendAndReceive(ExtensionRequestType.RAW_INVOKE_CORE_SDK, {
        httpMethod,
        path,
        params,
        body,
        apiVersion
      });
    })();
  }
  updateTitle(title) {
    this.send(ExtensionRequestType.UPDATE_TITLE, {
      title
    });
  }
  updateLocation(url, state, target) {
    this.send(ExtensionRequestType.UPDATE_LOCATION, {
      url,
      state,
      target
    });
  }
  spartanLogout() {
    this.send(ExtensionRequestType.SPARTAN_LOGOUT);
  }
  openBrowserWindow(url, target) {
    this.send(ExtensionRequestType.UPDATE_LOCATION, {
      url,
      undefined,
      target: target || '_blank'
    });
  }
  closeHostPopovers() {
    this.send(ExtensionRequestType.CLOSE_HOST_POPOVERS);
  }
  clientRouteChanged(route, routeState) {
    this.send(ExtensionRequestType.ROUTE_CHANGED, {
      route,
      routeState
    });
  }
  localStorageSetItem(name) {
    var _arguments = arguments,
      _this4 = this;
    return _asyncToGenerator(function* () {
      var value = _arguments.length > 1 && _arguments[1] !== undefined ? _arguments[1] : '';
      if (_this4._lookerHostData && !_this4._lookerHostData.lookerVersion) {
        return Promise.reject(new Error('localStorageSetItem not supported by the current Looker host'));
      }
      return _this4.sendAndReceive(ExtensionRequestType.LOCAL_STORAGE, {
        type: 'set',
        name,
        value
      });
    })();
  }
  localStorageGetItem(name) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      if (_this5._lookerHostData && !_this5._lookerHostData.lookerVersion) {
        return Promise.reject(new Error('localStorageGetItem not supported by the current Looker host'));
      }
      return _this5.sendAndReceive(ExtensionRequestType.LOCAL_STORAGE, {
        type: 'get',
        name
      });
    })();
  }
  localStorageRemoveItem(name) {
    var _this6 = this;
    return _asyncToGenerator(function* () {
      if (_this6._lookerHostData && !_this6._lookerHostData.lookerVersion) {
        return Promise.reject(new Error('localStorageRemoveItem not supported by the current Looker host'));
      }
      return _this6.sendAndReceive(ExtensionRequestType.LOCAL_STORAGE, {
        type: 'remove',
        name
      });
    })();
  }
  clipboardWrite(value) {
    var _this7 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this7.verifyLookerVersion('>=21.7');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this7.sendAndReceive(ExtensionRequestType.CLIPBOARD, {
        type: 'write',
        value
      });
    })();
  }
  userAttributeSetItem(name) {
    var _arguments2 = arguments,
      _this8 = this;
    return _asyncToGenerator(function* () {
      var value = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : '';
      var errorMessage = _this8.verifyLookerVersion('>=7.15');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this8.sendAndReceive(ExtensionRequestType.USER_ATTRIBUTE, {
        type: 'set',
        name,
        value
      });
    })();
  }
  userAttributeGetItem(name) {
    var _this9 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this9.verifyLookerVersion('>=7.15');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this9.sendAndReceive(ExtensionRequestType.USER_ATTRIBUTE, {
        type: 'get',
        name
      });
    })();
  }
  userAttributeResetItem(name) {
    var _this10 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this10.verifyLookerVersion('>=7.15');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this10.sendAndReceive(ExtensionRequestType.USER_ATTRIBUTE, {
        type: 'reset',
        name
      });
    })();
  }
  getContextData() {
    var errorMessage = this.verifyLookerVersion('>=7.13');
    if (errorMessage) {
      throw new Error(errorMessage);
    }
    if (this.contextData) {
      return JSON.parse(this.contextData);
    } else {
      return undefined;
    }
  }
  saveContextData(context) {
    var _this11 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this11.verifyLookerVersion('>=7.13');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      var contextData;
      if (context) {
        try {
          contextData = JSON.stringify(context);
        } catch (err) {
          return Promise.reject(new Error('context cannot be serialized'));
        }
      } else {
        contextData = undefined;
      }
      yield _this11.sendAndReceive(ExtensionRequestType.CONTEXT_DATA, {
        type: 'save',
        contextData
      });
      return _this11.getContextData();
    })();
  }
  refreshContextData() {
    var _this12 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this12.verifyLookerVersion('>=7.13');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      _this12.contextData = yield _this12.sendAndReceive(ExtensionRequestType.CONTEXT_DATA, {
        type: 'refresh'
      });
      return _this12.getContextData();
    })();
  }
  track(name, trackAction, attributes) {
    this.send(ExtensionRequestType.TRACK_ACTION, {
      name,
      trackAction,
      attributes
    });
  }
  error(errorEvent) {
    if (this._lookerHostData) {
      var {
        message,
        filename,
        lineno,
        colno,
        error
      } = errorEvent || {};
      this.send(ExtensionRequestType.ERROR_EVENT, {
        message,
        filename,
        lineno,
        colno,
        error: error && error.toString ? error.toString() : error
      });
    } else {
      logError('Unhandled error but Looker host connection not established', errorEvent);
    }
  }
  unloaded() {
    this.send(ExtensionRequestType.EXTENSION_UNLOADED, {});
  }
  createFetchProxy(baseUrl, init, responseBodyType) {
    return new FetchProxyImpl(this, baseUrl, init, responseBodyType);
  }
  fetchProxy(resource, init, responseBodyType) {
    var _this13 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this13.verifyLookerVersion('>=7.9');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this13.sendAndReceive(ExtensionRequestType.INVOKE_EXTERNAL_API, {
        type: 'fetch',
        payload: {
          resource,
          init,
          responseBodyType
        }
      });
    })();
  }
  serverProxy(resource, init, responseBodyType) {
    var _this14 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this14.verifyLookerVersion('>=7.11');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this14.sendAndReceive(ExtensionRequestType.INVOKE_EXTERNAL_API, {
        type: 'server-proxy',
        payload: {
          resource,
          init,
          responseBodyType
        }
      });
    })();
  }
  oauth2Authenticate(authEndpoint, authParameters) {
    var _arguments3 = arguments,
      _this15 = this;
    return _asyncToGenerator(function* () {
      var httpMethod = _arguments3.length > 2 && _arguments3[2] !== undefined ? _arguments3[2] : 'POST';
      var errorMessage = _this15.verifyLookerVersion('>=7.9');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      errorMessage = _this15.validateAuthParameters(authParameters);
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this15.sendAndReceive(ExtensionRequestType.INVOKE_EXTERNAL_API, {
        type: 'oauth2_authenticate',
        payload: {
          authEndpoint,
          authParameters,
          httpMethod
        }
      }, {
        signal: new AbortController().signal
      });
    })();
  }
  oauth2ExchangeCodeForToken(authEndpoint, authParameters) {
    var _this16 = this;
    return _asyncToGenerator(function* () {
      var errorMessage = _this16.verifyLookerVersion('>=7.11');
      if (errorMessage) {
        return Promise.reject(new Error(errorMessage));
      }
      return _this16.sendAndReceive(ExtensionRequestType.INVOKE_EXTERNAL_API, {
        type: 'oauth2_exchange_code',
        payload: {
          authEndpoint,
          authParameters
        }
      });
    })();
  }
  rendered(failureMessage) {
    this.send(ExtensionRequestType.RENDERED, {
      failureMessage
    });
  }
  sendAndReceive(type, payload, options) {
    var _this17 = this;
    return _asyncToGenerator(function* () {
      if (!_this17._lookerHostData) {
        return Promise.reject(new Error('Looker host connection not established'));
      }
      var messagePayload = {
        type,
        payload
      };
      var chattyPayload = options ? [messagePayload, options] : [messagePayload];
      return _this17.chattyHost.sendAndReceive(ExtensionEvent.EXTENSION_API_REQUEST, ...chattyPayload).then(values => values[0]);
    })();
  }
  send(type, payload) {
    if (!this._lookerHostData) {
      throw new Error('Looker host connection not established');
    }
    this.chattyHost.send(ExtensionEvent.EXTENSION_API_REQUEST, {
      type,
      payload
    });
  }
  verifyLookerVersion(version) {
    var lookerVersion = this._lookerHostData ? this._lookerHostData.lookerVersion || '7.0' : '7.0';
    if (!this._lookerHostData || !intersects(version, lookerVersion, true)) {
      return "Extension requires Looker version ".concat(version, ", got ").concat(lookerVersion);
    }
    return undefined;
  }
  validateAuthParameters(authParameters) {
    if (!authParameters.client_id) {
      return 'client_id missing';
    }
    if (authParameters.redirect_uri) {
      return 'redirect_uri must NOT be included';
    }
    if (authParameters.response_type !== 'token' && authParameters.response_type !== 'id_token' && authParameters.response_type !== 'code') {
      return "invalid response_type, must be token, id_token or code, ".concat(authParameters.response_type);
    }
    return undefined;
  }
}
//# sourceMappingURL=extension_host_api.js.map