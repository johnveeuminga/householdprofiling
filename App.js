
import React from 'react';
import {Text, Button} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Form from './screens/form'
import Home from './screens/home'
import MemberForm from './screens/MemberForm'
import MemberList from './screens/MemberList'
import Masterlist from './screens/Masterlist'
import Login from './screens/Login';
import Login2 from './screens/Login2';


const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <RootStack.Navigator mode="modal" headerMode="none">
        <RootStack.Screen name="Main" component={MainStackScreen} />
        <RootStack.Screen name="Modal" component={Form} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
function MainStackScreen() {
  return (
    <MainStack.Navigator>
        <MainStack.Screen name="Login" component={Login} />
       <MainStack.Screen name="Login2" component={Login2} />
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="MemberForm" component={MemberForm} />
        <MainStack.Screen name="MemberList" component={MemberList} />
        <MainStack.Screen name="Masterlist" component={Masterlist} />
    </MainStack.Navigator>
  );
}

export default App
