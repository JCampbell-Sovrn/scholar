import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var ViewSidebar = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M16 20H2V4h14v16zm2-12h4V4h-4v4zm0 12h4v-4h-4v4zm0-6h4v-4h-4v4z"
  }));
});
ViewSidebar.displayName = 'ViewSidebar';
export var ViewSidebarDimensions = {
  height: 24,
  width: 24
};