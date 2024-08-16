import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var PlayArrow = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/React.createElement(StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 8.64 15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"
  }));
});
PlayArrow.displayName = 'PlayArrow';
export var PlayArrowDimensions = {
  height: 24,
  width: 24
};