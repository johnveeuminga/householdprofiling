import React from 'react';
import {Text, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './screens/form'
import Home from './screens/home'
import MemberForm from './screens/MemberForm'
const Stack = createStackNavigator();
import MemberList from './screens/MemberList'


class App extends React.Component {
  render() {
    
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Form" screenOptions={{
      headerShown: false
       }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="MemberForm" component={MemberForm} />
        <Stack.Screen name="MemberList" component={MemberList} />

      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}

export default App;
