let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
const _excluded = ["className", "defaultValue", "onChange", "placeholder", "type", "value"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useState } from 'react';
import isFunction from 'lodash/isFunction';
import styled from 'styled-components';
import { omitStyledProps, typography } from '@looker/design-tokens';
import { pickInputProps } from '../InputProps';
import { innerInputStyle } from '../innerInputStyle';
const InlineInputTextLayout = forwardRef((_ref, ref) => {
  let {
      className,
      defaultValue,
      onChange,
      placeholder,
      type = 'text',
      value: valueProp
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const [value, setValueChange] = useState(valueProp || defaultValue || '');
  const displayValue = isFunction(onChange) ? valueProp : value;
  const handleValueChange = event => {
    setValueChange(event.target.value);
  };
  const handleChange = isFunction(onChange) ? onChange : handleValueChange;
  return React.createElement("span", {
    className: className
  }, React.createElement(StyledInput, _extends({
    onChange: handleChange,
    value: displayValue,
    placeholder: placeholder,
    type: type,
    ref: ref
  }, omitStyledProps(pickInputProps(props)))), React.createElement(StyledText, null, displayValue || placeholder || ' '));
});
const StyledInput = styled.input.withConfig({
  displayName: "InlineInputText__StyledInput",
  componentId: "sc-1nk1o3l-0"
})(_t || (_t = _`
  ${0}
  cursor: ${0};
  font: inherit;
  left: 0;
  padding: 0;
  position: absolute;
  text-align: inherit;
  text-transform: inherit;
  top: 0;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    appearance: none;
  }
  &[type='number'] {
    appearance: textfield;
  }
`), innerInputStyle, ({
  readOnly,
  disabled
}) => readOnly || disabled ? 'not-allowed' : undefined);
const StyledText = styled.span.withConfig({
  displayName: "InlineInputText__StyledText",
  componentId: "sc-1nk1o3l-1"
})(_t2 || (_t2 = _`
  align-self: center;
  color: transparent;
  line-height: inherit;
  /* max-width & overflow keep this span from blocking the x button
  in InputSearch, etc, with autoResize and maxWidth */
  max-width: 100%;
  overflow: hidden;
  text-align: inherit;
  white-space: pre;
`));
export const InlineInputTextBase = styled(InlineInputTextLayout).withConfig({
  displayName: "InlineInputText__InlineInputTextBase",
  componentId: "sc-1nk1o3l-2"
})(_t3 || (_t3 = _`
  display: inline-flex;
  justify-content: center;
  min-width: 2rem;
  position: relative;
`));
export const InlineInputText = styled(InlineInputTextBase).withConfig({
  displayName: "InlineInputText",
  componentId: "sc-1nk1o3l-3"
})(_t4 || (_t4 = _`
  ${0}
  border: none;
  border-bottom: 1px dashed;
  border-bottom-color: ${0};
  color: inherit;
  flex-direction: column;
  max-width: 100%;
  overflow: hidden;
  text-align: inherit;

  :focus,
  :hover {
    background-color: ${0};
    border-bottom-color: ${0};
    outline: none;
  }

  :focus {
    border-bottom-style: solid;
  }

  :disabled,
  :hover {
    border-bottom-color: ${0};
  }

  :hover {
    border-bottom-color: ${0};
  }

  input:disabled {
    color: ${0};
    -webkit-text-fill-color: ${0};
  }
`), typography, ({
  theme,
  underlineOnlyOnHover,
  simple,
  readOnly
}) => underlineOnlyOnHover || simple || readOnly ? 'transparent' : theme.colors.ui3, ({
  theme
}) => theme.colors.ui1, ({
  theme
}) => theme.colors.key, ({
  theme
}) => theme.colors.text1, ({
  readOnly
}) => readOnly && 'transparent', ({
  theme
}) => theme.colors.text1, ({
  theme
}) => theme.colors.text1);
//# sourceMappingURL=InlineInputText.js.map