function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
import deepmerge from 'deepmerge';
export class FetchProxyImpl {
  constructor(extensionHost, baseUrl, init, responseBodyType) {
    this.extensionHost = extensionHost;
    this.baseUrl = baseUrl;
    this.init = init;
    this.responseBodyType = responseBodyType;
  }
  fetchProxy(resource, init, responseBodyType) {
    var _this = this;
    return _asyncToGenerator(function* () {
      return _this.extensionHost.fetchProxy(_this.getResource(resource), _this.getInit(init), _this.getResponseBodyType(responseBodyType));
    })();
  }
  getResource(resource) {
    return this.baseUrl ? this.baseUrl + resource : resource;
  }
  getInit(init) {
    if (init || this.init) {
      return deepmerge(this.init || {}, init || {});
    }
    return undefined;
  }
  getResponseBodyType(responseBodyType) {
    return responseBodyType || this.responseBodyType;
  }
}
//# sourceMappingURL=fetch_proxy.js.map