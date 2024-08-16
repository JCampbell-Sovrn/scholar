import type { ChattyClientBuilder } from './client_builder';
import 'es6-promise/auto';
/**
 * @private
 * Client connection status
 */
export declare enum ChattyClientStates {
    Connecting = 0,
    Syn = 1,
    Connected = 2
}
/**
 * The client connection to the host.
 */
export interface ChattyClientConnection {
    /**
     * Send a message to the host via a message channel.
     *
     * @param eventName The name of the event to send to the host
     * @param payload Additional data to send to host. Restricted to transferable objects, ownership of the
     * object will be transferred to the host.
     */
    send(eventName: string, ...payload: any[]): void;
    /**
     * Send a message to the host via a message channel, and then await a response. The event listener in
     * the host returns a value or a promise that is resolved at some later point. This call will timeout
     * if the default timeout is a positive number. An alternate mechanism is to pass in an options
     * [[Options]] object as the last function parameter. In this scenerio, the default timeout is
     * ignored. The caller can then implement their own timeout by utilizing the abort signal.
     *
     * @param eventName The name of the event to send to the host
     * @param payload Additional data to send to host. Restricted to transferable objects, ownership of the
     * object will be transferred to the host.
     * @param options [[Options]]. Options can include an AbortController signal to allow request to be
     *        cancelled. If signal is set, the defaultTimeout is ignored.
     * @returns A Promise that will resolve when the host event handler returns. The promise will reject
     * if no response is received within [[ChattyClientBuilder.withDefaultTimeout]] milliseconds. The
     * response will be an array containing all responses from any registered event handlers on the host.
     */
    sendAndReceive(eventName: string, ...payload: any[]): Promise<any[]>;
}
/**
 * The client object for an iframe. The user should not create this object directly, it
 * is returned by the [[ChattyClientBuilder.build]] method.
 */
export declare class ChattyClient {
    private static _debug;
    private _clientWindow;
    private _connection;
    private _channel;
    private _hostWindow;
    private _handlers;
    private _abortControllers;
    private _targetOrigin;
    private _state;
    private _defaultTimeout;
    private _sequence;
    private _receivers;
    /**
     * @param builder The client builder that is responsible for constructing this object.
     * @hidden
     */
    constructor(builder: ChattyClientBuilder);
    /**
     * @returns a Promise to an object that resolves when the host has acknowledged the connection.
     */
    get connection(): Promise<ChattyClientConnection> | null;
    /**
     * @returns a flag indicating whether the client has successfully connected to the host.
     */
    get isConnected(): boolean;
    /**
     * Connects to the host window.
     * @returns a Promise to an object that resolves when the host has acknowledged the connection. The
     * object implements the [[ChattyClientConnection]] interface that can be used to talk to the host.
     */
    connect(): Promise<ChattyClientConnection>;
    private initiateHandshake;
    private sendMsg;
}
