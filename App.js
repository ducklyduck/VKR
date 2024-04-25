import { registerRootComponent } from 'expo'
import React from 'react'
import 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { GluestackUIProvider, Text, Box } from '@gluestack-ui/themed'
import { config } from '@gluestack-ui/config'
import TaskList from './src/data_base/TaskList'
import Tabs from './src/components/Tabs'

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config}>
        <Tabs TaskList={TaskList} />
      </GluestackUIProvider>
    </GestureHandlerRootView>
  )
}

registerRootComponent(App)

export default App
