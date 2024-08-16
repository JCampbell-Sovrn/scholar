import type { Callback, CallbackStore } from './types';
import { ChattyHost } from './host';
/**
 * Provides methods to define the properties of a [[ChattyHost]]
 */
export declare class ChattyHostBuilder {
    private _url?;
    private _source?;
    private _appendTo;
    private _handlers;
    private _sandboxAttrs;
    private _allowAttrs;
    private _frameBorder;
    private _targetOrigin;
    private _defaultTimeout;
    /** @hidden */
    constructor(_url?: string | undefined, _source?: string | undefined);
    get el(): HTMLElement;
    get handlers(): CallbackStore;
    get sandboxAttrs(): string[];
    get allowAttrs(): string[];
    get targetOrigin(): string | null;
    get url(): string | undefined;
    get source(): string | undefined;
    get defaultTimeout(): number;
    /**
     * @param el the HTML element that the iframe will live inside. The iframe will be created as
     * a direct child of the element.
     * @returns the host builder
     */
    appendTo(el: HTMLElement): this;
    /**
     * Removes an event handler to the host.
     *
     * @param name Event name
     * @param fn Callback function to remove.
     * @returns the host builder
     */
    off(name: string, fn: Callback): void;
    /**
     * Adds an event handler to the host.
     *
     * @param name Event name to which to listen.
     * @param fn Callback function that is invoked when the event
     * is received, and accepts any parameters that were passed with the event. If the event
     * received is sent using [[ChattyClientConnection.sendAndReceive]], its return value is included
     * in the array that will be passed to the resolved promise.
     * @returns the host builder
     */
    on(name: string, fn: Callback): this;
    /**
     * Sets the default period of time a [[ChattyHostConnection.sendAndReceive]] message will wait.
     * Use a negative number to wait indefinitely.
     *
     * @param timeout in milliseconds
     * @returns the host builder
     */
    withDefaultTimeout(timeout: number): this;
    /** @deprecated The frame-board attribute is deprecated, use CSS instead */
    getFrameBorder(): string;
    /** @deprecated The frame-board attribute is deprecated, use CSS instead */
    frameBorder(attr: string): this;
    /** @deprecated Replaced by [[withSandboxAttribute]] */
    sandbox(attr: string): this;
    /**
     * Create the iframe with the given sandbox attribute
     *
     * @param attr The sandbox attribute
     */
    withSandboxAttribute(attr: string): this;
    /**
     * Create the iframe with the given allow attribute
     *
     * @param attr The sandbox attribute
     */
    withAllowAttribute(attr: string): this;
    /**
     * Use `targetOrigin` as the value for postMessage(). See
     * [Window.postMessage()](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)
     * for details.
     *
     * @param targetOrigin
     */
    withTargetOrigin(targetOrigin: string): this;
    /**
     * Builds a [[ChattyHost]] with the provided properties.
     */
    build(): ChattyHost;
}
