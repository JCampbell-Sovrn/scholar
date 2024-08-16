import type { Row } from '../tile';
export declare type VisualizationDataReceivedCallback = (visualizationData: RawVisualizationData) => void;
export interface RawVisualizationData {
    visConfig: RawVisConfig;
    queryResponse: RawVisQueryResponse;
}
export interface RawVisConfig {
    [key: string]: RawVisConfigValue;
}
export declare type RawVisConfigValue = any;
export interface RawVisQueryResponse {
    [key: string]: any;
    data: RawVisData;
    fields: {
        [key: string]: any[];
    };
    pivots: RawPivotConfig[];
}
export declare type RawVisData = Row[];
export interface RawPivotConfig {
    key: string;
    is_total: boolean;
    data: {
        [key: string]: string;
    };
    metadata: {
        [key: string]: {
            [key: string]: string;
        };
    };
}
export interface Measure extends RawVisConfig {
    [key: string]: any;
}
export interface Dimension extends RawVisConfig {
    [key: string]: any;
}
export interface TableCalculation {
    [key: string]: any;
}
export interface PivotConfig extends RawPivotConfig {
    [key: string]: any;
}
export interface VisualizationConfig {
    queryFieldMeasures: Measure[];
    queryFieldDimensions: Dimension[];
    queryFieldTableCalculations: TableCalculation[];
    queryFieldPivots: PivotConfig[];
    visConfig: RawVisConfig;
}
export interface QueryResponse {
    data: Row[];
    fieldMeasures: Measure[];
    fieldDimensions: Dimension[];
    fieldTableCalculations: TableCalculation[];
    fieldPivots: PivotConfig[];
    fieldMeasureLike: Measure[];
    fieldDimensionLike: Dimension[];
}
export interface VisualizationSDK {
    visualizationData?: RawVisualizationData;
    visConfig: VisualizationConfig;
    queryResponse: QueryResponse;
    updateVisData: (rawVisData: RawVisualizationData) => void;
    configureVisualization: (options: VisOptions) => void;
    setVisConfig: (config: RawVisConfig) => void;
    updateRowLimit: (rowLimit: number) => void;
}
export interface VisOptionValue {
    [label: string]: string;
}
export interface VisOption {
    type: string;
    values?: VisOptionValue[];
    display?: string;
    default?: any;
    label?: string;
    section?: string;
    placeholder?: string;
    display_size?: 'half' | 'third' | 'normal';
    order?: number;
    hidden?: (setOptions: RawVisConfig) => boolean;
    disabledReason?: (setOptions: RawVisConfig, queryResponse: QueryResponse) => string | null;
    min?: number;
    max?: number;
    required?: boolean;
    words?: VisOptionValue[];
    supports?: string[];
    color_application?: string;
    sublabel?: string;
}
export interface VisOptions {
    [optionName: string]: VisOption;
}
