import React from 'react';
import { SelectMulti } from '..';
export default function CloseOnSelect() {
  return React.createElement(SelectMulti, {
    options: [{
      value: 'Cheddar'
    }, {
      value: 'Gouda'
    }, {
      value: 'Swiss'
    }, {
      value: 'Feta'
    }, {
      value: 'Mascarpone'
    }, {
      value: 'Brie'
    }, {
      value: 'Mozzarella'
    }, {
      value: 'Cotija'
    }, {
      value: 'Pepperjack'
    }],
    defaultValues: ['Swiss', 'Brie'],
    closeOnSelect: true
  });
}
//# sourceMappingURL=CloseOnSelect.js.map