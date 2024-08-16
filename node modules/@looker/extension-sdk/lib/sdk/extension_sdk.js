"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LookerExtensionSDK = void 0;
var _sdk = require("@looker/sdk");
var _connect = require("../connect");
var _sdk_connection = require("./sdk_connection");
class LookerExtensionSDK {
  static create40Client(hostConnection) {
    return _sdk.LookerExtensionSDK.createClient(new _sdk_connection.SdkConnection(hostConnection, _connect.ApiVersion.sdk40), _sdk.Looker40SDK);
  }
  static createClient(hostConnection) {
    return LookerExtensionSDK.create40Client(hostConnection);
  }
}
exports.LookerExtensionSDK = LookerExtensionSDK;
//# sourceMappingURL=extension_sdk.js.map