import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var PriorityHigh = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 19,
    r: 2
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 3h4v12h-4z"
  }));
});
PriorityHigh.displayName = 'PriorityHigh';
export var PriorityHighDimensions = {
  height: 24,
  width: 24
};