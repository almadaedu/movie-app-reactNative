import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler'
import Routes from './src/routes'
import { NavigationContainer } from "@react-navigation/native";


function App(){
  return(
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Routes />
    </NavigationContainer>
  )
}

export default App;