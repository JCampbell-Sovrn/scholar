import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var VerticalDistribute = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z"
  }));
});
VerticalDistribute.displayName = 'VerticalDistribute';
export var VerticalDistributeDimensions = {
  height: 24,
  width: 24
};