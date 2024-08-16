import "core-js/modules/es.object.assign.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var UserAttributes = React.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return React.createElement(StyledIconBase, _extends({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), React.createElement("rect", {
    x: 14,
    y: 10,
    width: 2,
    height: 2
  }), React.createElement("rect", {
    x: 14,
    y: 14,
    width: 2,
    height: 2
  }), React.createElement("rect", {
    x: 18,
    y: 10,
    width: 4,
    height: 2
  }), React.createElement("rect", {
    x: 18,
    y: 14,
    width: 4,
    height: 2
  }), React.createElement("rect", {
    x: 14,
    y: 18,
    width: 2,
    height: 2
  }), React.createElement("rect", {
    x: 18,
    y: 18,
    width: 4,
    height: 2
  }), React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 20V18.5H2.5V17.25C2.5 16.71 5.06 15.5 7.5 15.5C9.28609 15.5 11.1365 16.1484 12 16.7077V15C10.57 14.33 8.7 14 7.5 14C5.33 14 1 15.08 1 17.25V20H12ZM11 9.5C11 11.43 9.43 13 7.5 13C5.57 13 4 11.43 4 9.5C4 7.57 5.57 6 7.5 6C9.43 6 11 7.57 11 9.5ZM9.5 9.5C9.5 8.4 8.6 7.5 7.5 7.5C6.4 7.5 5.5 8.4 5.5 9.5C5.5 10.6 6.4 11.5 7.5 11.5C8.6 11.5 9.5 10.6 9.5 9.5Z"
  }));
});
UserAttributes.displayName = 'UserAttributes';
export var UserAttributesDimensions = {
  height: 24,
  width: 24
};
//# sourceMappingURL=UserAttributes.js.map