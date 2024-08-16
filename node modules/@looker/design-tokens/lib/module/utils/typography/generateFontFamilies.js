import _defineProperty from "@babel/runtime/helpers/defineProperty";
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { fontFacesToFamily } from './fontFacesToFamily';
export const generateFontFamilies = (defaultFonts, fallbacks, customFonts) => {
  const fontFamilies = _objectSpread(_objectSpread({}, defaultFonts), pickBy(customFonts, identity));
  Object.entries(fontFamilies).map(([key, fontFace]) => fontFamilies[key] = fontFacesToFamily(fontFace, fallbacks[key]));
  return fontFamilies;
};
//# sourceMappingURL=generateFontFamilies.js.map