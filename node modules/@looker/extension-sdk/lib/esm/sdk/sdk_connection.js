function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
export class SdkConnection {
  constructor(hostConnection, apiVersion) {
    this.hostConnection = hostConnection;
    this.apiVersion = apiVersion;
  }
  request(httpMethod, path, body, params, _authenticator, options) {
    var _this = this;
    return _asyncToGenerator(function* () {
      return _this.hostConnection.invokeCoreSdk(httpMethod, path, params, body, undefined, options, _this.apiVersion);
    })();
  }
  rawRequest(httpMethod, path, body, params, _authenticator, _options) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      return _this2.hostConnection.invokeCoreSdkRaw(httpMethod, path, params, body, _this2.apiVersion);
    })();
  }
  stream(_callback, _method, _path, _queryParams, _body, _authenticator, _options) {
    return _asyncToGenerator(function* () {
      return Promise.reject(new Error('Not implemented'));
    })();
  }
}
//# sourceMappingURL=sdk_connection.js.map