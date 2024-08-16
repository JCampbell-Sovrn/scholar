"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ExtensionProviderBase = require("./ExtensionProviderBase");
Object.keys(_ExtensionProviderBase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ExtensionProviderBase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ExtensionProviderBase[key];
    }
  });
});
//# sourceMappingURL=index.js.map