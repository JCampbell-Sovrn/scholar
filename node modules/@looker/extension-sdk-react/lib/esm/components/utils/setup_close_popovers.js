export var setupClosePopoversListener = extensionSDK => {
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
//# sourceMappingURL=setup_close_popovers.js.map