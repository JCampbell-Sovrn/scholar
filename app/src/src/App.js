
import React from 'react'
import { scholar } from './scholar.js'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { hot } from 'react-hot-loader/root'

import './scholar.js';

export const App = hot(() => {
  return (
    <ExtensionProvider>
      <scholar/>
    </ExtensionProvider>
  )
})
