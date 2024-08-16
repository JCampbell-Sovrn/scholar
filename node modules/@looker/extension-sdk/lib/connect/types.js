"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MountPoint = exports.FetchResponseBodyType = exports.ExtensionRequestType = exports.ExtensionNotificationType = exports.ExtensionEvent = exports.ApiVersion = void 0;
var ExtensionEvent = function (ExtensionEvent) {
  ExtensionEvent["EXTENSION_HOST_NOTIFICATION"] = "EXTENSION_NOTIFICATION";
  ExtensionEvent["EXTENSION_API_REQUEST"] = "EXTENSION_API_REQUEST";
  return ExtensionEvent;
}({});
exports.ExtensionEvent = ExtensionEvent;
var ExtensionRequestType = function (ExtensionRequestType) {
  ExtensionRequestType["CONTEXT_DATA"] = "CONTEXT_DATA";
  ExtensionRequestType["VERIFY_HOST"] = "VERIFY_HOST";
  ExtensionRequestType["INVOKE_CORE_SDK"] = "INVOKE_CORE_SDK";
  ExtensionRequestType["RAW_INVOKE_CORE_SDK"] = "RAW_INVOKE_CORE_SDK";
  ExtensionRequestType["UPDATE_TITLE"] = "UPDATE_TITLE";
  ExtensionRequestType["UPDATE_LOCATION"] = "UPDATE_LOCATION";
  ExtensionRequestType["ROUTE_CHANGED"] = "ROUTE_CHANGED";
  ExtensionRequestType["CLOSE_HOST_POPOVERS"] = "CLOSE_HOST_POPOVERS";
  ExtensionRequestType["CLIPBOARD"] = "CLIPBOARD";
  ExtensionRequestType["LOCAL_STORAGE"] = "LOCAL_STORAGE";
  ExtensionRequestType["USER_ATTRIBUTE"] = "USER_ATTRIBUTE";
  ExtensionRequestType["TRACK_ACTION"] = "TRACK_ACTION";
  ExtensionRequestType["ERROR_EVENT"] = "ERROR_EVENT";
  ExtensionRequestType["INVOKE_EXTERNAL_API"] = "INVOKE_EXTERNAL_API";
  ExtensionRequestType["EXTENSION_UNLOADED"] = "EXTENSION_UNLOADED";
  ExtensionRequestType["SPARTAN_LOGOUT"] = "SPARTAN_LOGOUT";
  ExtensionRequestType["RENDERED"] = "RENDERED";
  ExtensionRequestType["VIS_DEFAULT_CONFIG"] = "VIS_DEFAULT_CONFIG";
  ExtensionRequestType["VIS_CONFIG_UPDATE"] = "VIS_CONFIG_UPDATE";
  ExtensionRequestType["TILE_ADD_ERRORS"] = "TILE_ADD_ERRORS";
  ExtensionRequestType["TILE_CLEAR_ERRORS"] = "TILE_CLEAR_ERRORS";
  ExtensionRequestType["TILE_OPEN_DRILL_MENU"] = "TILE_OPEN_DRILL_MENU";
  ExtensionRequestType["TILE_TOGGLE_CROSS_FILTER"] = "TILE_TOGGLE_CROSS_FILTER";
  ExtensionRequestType["TILE_ROW_LIMIT_UPDATE"] = "TILE_ROW_LIMIT_UPDATE";
  ExtensionRequestType["TILE_RUN_DASHBOARD"] = "TILE_RUN_DASHBOARD";
  ExtensionRequestType["TILE_STOP_DASHBOARD"] = "TILE_STOP_DASHBOARD";
  ExtensionRequestType["TILE_UPDATE_FILTERS"] = "TILE_UPDATE_FILTERS";
  ExtensionRequestType["TILE_OPEN_SCHEDULE_DIALOG"] = "TILE_OPEN_SCHEDULE_DIALOG";
  return ExtensionRequestType;
}({});
exports.ExtensionRequestType = ExtensionRequestType;
var ApiVersion = function (ApiVersion) {
  ApiVersion["sdk40"] = "4.0";
  return ApiVersion;
}({});
exports.ApiVersion = ApiVersion;
var FetchResponseBodyType = function (FetchResponseBodyType) {
  FetchResponseBodyType["json"] = "json";
  FetchResponseBodyType["text"] = "text";
  return FetchResponseBodyType;
}({});
exports.FetchResponseBodyType = FetchResponseBodyType;
var ExtensionNotificationType = function (ExtensionNotificationType) {
  ExtensionNotificationType["ROUTE_CHANGED"] = "ROUTE_CHANGED";
  ExtensionNotificationType["INITIALIZE"] = "INITIALIZE";
  ExtensionNotificationType["VISUALIZATION_DATA"] = "VISUALIZATION_DATA";
  ExtensionNotificationType["TILE_HOST_DATA"] = "TILE_HOST_DATA";
  return ExtensionNotificationType;
}({});
exports.ExtensionNotificationType = ExtensionNotificationType;
var MountPoint = function (MountPoint) {
  MountPoint["standalone"] = "standalone";
  MountPoint["dashboardVisualization"] = "dashboard-visualization";
  MountPoint["dashboardTile"] = "dashboard-tile";
  MountPoint["dashboardTilePopup"] = "dashboard-tile-popup";
  return MountPoint;
}({});
exports.MountPoint = MountPoint;
//# sourceMappingURL=types.js.map