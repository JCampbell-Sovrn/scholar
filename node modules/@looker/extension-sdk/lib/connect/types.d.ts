import type { ChattyHostConnection } from '@looker/chatty';
import type { VisualizationDataReceivedCallback, RawVisualizationData, VisualizationSDK } from './visualization';
import type { TileHostDataChangedCallback, TileSDK, TileHostData } from './tile';
export declare enum ExtensionEvent {
    EXTENSION_HOST_NOTIFICATION = "EXTENSION_NOTIFICATION",
    EXTENSION_API_REQUEST = "EXTENSION_API_REQUEST"
}
export declare enum ExtensionRequestType {
    CONTEXT_DATA = "CONTEXT_DATA",
    VERIFY_HOST = "VERIFY_HOST",
    INVOKE_CORE_SDK = "INVOKE_CORE_SDK",
    RAW_INVOKE_CORE_SDK = "RAW_INVOKE_CORE_SDK",
    UPDATE_TITLE = "UPDATE_TITLE",
    UPDATE_LOCATION = "UPDATE_LOCATION",
    ROUTE_CHANGED = "ROUTE_CHANGED",
    CLOSE_HOST_POPOVERS = "CLOSE_HOST_POPOVERS",
    CLIPBOARD = "CLIPBOARD",
    LOCAL_STORAGE = "LOCAL_STORAGE",
    USER_ATTRIBUTE = "USER_ATTRIBUTE",
    TRACK_ACTION = "TRACK_ACTION",
    ERROR_EVENT = "ERROR_EVENT",
    INVOKE_EXTERNAL_API = "INVOKE_EXTERNAL_API",
    EXTENSION_UNLOADED = "EXTENSION_UNLOADED",
    SPARTAN_LOGOUT = "SPARTAN_LOGOUT",
    RENDERED = "RENDERED",
    VIS_DEFAULT_CONFIG = "VIS_DEFAULT_CONFIG",
    VIS_CONFIG_UPDATE = "VIS_CONFIG_UPDATE",
    TILE_ADD_ERRORS = "TILE_ADD_ERRORS",
    TILE_CLEAR_ERRORS = "TILE_CLEAR_ERRORS",
    TILE_OPEN_DRILL_MENU = "TILE_OPEN_DRILL_MENU",
    TILE_TOGGLE_CROSS_FILTER = "TILE_TOGGLE_CROSS_FILTER",
    TILE_ROW_LIMIT_UPDATE = "TILE_ROW_LIMIT_UPDATE",
    TILE_RUN_DASHBOARD = "TILE_RUN_DASHBOARD",
    TILE_STOP_DASHBOARD = "TILE_STOP_DASHBOARD",
    TILE_UPDATE_FILTERS = "TILE_UPDATE_FILTERS",
    TILE_OPEN_SCHEDULE_DIALOG = "TILE_OPEN_SCHEDULE_DIALOG"
}
export interface ExtensionRequest {
    type: ExtensionRequestType;
    payload?: InvokeCoreSdkRequest | undefined;
}
export declare enum ApiVersion {
    sdk40 = "4.0"
}
export interface InvokeCoreSdkRequest {
    apiMethodName?: string;
    httpMethod?: string;
    path?: string;
    body?: any;
    params?: any;
    options?: any;
    apiVersion?: ApiVersion;
}
export interface UpdateTitleRequest {
    title: string;
}
export interface UpdateLocationRequest {
    url: string;
    state?: any;
}
export interface ExtensionHostApi extends ExtensionSDK {
    isDashboardMountSupported: boolean;
    handleNotification(message: ExtensionNotification): ExtensionInitializationResponse | undefined;
    invokeCoreSdk(httpMethod: string, path: string, body?: any, params?: any, authenticator?: any, options?: any, apiVersion?: ApiVersion): Promise<any>;
    invokeCoreSdkRaw(httpMethod: string, path: string, body?: any, params?: any, apiVersion?: ApiVersion): Promise<any>;
    unloaded(): void;
}
export interface ExtensionClientApi {
    handleRequest(message: ExtensionRequest): any | void;
}
export interface ContextDataRequest {
    type: 'save' | 'refresh';
    contextData?: string;
}
export interface RouteChangeRequest {
    route: string;
}
export interface ClipboardRequest {
    type: 'write';
    value: string;
}
export interface LocalStorageRequest {
    type: 'get' | 'set' | 'remove';
    name: string;
    value?: string;
}
export interface TrackActionRequest {
    name: string;
    trackAction: string;
    attributes?: Record<string, any>;
}
export interface ErrorEventRequest {
    errorEvent: ErrorEvent;
}
export declare enum FetchResponseBodyType {
    json = "json",
    text = "text"
}
export interface FetchDataRequest {
    resource: string;
    init?: Extract<RequestInit, 'method' | 'headers' | 'body' | 'credentials'>;
    responseBodyType?: FetchResponseBodyType;
}
export declare enum ExtensionNotificationType {
    ROUTE_CHANGED = "ROUTE_CHANGED",
    INITIALIZE = "INITIALIZE",
    VISUALIZATION_DATA = "VISUALIZATION_DATA",
    TILE_HOST_DATA = "TILE_HOST_DATA"
}
export interface ExtensionInitializeMessage {
    type: ExtensionNotificationType.INITIALIZE;
    payload: LookerHostData;
}
export interface ExtensionRouteChangedMessage {
    type: ExtensionNotificationType.ROUTE_CHANGED;
    payload: RouteChangeData;
}
export interface ExtensionVisualizationDataMessage {
    type: ExtensionNotificationType.VISUALIZATION_DATA;
    payload: RawVisualizationData;
}
export interface TileHostDataChangedMessage {
    type: ExtensionNotificationType.TILE_HOST_DATA;
    payload: Partial<TileHostData>;
}
export declare type ExtensionNotification = ExtensionInitializeMessage | ExtensionRouteChangedMessage | ExtensionVisualizationDataMessage | TileHostDataChangedMessage;
export interface RouteChangeData {
    route?: string;
    routeState?: any;
}
export declare type HostType = 'standard' | 'embed' | 'spartan';
export declare type MountType = 'fullscreen' | undefined;
export declare enum MountPoint {
    standalone = "standalone",
    dashboardVisualization = "dashboard-visualization",
    dashboardTile = "dashboard-tile",
    dashboardTilePopup = "dashboard-tile-popup"
}
export interface LookerHostData {
    extensionId: string;
    lookerVersion: string;
    route?: string;
    routeState?: any;
    hostUrl?: string;
    hostOrigin?: string;
    hostType?: HostType;
    mountType?: MountType;
    mountPoint: MountPoint;
    contextData?: string;
    isRendering?: boolean;
    extensionDashboardTileEnabled: boolean;
}
export interface ExtensionInitializationResponse {
    extensionSdkVersion: string;
    errorMessage?: string;
}
export interface ExtensionHostConfiguration {
    initializedCallback?: (errorMessage?: string) => void;
    setInitialRoute?: (route: string, routeState?: any) => void;
    requiredLookerVersion?: string;
    hostChangedRoute?: (route: string, routeState?: any) => void;
    chattyTimeout?: number;
    visualizationDataReceivedCallback?: VisualizationDataReceivedCallback;
    tileHostDataChangedCallback?: TileHostDataChangedCallback;
}
export interface ExtensionHostApiConfiguration extends ExtensionHostConfiguration {
    chattyHost: ChattyHostConnection;
}
export interface FetchCustomParameters {
    method?: 'POST' | 'GET' | 'DELETE' | 'PATCH' | 'PUT' | 'HEAD';
    headers?: Record<string, string>;
    body?: string;
    credentials?: 'omit' | 'same-origin' | 'include';
}
export interface FetchProxyDataResponse {
    ok: boolean;
    status: number;
    statusText?: string;
    headers: Record<string, string>;
    body?: any;
}
export interface FetchProxy {
    fetchProxy(resource: string, init?: FetchCustomParameters, responseBodyType?: FetchResponseBodyType): Promise<FetchProxyDataResponse>;
}
export interface ExtensionSDK {
    lookerHostData?: Readonly<LookerHostData>;
    createSecretKeyTag(keyName: string): string;
    verifyHostConnection(): Promise<boolean>;
    updateTitle(title: string): void;
    updateLocation(url: string, state?: any, target?: string): void;
    openBrowserWindow(url: string, target?: string): void;
    closeHostPopovers(): void;
    localStorageSetItem(name: string, value?: string): Promise<boolean>;
    localStorageRemoveItem(name: string): Promise<boolean>;
    localStorageGetItem(name: string): Promise<string | null>;
    clipboardWrite(value: string): Promise<void>;
    userAttributeSetItem(name: string, value?: string): Promise<boolean>;
    userAttributeGetItem(name: string): Promise<string | null>;
    userAttributeResetItem(name: string): Promise<void>;
    track(name: string, trackAction: string, attributes?: Record<string, any>): void;
    error(errorEvent: ErrorEvent): void;
    clientRouteChanged(route: string, routeState?: any): void;
    getContextData(): any;
    saveContextData(contextData: any): Promise<any>;
    refreshContextData(): Promise<any>;
    createFetchProxy(baseUrl?: string, init?: FetchCustomParameters, responseBodyType?: FetchResponseBodyType): FetchProxy;
    fetchProxy(resource: string, init?: FetchCustomParameters, responseBodyType?: FetchResponseBodyType): Promise<FetchProxyDataResponse>;
    serverProxy(resource: string, init?: FetchCustomParameters, responseBodyType?: FetchResponseBodyType): Promise<FetchProxyDataResponse>;
    oauth2Authenticate(authEndpoint: string, authParameters: Record<string, string>, httpMethod?: string): Promise<any>;
    oauth2ExchangeCodeForToken(authEndpoint: string, authParameters: Record<string, string>): Promise<any>;
    spartanLogout(): void;
    rendered(failureMessage?: string): void;
    visualizationSDK: VisualizationSDK;
    tileSDK: TileSDK;
    isDashboardMountSupported: boolean;
}
