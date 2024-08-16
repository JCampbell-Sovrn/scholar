import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var AlignVerticalBottom = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 22H2v-2h20v2zM10 2H7v16h3V2zm7 6h-3v10h3V8z"
  }));
});
AlignVerticalBottom.displayName = 'AlignVerticalBottom';
export var AlignVerticalBottomDimensions = {
  height: 24,
  width: 24
};