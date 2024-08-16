function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ThemeProvider, useTheme } from 'styled-components';
export const Density = ({
  scale,
  children
}) => {
  const theme = useTheme();
  theme.defaults.density = scale;
  return React.createElement(ThemeProvider, {
    theme: theme
  }, children);
};
export const Density1 = props => React.createElement(Density, _extends({
  scale: 1
}, props));
export const Density0 = props => React.createElement(Density, _extends({
  scale: 0
}, props));
export const DensityNegative1 = props => React.createElement(Density, _extends({
  scale: -1
}, props));
export const DensityNegative2 = props => React.createElement(Density, _extends({
  scale: -2
}, props));
export const DensityNegative3 = props => React.createElement(Density, _extends({
  scale: -3
}, props));
//# sourceMappingURL=Density.js.map