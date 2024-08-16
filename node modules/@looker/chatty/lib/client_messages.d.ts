/**
 * The recognized set of events that are sent from the client to the host.
 * @private
 */
export declare enum ChattyClientMessages {
    /** First part of handshake message */
    Syn = 0,
    /** Final part of handshake message */
    Ack = 1,
    /** Normal message */
    Message = 2,
    /** Message that expects a response */
    MessageWithResponse = 3,
    /** Response */
    Response = 4,
    /** Asynchronous error response */
    ResponseError = 5,
    /** Abort message */
    AbortMessage = 6
}
