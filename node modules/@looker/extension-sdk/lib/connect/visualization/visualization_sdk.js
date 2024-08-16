"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualizationSDKImpl = void 0;
var _errors = require("../../util/errors");
var _types = require("../types");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class QueryResponseImpl {
  constructor(queryResponse) {
    _defineProperty(this, "_queryResponse", void 0);
    this._queryResponse = queryResponse;
  }
  update(queryResponse) {
    this._queryResponse = queryResponse;
  }
  get fieldMeasures() {
    var _this$_queryResponse, _this$_queryResponse$;
    return ((_this$_queryResponse = this._queryResponse) === null || _this$_queryResponse === void 0 ? void 0 : (_this$_queryResponse$ = _this$_queryResponse.fields) === null || _this$_queryResponse$ === void 0 ? void 0 : _this$_queryResponse$.measures) || [];
  }
  get fieldDimensions() {
    var _this$_queryResponse2, _this$_queryResponse3;
    return ((_this$_queryResponse2 = this._queryResponse) === null || _this$_queryResponse2 === void 0 ? void 0 : (_this$_queryResponse3 = _this$_queryResponse2.fields) === null || _this$_queryResponse3 === void 0 ? void 0 : _this$_queryResponse3.dimensions) || [];
  }
  get fieldTableCalculations() {
    var _this$_queryResponse4, _this$_queryResponse5;
    return ((_this$_queryResponse4 = this._queryResponse) === null || _this$_queryResponse4 === void 0 ? void 0 : (_this$_queryResponse5 = _this$_queryResponse4.fields) === null || _this$_queryResponse5 === void 0 ? void 0 : _this$_queryResponse5.table_calculations) || [];
  }
  get fieldPivots() {
    var _this$_queryResponse6, _this$_queryResponse7;
    return ((_this$_queryResponse6 = this._queryResponse) === null || _this$_queryResponse6 === void 0 ? void 0 : (_this$_queryResponse7 = _this$_queryResponse6.fields) === null || _this$_queryResponse7 === void 0 ? void 0 : _this$_queryResponse7.pivots) || [];
  }
  get fieldMeasureLike() {
    var _this$_queryResponse8, _this$_queryResponse9;
    return ((_this$_queryResponse8 = this._queryResponse) === null || _this$_queryResponse8 === void 0 ? void 0 : (_this$_queryResponse9 = _this$_queryResponse8.fields) === null || _this$_queryResponse9 === void 0 ? void 0 : _this$_queryResponse9.measure_like) || [];
  }
  get fieldDimensionLike() {
    var _this$_queryResponse10, _this$_queryResponse11;
    return ((_this$_queryResponse10 = this._queryResponse) === null || _this$_queryResponse10 === void 0 ? void 0 : (_this$_queryResponse11 = _this$_queryResponse10.fields) === null || _this$_queryResponse11 === void 0 ? void 0 : _this$_queryResponse11.dimension_like) || [];
  }
  get data() {
    var _this$_queryResponse12;
    return ((_this$_queryResponse12 = this._queryResponse) === null || _this$_queryResponse12 === void 0 ? void 0 : _this$_queryResponse12.data) || [];
  }
}
class VisualizationConfigImpl {
  constructor(visConfig) {
    _defineProperty(this, "_visConfig", void 0);
    this._visConfig = visConfig;
  }
  update(visConfig) {
    this._visConfig = visConfig;
  }
  get visConfig() {
    return this._visConfig || {};
  }
  get queryFieldMeasures() {
    var _this$_visConfig, _this$_visConfig$quer;
    return ((_this$_visConfig = this._visConfig) === null || _this$_visConfig === void 0 ? void 0 : (_this$_visConfig$quer = _this$_visConfig.query_fields) === null || _this$_visConfig$quer === void 0 ? void 0 : _this$_visConfig$quer.measures) || [];
  }
  get queryFieldDimensions() {
    var _this$_visConfig2, _this$_visConfig2$que;
    return ((_this$_visConfig2 = this._visConfig) === null || _this$_visConfig2 === void 0 ? void 0 : (_this$_visConfig2$que = _this$_visConfig2.query_fields) === null || _this$_visConfig2$que === void 0 ? void 0 : _this$_visConfig2$que.dimensions) || [];
  }
  get queryFieldTableCalculations() {
    var _this$_visConfig3, _this$_visConfig3$que;
    return ((_this$_visConfig3 = this._visConfig) === null || _this$_visConfig3 === void 0 ? void 0 : (_this$_visConfig3$que = _this$_visConfig3.query_fields) === null || _this$_visConfig3$que === void 0 ? void 0 : _this$_visConfig3$que.table_calculations) || [];
  }
  get queryFieldPivots() {
    var _this$_visConfig4, _this$_visConfig4$que;
    return ((_this$_visConfig4 = this._visConfig) === null || _this$_visConfig4 === void 0 ? void 0 : (_this$_visConfig4$que = _this$_visConfig4.query_fields) === null || _this$_visConfig4$que === void 0 ? void 0 : _this$_visConfig4$que.pivots) || [];
  }
}
class VisualizationSDKImpl {
  constructor(hostApi) {
    _defineProperty(this, "hostApi", void 0);
    _defineProperty(this, "visualizationData", void 0);
    _defineProperty(this, "_visConfig", void 0);
    _defineProperty(this, "_queryResponse", void 0);
    this.hostApi = hostApi;
  }
  updateVisData(visualizationData) {
    if (this.hostApi.isDashboardMountSupported) {
      this.visualizationData = visualizationData;
      if (this.visConfig && this._visConfig) {
        this._visConfig.update(this.visualizationData.visConfig);
      }
      if (this.queryResponse && this._queryResponse) {
        this._queryResponse.update(this.visualizationData.queryResponse);
      }
    }
  }
  configureVisualization(options) {
    if (this.hostApi.isDashboardMountSupported) {
      this.hostApi.send(_types.ExtensionRequestType.VIS_DEFAULT_CONFIG, {
        options
      });
    } else {
      throw _errors.NOT_DASHBOARD_MOUNT_NOT_SUPPORTED_ERROR;
    }
  }
  setVisConfig(config) {
    if (this.hostApi.isDashboardMountSupported) {
      this.hostApi.send(_types.ExtensionRequestType.VIS_CONFIG_UPDATE, {
        updatedConfig: config
      });
    } else {
      throw _errors.NOT_DASHBOARD_MOUNT_NOT_SUPPORTED_ERROR;
    }
  }
  get visConfig() {
    if (!this._visConfig) {
      var _this$visualizationDa;
      this._visConfig = new VisualizationConfigImpl((_this$visualizationDa = this.visualizationData) === null || _this$visualizationDa === void 0 ? void 0 : _this$visualizationDa.visConfig);
    }
    return this._visConfig;
  }
  updateRowLimit(rowLimit) {
    if (this.hostApi.isDashboardMountSupported) {
      this.hostApi.send(_types.ExtensionRequestType.TILE_ROW_LIMIT_UPDATE, {
        rowLimit
      });
    } else {
      throw _errors.NOT_DASHBOARD_MOUNT_NOT_SUPPORTED_ERROR;
    }
  }
  get queryResponse() {
    if (!this._queryResponse) {
      var _this$visualizationDa2;
      this._queryResponse = new QueryResponseImpl((_this$visualizationDa2 = this.visualizationData) === null || _this$visualizationDa2 === void 0 ? void 0 : _this$visualizationDa2.queryResponse);
    }
    return this._queryResponse;
  }
}
exports.VisualizationSDKImpl = VisualizationSDKImpl;
//# sourceMappingURL=visualization_sdk.js.map