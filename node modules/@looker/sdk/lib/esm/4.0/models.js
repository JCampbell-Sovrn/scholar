export var Align = function (Align) {
  Align["left"] = "left";
  Align["right"] = "right";
  return Align;
}({});
export var Category = function (Category) {
  Category["parameter"] = "parameter";
  Category["filter"] = "filter";
  Category["measure"] = "measure";
  Category["dimension"] = "dimension";
  return Category;
}({});
export var ComparisonType = function (ComparisonType) {
  ComparisonType["EQUAL_TO"] = "EQUAL_TO";
  ComparisonType["GREATER_THAN"] = "GREATER_THAN";
  ComparisonType["GREATER_THAN_OR_EQUAL_TO"] = "GREATER_THAN_OR_EQUAL_TO";
  ComparisonType["LESS_THAN"] = "LESS_THAN";
  ComparisonType["LESS_THAN_OR_EQUAL_TO"] = "LESS_THAN_OR_EQUAL_TO";
  ComparisonType["INCREASES_BY"] = "INCREASES_BY";
  ComparisonType["DECREASES_BY"] = "DECREASES_BY";
  ComparisonType["CHANGES_BY"] = "CHANGES_BY";
  return ComparisonType;
}({});
export var DependencyStatus = function (DependencyStatus) {
  DependencyStatus["lock_optional"] = "lock_optional";
  DependencyStatus["lock_required"] = "lock_required";
  DependencyStatus["lock_error"] = "lock_error";
  DependencyStatus["install_none"] = "install_none";
  return DependencyStatus;
}({});
export var DestinationType = function (DestinationType) {
  DestinationType["EMAIL"] = "EMAIL";
  DestinationType["ACTION_HUB"] = "ACTION_HUB";
  return DestinationType;
}({});
export var DeviceType = function (DeviceType) {
  DeviceType["android"] = "android";
  DeviceType["ios"] = "ios";
  return DeviceType;
}({});
export var FillStyle = function (FillStyle) {
  FillStyle["enumeration"] = "enumeration";
  FillStyle["range"] = "range";
  return FillStyle;
}({});
export var Format = function (Format) {
  Format["topojson"] = "topojson";
  Format["vector_tile_region"] = "vector_tile_region";
  return Format;
}({});
export var InvestigativeContentType = function (InvestigativeContentType) {
  InvestigativeContentType["dashboard"] = "dashboard";
  return InvestigativeContentType;
}({});
export var Name = function (Name) {
  Name["day"] = "day";
  Name["hour"] = "hour";
  Name["minute"] = "minute";
  Name["second"] = "second";
  Name["millisecond"] = "millisecond";
  Name["microsecond"] = "microsecond";
  Name["week"] = "week";
  Name["month"] = "month";
  Name["quarter"] = "quarter";
  Name["year"] = "year";
  return Name;
}({});
export var PermissionType = function (PermissionType) {
  PermissionType["view"] = "view";
  PermissionType["edit"] = "edit";
  return PermissionType;
}({});
export var PullRequestMode = function (PullRequestMode) {
  PullRequestMode["off"] = "off";
  PullRequestMode["links"] = "links";
  PullRequestMode["recommended"] = "recommended";
  PullRequestMode["required"] = "required";
  return PullRequestMode;
}({});
export var ResultFormat = function (ResultFormat) {
  ResultFormat["inline_json"] = "inline_json";
  ResultFormat["json"] = "json";
  ResultFormat["json_detail"] = "json_detail";
  ResultFormat["json_fe"] = "json_fe";
  ResultFormat["json_bi"] = "json_bi";
  ResultFormat["csv"] = "csv";
  ResultFormat["html"] = "html";
  ResultFormat["md"] = "md";
  ResultFormat["txt"] = "txt";
  ResultFormat["xlsx"] = "xlsx";
  ResultFormat["gsxml"] = "gsxml";
  ResultFormat["sql"] = "sql";
  return ResultFormat;
}({});
export var SecretType = function (SecretType) {
  SecretType["SSO"] = "SSO";
  SecretType["JWT"] = "JWT";
  return SecretType;
}({});
export var SslVersion = function (SslVersion) {
  SslVersion["TLSv1_1"] = "TLSv1_1";
  SslVersion["SSLv23"] = "SSLv23";
  SslVersion["TLSv1_2"] = "TLSv1_2";
  return SslVersion;
}({});
export var SupportedActionTypes = function (SupportedActionTypes) {
  SupportedActionTypes["cell"] = "cell";
  SupportedActionTypes["query"] = "query";
  SupportedActionTypes["dashboard"] = "dashboard";
  SupportedActionTypes["none"] = "none";
  return SupportedActionTypes;
}({});
export var SupportedDownloadSettings = function (SupportedDownloadSettings) {
  SupportedDownloadSettings["push"] = "push";
  SupportedDownloadSettings["url"] = "url";
  return SupportedDownloadSettings;
}({});
export var SupportedFormats = function (SupportedFormats) {
  SupportedFormats["txt"] = "txt";
  SupportedFormats["csv"] = "csv";
  SupportedFormats["inline_json"] = "inline_json";
  SupportedFormats["json"] = "json";
  SupportedFormats["json_label"] = "json_label";
  SupportedFormats["json_detail"] = "json_detail";
  SupportedFormats["json_detail_lite_stream"] = "json_detail_lite_stream";
  SupportedFormats["xlsx"] = "xlsx";
  SupportedFormats["html"] = "html";
  SupportedFormats["wysiwyg_pdf"] = "wysiwyg_pdf";
  SupportedFormats["assembled_pdf"] = "assembled_pdf";
  SupportedFormats["wysiwyg_png"] = "wysiwyg_png";
  SupportedFormats["csv_zip"] = "csv_zip";
  return SupportedFormats;
}({});
export var SupportedFormattings = function (SupportedFormattings) {
  SupportedFormattings["formatted"] = "formatted";
  SupportedFormattings["unformatted"] = "unformatted";
  return SupportedFormattings;
}({});
export var SupportedVisualizationFormattings = function (SupportedVisualizationFormattings) {
  SupportedVisualizationFormattings["apply"] = "apply";
  SupportedVisualizationFormattings["noapply"] = "noapply";
  return SupportedVisualizationFormattings;
}({});
export var UserAttributeFilterTypes = function (UserAttributeFilterTypes) {
  UserAttributeFilterTypes["advanced_filter_string"] = "advanced_filter_string";
  UserAttributeFilterTypes["advanced_filter_number"] = "advanced_filter_number";
  UserAttributeFilterTypes["advanced_filter_datetime"] = "advanced_filter_datetime";
  UserAttributeFilterTypes["string"] = "string";
  UserAttributeFilterTypes["number"] = "number";
  UserAttributeFilterTypes["datetime"] = "datetime";
  UserAttributeFilterTypes["relative_url"] = "relative_url";
  UserAttributeFilterTypes["yesno"] = "yesno";
  UserAttributeFilterTypes["zipcode"] = "zipcode";
  return UserAttributeFilterTypes;
}({});
export var WeekStartDay = function (WeekStartDay) {
  WeekStartDay["monday"] = "monday";
  WeekStartDay["tuesday"] = "tuesday";
  WeekStartDay["wednesday"] = "wednesday";
  WeekStartDay["thursday"] = "thursday";
  WeekStartDay["friday"] = "friday";
  WeekStartDay["saturday"] = "saturday";
  WeekStartDay["sunday"] = "sunday";
  return WeekStartDay;
}({});
//# sourceMappingURL=models.js.map