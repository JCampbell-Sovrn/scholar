let _ = t => t,
  _t;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { useID } from '../../../utils';
import { useFormContext } from '../../Form';
import { InputColor } from '../../Inputs/InputColor/InputColor';
import { FloatingLabelField, omitFieldProps, pickFieldProps } from '../Field';
const FieldColorComponent = forwardRef((props, ref) => {
  const id = useID(props.id);
  const validationMessage = useFormContext(props);
  return React.createElement(FloatingLabelField, _extends({
    hasValue: !!props.defaultValue || !!props.value,
    labelOffset: "24px",
    id: id,
    ariaLabelOnly: true,
    validationMessage: validationMessage
  }, pickFieldProps(props)), React.createElement(InputColor, _extends({}, omitFieldProps(props), {
    id: id,
    "aria-labelledby": `labelledby-${id}`,
    "aria-describedby": `describedby-${id}`,
    validationType: validationMessage && validationMessage.type,
    ref: ref
  })));
});
FieldColorComponent.displayName = 'FieldColorComponent';
export const FieldColor = styled(FieldColorComponent).withConfig({
  displayName: "FieldColor",
  componentId: "sc-1c3obju-0"
})(_t || (_t = _``));
//# sourceMappingURL=FieldColor.js.map