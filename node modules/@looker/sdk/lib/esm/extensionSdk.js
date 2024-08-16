import { DefaultSettings, ExtensionSession, ExtensionTransport } from '@looker/sdk-rtl';
export class LookerExtensionSDK {
  static createClient(hostConnection, type, settings) {
    settings = settings || DefaultSettings();
    var transport = new ExtensionTransport(settings, hostConnection);
    var session = new ExtensionSession(settings, transport);
    return new type(session);
  }
}
//# sourceMappingURL=extensionSdk.js.map