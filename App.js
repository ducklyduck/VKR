import { registerRootComponent } from 'expo'
import React from 'react'
import 'expo-dev-client'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
//Screens
import Tabs from './src/components/Tabs'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <Tabs />
      </GluestackUIProvider>
    </GestureHandlerRootView>
  )
}

registerRootComponent(App)

export default App
