"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMessage = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var ErrorMessage = _ref => {
  var {
    errorMessage
  } = _ref;
  return _react.default.createElement("div", {
    id: "extension-initialization-error",
    "aria-live": "polite",
    role: "status",
    style: {
      width: '100%',
      margin: '-8px',
      padding: '12px 16px',
      background: '#FFE5E9',
      borderRadius: '4px',
      font: '0.875rem "Helvetica", san-serif'
    }
  }, errorMessage);
};
exports.ErrorMessage = ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map