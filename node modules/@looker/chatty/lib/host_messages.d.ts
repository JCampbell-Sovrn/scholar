/**
 * The recognized set of messages that are sent from the host to the client.
 * @private
 */
export declare enum ChattyHostMessages {
    /** Acknowledge client connection */
    SynAck = 0,
    /** Normal message */
    Message = 1,
    /** Message that expects a response */
    MessageWithResponse = 2,
    /** Response  */
    Response = 3,
    /** Asynchronous error response */
    ResponseError = 4,
    /** Abort message */
    AbortMessage = 5
}
