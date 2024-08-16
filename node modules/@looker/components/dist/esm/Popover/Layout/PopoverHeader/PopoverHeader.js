let _ = t => t,
  _t;
const _excluded = ["children", "hideClose", "detail", "hidden"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useContext } from 'react';
import styled from 'styled-components';
import { DialogContext } from '../../../Dialog/DialogContext';
import { VisuallyHidden } from '../../../VisuallyHidden';
import { ModalHeaderCloseButton, ModalHeader } from '../../../Modal';
const PopoverHeaderLayout = _ref => {
  let {
      children,
      hideClose = false,
      detail,
      hidden = false
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const {
    id
  } = useContext(DialogContext);
  const headingId = id ? `${id}-heading` : undefined;
  return hidden ? React.createElement(VisuallyHidden, {
    id: headingId
  }, children) : React.createElement(ModalHeader, _extends({
    detail: detail || !hideClose && React.createElement(ModalHeaderCloseButton, {
      size: "small"
    }),
    fontSize: "small",
    fontWeight: "medium",
    id: headingId,
    pl: "large",
    pr: "medium",
    py: "small"
  }, props), children);
};
export const PopoverHeader = styled(PopoverHeaderLayout).withConfig({
  displayName: "PopoverHeader",
  componentId: "sc-1pomwz8-0"
})(_t || (_t = _``));
//# sourceMappingURL=PopoverHeader.js.map