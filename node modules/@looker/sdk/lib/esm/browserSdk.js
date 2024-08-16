import { DefaultSettings, BrowserSession, BrowserTransport } from '@looker/sdk-rtl';
import { Looker40SDK } from './4.0/methods';
export var BrowserSettings = () => {
  var settings = DefaultSettings();
  settings.base_url = "".concat(document.location.hostname, ":19999");
  return settings;
};
export class LookerBrowserSDK {
  static init40(settings, transport, session) {
    settings = settings || BrowserSettings();
    transport = transport || new BrowserTransport(settings);
    session = session || new BrowserSession(settings, transport);
    return new Looker40SDK(session);
  }
}
//# sourceMappingURL=browserSdk.js.map