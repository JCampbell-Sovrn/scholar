"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookerExtensionSDK40 = void 0;
var _sdk = require("@looker/sdk");
var _connect = require("../connect");
var _sdk_connection = require("./sdk_connection");
class LookerExtensionSDK40 {
  static createClient(hostConnection) {
    return _sdk.LookerExtensionSDK.createClient(new _sdk_connection.SdkConnection(hostConnection, _connect.ApiVersion.sdk40), _sdk.Looker40SDK);
  }
}
exports.LookerExtensionSDK40 = LookerExtensionSDK40;
//# sourceMappingURL=extension_sdk_40.js.map