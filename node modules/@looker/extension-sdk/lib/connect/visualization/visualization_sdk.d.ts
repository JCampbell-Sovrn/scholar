import type { ExtensionHostApiImpl } from '../extension_host_api';
import type { Row } from '../tile';
import type { VisualizationSDK, RawVisualizationData, RawVisConfig, VisualizationConfig, QueryResponse, Measure, Dimension, TableCalculation, PivotConfig, RawVisQueryResponse, VisOptions } from './types';
declare class QueryResponseImpl implements QueryResponse {
    _queryResponse?: RawVisQueryResponse;
    constructor(queryResponse?: RawVisQueryResponse);
    update(queryResponse: RawVisQueryResponse): void;
    get fieldMeasures(): Measure[];
    get fieldDimensions(): Dimension[];
    get fieldTableCalculations(): TableCalculation[];
    get fieldPivots(): PivotConfig[];
    get fieldMeasureLike(): Measure[];
    get fieldDimensionLike(): Dimension[];
    get data(): Row[];
}
declare class VisualizationConfigImpl implements VisualizationConfig {
    _visConfig?: RawVisConfig;
    constructor(visConfig?: RawVisConfig);
    update(visConfig: RawVisConfig): void;
    get visConfig(): RawVisConfig;
    get queryFieldMeasures(): Measure[];
    get queryFieldDimensions(): Dimension[];
    get queryFieldTableCalculations(): TableCalculation[];
    get queryFieldPivots(): PivotConfig[];
}
export declare class VisualizationSDKImpl implements VisualizationSDK {
    hostApi: ExtensionHostApiImpl;
    visualizationData?: RawVisualizationData;
    _visConfig?: VisualizationConfigImpl;
    _queryResponse?: QueryResponseImpl;
    constructor(hostApi: ExtensionHostApiImpl);
    updateVisData(visualizationData: RawVisualizationData): void;
    configureVisualization(options: VisOptions): void;
    setVisConfig(config: RawVisConfig): void;
    get visConfig(): VisualizationConfig;
    updateRowLimit(rowLimit: number): void;
    get queryResponse(): QueryResponse;
}
export {};
