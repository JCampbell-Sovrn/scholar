import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import { StyledIconBase } from '@styled-icons/styled-icon';
export var WaterfallChart = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
    d: "M18 4h3v16h-3V4zM3 13h3v7H3v-7zm11-9h3v3h-3V4zm-4 1h3v4h-3V5zm-3 5h3v4H7v-4z"
  }));
});
WaterfallChart.displayName = 'WaterfallChart';
export var WaterfallChartDimensions = {
  height: 24,
  width: 24
};