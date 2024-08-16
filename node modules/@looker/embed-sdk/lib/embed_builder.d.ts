import type { ChattyHostConnection, CallbackStore } from '@looker/chatty';
import { EmbedClient } from './embed';
import type { LookerAuthConfig, LookerEmbedEventMap, LookerEmbedFilterParams, CookielessCallback, CookielessRequestInit } from './types';
declare type EmbedClientConstructor<T> = {
    new (host: ChattyHostConnection): T;
};
interface LookerEmbedHostSettings {
    apiHost: string;
    auth?: LookerAuthConfig;
    acquireSession?: CookielessCallback | string | CookielessRequestInit;
    generateTokens?: CookielessCallback | string | CookielessRequestInit;
}
export interface UrlParams {
    [key: string]: string | string[];
}
/**
 * The builder class for [[EmbedClient]]. Contains methods for defining the properties of embedded
 * Looker content.
 */
export declare class EmbedBuilder<T> {
    private _hostSettings;
    private _type;
    private _endpoint;
    private _clientConstructor;
    private _handlers;
    private _appendTo;
    private _sandboxAttrs;
    private _allowAttrs;
    private _classNames;
    private _frameBorder;
    private _id?;
    private _params;
    private _suffix;
    private _url?;
    private _sandboxedHost?;
    private _scrollMonitor?;
    private _dynamicIFrameHeight?;
    private _dialogScroll?;
    /**
     * @hidden
     */
    constructor(_hostSettings: LookerEmbedHostSettings, _type: string, _endpoint: string, _clientConstructor: EmbedClientConstructor<T>);
    /**
     * Value for the `frame-border` attribute of an embedded iframe
     */
    withFrameBorder(attr: string): this;
    /**
     * @hidden
     *
     * @param id
     */
    withId(id: number | string): this;
    /**
     * Allows manual control of URL parameters for the embedded content
     *
     * @param params Additional URL parameters
     * created by ID.
     */
    withParams(params: UrlParams): this;
    /**
     * Allows specifying initial filters to apply to the embedded content.
     *
     * @filters Filters to apply
     */
    withFilters(filters: LookerEmbedFilterParams, escape?: boolean): this;
    /**
     * Allows specifying sandbox attributes for an embedded content iframe. Sandbox attributes
     * should include `allow-scripts` or embedded content will not execute.
     * @param attr one or more sandbox attributes for an embedded content iframe.
     */
    withSandboxAttr(...attr: string[]): this;
    /**
     * Allows specifying allow attributes (for example fullscreen) for an embedded content iframe.
     * @param attr one or more allow attributes for an embedded content iframe.
     */
    withAllowAttr(...attr: string[]): this;
    /**
     * Allows specifying classes for an embedded content
     * @param className one or more sandbox attributes for an embedded content.
     */
    withClassName(...className: string[]): this;
    /**
     * Allows specifying next generation content
     *
     * @param suffix Next generation suffix. Defaults to '-next'.
     */
    withNext(suffix?: string): this;
    /**
     * Allows specifying a theme for the content.
     *
     * @param theme Theme name
     */
    withTheme(theme: string): this;
    /**
     * Monitors scroll position and informs the embedded Looker IFRAME
     * of the current scroll position and the offset of the containing
     * IFRAME within the window. Looker uses this information to position
     * dialogs within the users viewport.
     *
     * Requires Looker >=23.6.0
     *
     * @param monitor defaults to true
     *
     */
    withScrollMonitor(monitor?: boolean): this;
    /**
     * Listens for page changed events from the embedded Looker IFRAME
     * and updates the height of the IFRAME.
     *
     * @param dynamicIFrameHeight defaults to true
     */
    withDynamicIFrameHeight(dynamicIFrameHeight?: boolean): this;
    /**
     * Listens for covering dialogs being opened in the Looker IFRAME
     * and scrolls the top of dialog into view.
     *
     * @param dialogScroll defaults to true
     */
    withDialogScroll(dialogScroll?: boolean): this;
    /**
     * Allows api host to be specified
     *
     * @param apiHost
     */
    withApiHost(apiHost: string): this;
    /**
     * Allows auth url to be specified
     *
     * @param authUrl URL to endpoint that can sign Looker SSO URLs
     */
    withAuthUrl(authUrl: string): this;
    /**
     * Allows auth url to be specified
     *
     * @param auth
     */
    withAuth(auth: LookerAuthConfig): this;
    /**
     * @hidden
     *
     * @param url
     */
    withUrl(url: string): this;
    /**
     * @hidden
     */
    set sandboxedHost(sandboxedHost: boolean);
    /**
     * @hidden
     */
    get sandboxedHost(): boolean;
    /**
     * The element to append the embedded content to.
     */
    get el(): HTMLElement;
    /**
     * the frame-border attribute to apply to the iframe
     */
    get frameBorder(): string;
    /**
     * The endpoint used to load content
     */
    get endpoint(): string;
    /**
     * The type of embedded content, dashboard, look, and explore
     */
    get type(): string;
    /**
     * The address of the Looker instance being used
     */
    get apiHost(): string;
    /**
     * Is cookieless embedding being used
     */
    get isCookielessEmbed(): boolean;
    /**
     * Cookieless embed acquire session
     */
    get acquireSession(): string | CookielessCallback | CookielessRequestInit | undefined;
    /**
     * Cookieless embed generate tokens
     */
    get generateTokens(): string | CookielessCallback | CookielessRequestInit | undefined;
    /**
     * The content URL of this embedded content, if provided
     */
    get url(): string | null | undefined;
    /**
     * The auth URL of this embedded content, if provided
     * @deprecated
     */
    get authUrl(): string | undefined;
    /**
     * The auth config of this embedded content, if provided
     */
    get auth(): LookerAuthConfig | undefined;
    /**
     * @hidden
     */
    get embedUrl(): string;
    /**
     * @hidden
     */
    get handlers(): CallbackStore;
    /**
     * The sandbox attributes of an embedded content iframe, if provided
     */
    get sandboxAttrs(): string[];
    /**
     * The allowed attributes of an embedded content iframe, if provided
     */
    get allowAttrs(): string[];
    /**
     * The classnames to apply to the embedded content
     */
    get classNames(): string[];
    /**
     * The the suffix to append to the content type portion of the url
     */
    get suffix(): string;
    /**
     * The ID of this embedded content, if provided
     */
    get id(): string | number | undefined;
    /**
     * Whether scrolling is monitored
     */
    get scrollMonitor(): boolean | undefined;
    /**
     * Whether IFRAME height is to be dynamically updated
     */
    get dynamicIFrameHeight(): boolean | undefined;
    /**
     * Whether cover dialogs tops are to be scrolled into view
     */
    get dialogScroll(): boolean | undefined;
    /**
     * @hidden
     */
    get clientConstructor(): EmbedClientConstructor<T>;
    /**
     * Select an element to append the embedded content to, either a content selector or
     * the DOM element.
     *
     * @param el
     */
    appendTo(el: HTMLElement | string): this;
    /**
     * Register an event handler.
     *
     * @typeparam K: A Looker embed event name
     * @param name: string Name of the event to respond to.
     * @param handler: Callback A callback method to be invoked when the message is received.
     */
    on<K extends keyof LookerEmbedEventMap>(name: K, handler: LookerEmbedEventMap[K]): this;
    /**
     * Constructs the embedded content, including creating the DOM element that contains the content.
     */
    build(): EmbedClient<T>;
}
export {};
