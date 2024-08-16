"use strict";
/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChattyHostMessages = void 0;
/**
 * The recognized set of messages that are sent from the host to the client.
 * @private
 */
// IMPORTANT - ALWAYS add new members at the END of the enum. Failure to do
// so will break interaction with a different version of chatty.
var ChattyHostMessages;
(function (ChattyHostMessages) {
    /** Acknowledge client connection */
    ChattyHostMessages[ChattyHostMessages["SynAck"] = 0] = "SynAck";
    /** Normal message */
    ChattyHostMessages[ChattyHostMessages["Message"] = 1] = "Message";
    /** Message that expects a response */
    ChattyHostMessages[ChattyHostMessages["MessageWithResponse"] = 2] = "MessageWithResponse";
    /** Response  */
    ChattyHostMessages[ChattyHostMessages["Response"] = 3] = "Response";
    /** Asynchronous error response */
    ChattyHostMessages[ChattyHostMessages["ResponseError"] = 4] = "ResponseError";
    /** Abort message */
    ChattyHostMessages[ChattyHostMessages["AbortMessage"] = 5] = "AbortMessage";
})(ChattyHostMessages = exports.ChattyHostMessages || (exports.ChattyHostMessages = {}));
