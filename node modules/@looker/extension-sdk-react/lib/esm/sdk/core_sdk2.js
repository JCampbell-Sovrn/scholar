var registered = false;
var _coreSdk;
export function registerCoreSDK2(coreSdk) {
  if (_coreSdk) {
    throw new Error('coreSDK can only be registered once');
  }
  _coreSdk = coreSdk;
  registered = true;
}
export function unregisterCoreSDK2() {
  registered = false;
  _coreSdk = undefined;
}
export function getCoreSDK2() {
  if (!registered) {
    throw new Error('Looker host connection not established');
  }
  return _coreSdk;
}
//# sourceMappingURL=core_sdk2.js.map