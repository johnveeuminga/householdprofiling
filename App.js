
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import Masterlist from './screens/Masterlist'
import Login from './screens/Login';

const Stack = createStackNavigator();

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
      <Stack.Navigator initialRouteName = 'Login' screenOptions={{headerShown: false  }}>
         <Stack.Screen name="Masterlist" component={Masterlist} />
         <Stack.Screen name="Login" component={Login} />

       </Stack.Navigator>
      </NavigationContainer>

    )
  }
}
export default App
