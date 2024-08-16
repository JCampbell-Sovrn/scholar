let _ = t => t,
  _t,
  _t2,
  _t3;
const _excluded = ["align", "justify"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import styled, { css } from 'styled-components';
import { flexbox, shouldForwardProp } from '@looker/design-tokens';
import { commonLayoutCSS } from '../../utils/common';
export const defaultGap = 'u4';
const getFlexValue = value => value && ['end', 'start'].includes(value) ? `flex-${value}` : value;
const getSpaceValue = ({
  around,
  between,
  evenly
}) => {
  if (around) return 'space-around';
  if (between) return 'space-between';
  if (evenly) return 'space-evenly';
  return false;
};
const justifyContent = _ref => {
  let {
      align,
      justify
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  const spaceValue = getSpaceValue(rest);
  if (spaceValue || justify && align !== 'stretch') {
    return css(_t || (_t = _`
      justify-content: ${0};
    `), spaceValue || getFlexValue(justify));
  }
  return false;
};
export const spaceCSS = css(_t2 || (_t2 = _`
  ${0}
  ${0}

  display: flex;

  ${0}
  ${0}
`), commonLayoutCSS, flexbox, ({
  align
}) => align && `align-items: ${getFlexValue(align)};`, justifyContent);
export const Space = styled.div.withConfig({
  shouldForwardProp,
  displayName: "Space",
  componentId: "sc-paugcr-0"
}).attrs(({
  align: _align = 'center',
  width: _width = '100%'
}) => ({
  align: _align,
  width: _width
}))(_t3 || (_t3 = _`
  ${0}
  flex-direction: ${0};
  /* gap throws off spacing for around & evenly */
  ${0}
`), spaceCSS, ({
  reverse
}) => reverse ? 'row-reverse' : 'row', ({
  around,
  evenly,
  gap: _gap = defaultGap,
  theme: {
    space
  }
}) => !around && !evenly && `gap: 0 ${space[_gap]};`);
//# sourceMappingURL=Space.js.map