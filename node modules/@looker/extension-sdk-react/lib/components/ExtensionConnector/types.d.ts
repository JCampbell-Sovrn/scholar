import type { ReactNode } from 'react';
import type { ExtensionHostApi, ExtensionSDK, RawVisualizationData, TileHostData, TileSDK, VisualizationSDK, LookerHostData } from '@looker/extension-sdk';
export interface BaseExtensionContextData {
    extensionSDK: ExtensionSDK;
    lookerHostData?: Readonly<LookerHostData>;
    initializeError?: string;
    route: string;
    routeState?: any;
    visualizationData?: Readonly<RawVisualizationData>;
    visualizationSDK: VisualizationSDK;
    tileHostData: Readonly<TileHostData>;
    tileSDK: TileSDK;
}
export interface RouteData {
    route: string;
    routeState?: any;
}
export interface ExtensionProviderProps {
    hostTracksRoute?: boolean;
    onPathnameChange?: (pathname: string) => void;
    onRouteChange?: (route: string, routeState?: any) => void;
    loadingComponent?: JSX.Element;
    requiredLookerVersion?: string;
    chattyTimeout?: number;
    children?: ReactNode;
}
export interface ExtensionConnectorProps extends ExtensionProviderProps {
    contextData: BaseExtensionContextData;
    connectedCallback: (extensionSDK: ExtensionHostApi) => void;
    updateContextData: (contextData: Partial<BaseExtensionContextData>) => void;
    unloadedCallback: () => void;
}
