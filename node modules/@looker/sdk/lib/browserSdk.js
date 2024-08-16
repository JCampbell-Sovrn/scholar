"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookerBrowserSDK = exports.BrowserSettings = void 0;
var _sdkRtl = require("@looker/sdk-rtl");
var _methods = require("./4.0/methods");
var BrowserSettings = () => {
  var settings = (0, _sdkRtl.DefaultSettings)();
  settings.base_url = "".concat(document.location.hostname, ":19999");
  return settings;
};
exports.BrowserSettings = BrowserSettings;
class LookerBrowserSDK {
  static init40(settings, transport, session) {
    settings = settings || BrowserSettings();
    transport = transport || new _sdkRtl.BrowserTransport(settings);
    session = session || new _sdkRtl.BrowserSession(settings, transport);
    return new _methods.Looker40SDK(session);
  }
}
exports.LookerBrowserSDK = LookerBrowserSDK;
//# sourceMappingURL=browserSdk.js.map