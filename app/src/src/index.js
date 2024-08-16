/*

INDEX.JS

 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App.js';

// Import scholar.js to include it in the bundle
import './scholar.js';

window.addEventListener('DOMContentLoaded', (event) => {
  const root = document.createElement('div');
  root.style.height = '100%';
  document.body.appendChild(root);
  ReactDOM.render(<App />, root);
});

