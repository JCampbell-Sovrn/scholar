"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setupClosePopoversListener = void 0;
var setupClosePopoversListener = extensionSDK => {
  var onBodyMousedown = () => {
    if (extensionSDK) {
      extensionSDK.closeHostPopovers();
    }
  };
  var body = document.querySelector('body');
  if (body) {
    body.addEventListener('mousedown', onBodyMousedown);
  }
  return () => {
    if (body) {
      body.removeEventListener('mousedown', onBodyMousedown);
    }
  };
};
exports.setupClosePopoversListener = setupClosePopoversListener;
//# sourceMappingURL=setup_close_popovers.js.map