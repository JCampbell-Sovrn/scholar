import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var Title = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M5 5.5C5 6.33 5.67 7 6.5 7h4v10.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V7h4c.83 0 1.5-.67 1.5-1.5S18.33 4 17.5 4h-11C5.67 4 5 4.67 5 5.5z"
  }));
});
Title.displayName = 'Title';
export var TitleDimensions = {
  height: 24,
  width: 24
};