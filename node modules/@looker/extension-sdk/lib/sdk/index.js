"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extension_sdk = require("./extension_sdk");
Object.keys(_extension_sdk).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _extension_sdk[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extension_sdk[key];
    }
  });
});
//# sourceMappingURL=index.js.map