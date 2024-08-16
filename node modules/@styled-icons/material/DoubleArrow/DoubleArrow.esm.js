import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var DoubleArrow = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M15.5 5H11l5 7-5 7h4.5l5-7z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 5H4l5 7-5 7h4.5l5-7z"
  }));
});
DoubleArrow.displayName = 'DoubleArrow';
export var DoubleArrowDimensions = {
  height: 24,
  width: 24
};