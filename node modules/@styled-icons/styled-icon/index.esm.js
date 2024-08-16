import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "iconAttrs", "iconVerticalAlign", "iconViewBox", "size", "title"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
import * as React from 'react';
import styled from 'styled-components';
var StyledIconBaseBase = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var children = props.children,
    iconAttrs = props.iconAttrs,
    iconVerticalAlign = props.iconVerticalAlign,
    iconViewBox = props.iconViewBox,
    size = props.size,
    title = props.title,
    otherProps = _objectWithoutProperties(props, _excluded);
  var iconProps = _objectSpread(_objectSpread({
    viewBox: iconViewBox,
    height: props.height !== undefined ? props.height : size,
    width: props.width !== undefined ? props.width : size,
    'aria-hidden': title == null ? 'true' : undefined,
    focusable: 'false',
    role: title != null ? 'img' : undefined
  }, iconAttrs), otherProps);
  return /*#__PURE__*/React.createElement("svg", _extends({}, iconProps, {
    ref: ref
  }), title && /*#__PURE__*/React.createElement("title", {
    key: "icon-title"
  }, title), children);
});
export var StyledIconBase = /*#__PURE__*/styled(StyledIconBaseBase).withConfig({
  displayName: "StyledIconBase",
  componentId: "sc-ea9ulj-0"
})(["display:inline-block;vertical-align:", ";overflow:hidden;"], function (props) {
  return props.iconVerticalAlign;
});