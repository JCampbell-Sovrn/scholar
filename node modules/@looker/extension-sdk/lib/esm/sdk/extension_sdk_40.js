import { LookerExtensionSDK as _LookerExtensionSDK, Looker40SDK } from '@looker/sdk';
import { ApiVersion } from '../connect';
import { SdkConnection } from './sdk_connection';
export class LookerExtensionSDK40 {
  static createClient(hostConnection) {
    return _LookerExtensionSDK.createClient(new SdkConnection(hostConnection, ApiVersion.sdk40), Looker40SDK);
  }
}
//# sourceMappingURL=extension_sdk_40.js.map