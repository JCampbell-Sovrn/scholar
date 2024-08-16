import type { Callback, CallbackStore } from './types';
import { ChattyClient } from './client';
/**
 * Provides methods to define the properties of a [[ChattyClient]]
 */
export declare class ChattyClientBuilder {
    private _targetOrigin;
    private _handlers;
    private _defaultTimeout;
    get targetOrigin(): string;
    get handlers(): CallbackStore;
    get defaultTimeout(): number;
    /**
     * Removes an event handler to the client.
     *
     * @param name Event name
     * @param fn Callback function to remove
     * @returns the client builder
     */
    off(name: string, fn: Callback): void;
    /**
     * Adds an event handler to the client.
     *
     * @param name Event name to which to listen.
     * @param fn Callback function that is invoked when the event
     * is received, and accepts any parameters that were passed with the event.
     * If the event received is sent using [[ChattyHostConnection.sendAndReceive]], its return value is
     * included in the array that will be passed to the resolved promise.
     * @returns the client builder
     */
    on(name: string, fn: Callback): this;
    /**
     * Sets the default period of time a [[ChattyClientConnection.sendAndReceive]] message will wait.
     * Use a negative number to wait indefinitely.
     * The default is 30000ms
     *
     * @param timeout in milliseconds
     * @returns the client builder
     */
    withDefaultTimeout(timeout: number): this;
    /**
     * Optional. Sets the target origin parameter used to communicate with the host. Default
     * is '*'. If possible it should be set the the host window's origin.
     *
     * @param targetOrigin targetOrigin to use with postMessage()
     * @returns the client builder
     */
    withTargetOrigin(targetOrigin: string): this;
    /**
     * Builds a [[ChattyClient]] with the provided properties.
     * @returns a new Chatty client.
     */
    build(): ChattyClient;
}
