"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _designTokens = require("@looker/design-tokens");
var _simple = require("../Layout/utils/simple");
var _useAccordion2 = require("../Accordion2/useAccordion2");
var _accordionDimensions = require("../Accordion2/accordionDimensions");
var _AccordionLegacy = require("./AccordionLegacy");
var _AccordionDisclosure = require("./AccordionDisclosure");
var _AccordionContent = require("./AccordionContent");
var _templateObject;
var _excluded = ["content", "children", "isOpen", "toggleOpen"],
  _excluded2 = ["children"],
  _excluded3 = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var AccordionInternal = function AccordionInternal(_ref) {
  var children = _ref.content,
    label = _ref.children,
    propsIsOpen = _ref.isOpen,
    propsToggleOpen = _ref.toggleOpen,
    props = _objectWithoutProperties(_ref, _excluded);
  if (propsIsOpen && propsToggleOpen === undefined || propsIsOpen === undefined && propsToggleOpen) {
    console.warn('Please provide both an isOpen prop and a toggleOpen prop if you wish to control a Accordion state. If you would like an uncontrolled Accordion, avoid passing in either prop into your Accordion element.');
  }
  if (!label) {
    console.warn("<Accordion>'s child is falsy (i.e. undefined, null, false, etc). Please give <Accordion> a valid ReactNode child.");
  }
  var controlledProps = propsIsOpen && propsToggleOpen ? {
    isOpen: propsIsOpen,
    toggleOpen: propsToggleOpen
  } : {};
  var _useAccordion = (0, _useAccordion2.useAccordion2)(_objectSpread(_objectSpread({
      children: children,
      label: label
    }, controlledProps), props)),
    contentDomProps = _useAccordion.contentDomProps,
    domProps = _useAccordion.domProps,
    disclosureProps = _useAccordion.disclosureProps,
    isOpen = _useAccordion.isOpen;
  if ((0, _AccordionLegacy.isLegacyComposition)(label)) {
    var _children1 = contentDomProps.children,
      restContentDomProps = _objectWithoutProperties(contentDomProps, _excluded2);
    var _children2 = disclosureProps.children,
      restDisclosureProps = _objectWithoutProperties(disclosureProps, _excluded3);
    return _react["default"].createElement(_AccordionLegacy.AccordionLegacy, _extends({}, domProps, {
      contentDomProps: restContentDomProps,
      disclosureProps: restDisclosureProps,
      isOpen: isOpen
    }), label);
  } else {
    return _react["default"].createElement("div", domProps, _react["default"].createElement(_AccordionDisclosure.AccordionDisclosure, disclosureProps), isOpen && _react["default"].createElement(_AccordionContent.AccordionContent, contentDomProps));
  }
};
var Accordion = (0, _styledComponents["default"])(AccordionInternal).withConfig({
  displayName: "Accordion",
  componentId: "sc-egrkwf-0"
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: ", ";\n  width: 100%;\n\n  ", ", ", " {\n    ", "\n    ", "\n    ", "\n  }\n"])), function (_ref2) {
  var theme = _ref2.theme,
    density = _ref2.density;
  return theme.fontSizes[(0, _accordionDimensions.accordionDimensions)(density || theme.defaults.density).fontSize];
}, _AccordionDisclosure.AccordionDisclosure, _AccordionContent.AccordionContent, _designTokens.textColor, _simple.simpleLayoutCSS, _designTokens.typography);
exports.Accordion = Accordion;
//# sourceMappingURL=Accordion.js.map