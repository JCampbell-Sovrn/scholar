var _core40SDK;
export var registerCore40SDK = coreSDK => {
  if (_core40SDK) {
    throw new Error('coreSDK can only be registered onces');
  }
  _core40SDK = coreSDK;
};
export var unregisterCore40SDK = () => _core40SDK = undefined;
export var getCore40SDK = () => {
  if (!_core40SDK) {
    throw new Error('Looker host connection not established');
  }
  return _core40SDK;
};
//# sourceMappingURL=core_sdk_40.js.map