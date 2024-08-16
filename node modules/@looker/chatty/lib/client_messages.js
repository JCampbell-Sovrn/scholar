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
exports.ChattyClientMessages = void 0;
/**
 * The recognized set of events that are sent from the client to the host.
 * @private
 */
// IMPORTANT - ALWAYS add new members at the END of the enum. Failure to do
// so will break interaction with a different version of chatty.
var ChattyClientMessages;
(function (ChattyClientMessages) {
    /** First part of handshake message */
    ChattyClientMessages[ChattyClientMessages["Syn"] = 0] = "Syn";
    /** Final part of handshake message */
    ChattyClientMessages[ChattyClientMessages["Ack"] = 1] = "Ack";
    /** Normal message */
    ChattyClientMessages[ChattyClientMessages["Message"] = 2] = "Message";
    /** Message that expects a response */
    ChattyClientMessages[ChattyClientMessages["MessageWithResponse"] = 3] = "MessageWithResponse";
    /** Response */
    ChattyClientMessages[ChattyClientMessages["Response"] = 4] = "Response";
    /** Asynchronous error response */
    ChattyClientMessages[ChattyClientMessages["ResponseError"] = 5] = "ResponseError";
    /** Abort message */
    ChattyClientMessages[ChattyClientMessages["AbortMessage"] = 6] = "AbortMessage";
})(ChattyClientMessages = exports.ChattyClientMessages || (exports.ChattyClientMessages = {}));
