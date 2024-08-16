
import React from 'react'
import { scholar } from './scholar'
import { ExtensionProvider } from '@looker/extension-sdk-react'
import { hot } from 'react-hot-loader/root'

export const App = hot(() => {
  return (
    <ExtensionProvider>
      <scholar/>
    </ExtensionProvider>
  )
})
