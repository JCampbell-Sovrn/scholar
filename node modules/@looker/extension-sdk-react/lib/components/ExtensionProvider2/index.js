"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ExtensionProvider = require("./ExtensionProvider2");
Object.keys(_ExtensionProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ExtensionProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ExtensionProvider[key];
    }
  });
});
//# sourceMappingURL=index.js.map