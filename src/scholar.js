
import React, { useEffect, useState, useContext } from 'react'
import { Space, ComponentsProvider, Text } from '@looker/components'
import { ExtensionContext } from '@looker/extension-sdk-react'

export const scholar = () => {
  const { core40SDK } = useContext(ExtensionContext)
  const [message, setMessage] = useState()

  useEffect(() => {
    const initialize = async () => {
      try {
        const value = await core40SDK.ok(core40SDK.me())
        setMessage(`Hello, ${value.display_name}`)
      } catch (error) {
        setMessage('Error occured getting information about me!')
        console.error(error)
      }
    }
    initialize()
  }, [])

  return (
    <>
      <ComponentsProvider>
        <Space p="xxxxxlarge" width="100%" height="50vh" around>
          <Text p="xxxxxlarge" fontSize="xxxxxlarge">
            setMessage(`Hello, ${value.display_name}`).
          </Text>
        </Space>
      </ComponentsProvider>
    </>
  )
}