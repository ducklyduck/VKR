import { registerRootComponent } from 'expo'
import React from 'react'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import { Provider } from 'react-redux'
import { store } from './src/utils/store'
import Tabs from './src/components/Tabs'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        {/* <Provider store={store}> */}
          <Tabs />
        {/* </Provider> */}
      </GluestackUIProvider>
    </GestureHandlerRootView>
  )
}

registerRootComponent(App)

export default App
