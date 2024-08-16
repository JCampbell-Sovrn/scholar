import { logError, logWarn } from '../util';
var _hostApi;
var errorListener = event => {
  if (_hostApi) {
    if (event.error) {
      if (!event.error._looker_reported) {
        _hostApi.error(event);
        event.error._looker_reported = true;
      }
    } else {
      _hostApi.error(event);
    }
  } else {
    logError('Extension has unhandled error. Reporting on console as Looker host api not initialized', event);
  }
};
var beforeUnloadListener = () => {
  if (_hostApi) {
    _hostApi.unloaded();
    logWarn('Extension is being unloaded');
  }
};
var setupGlobalListeners = () => {
  window.addEventListener('error', errorListener);
  window.addEventListener('beforeunload', beforeUnloadListener);
};
setupGlobalListeners();
export var registerHostApi = hostApi => {
  _hostApi = hostApi;
};
export var getExtensionSDK = () => {
  if (_hostApi && _hostApi.lookerHostData) {
    return _hostApi;
  }
  throw new Error('ExtensionSDK not initialized');
};
//# sourceMappingURL=global_listener.js.map