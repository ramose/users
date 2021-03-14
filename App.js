import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/home';

const stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="home">
        <stack.Screen name="home" component={Home} options={{
          headerShown: false
        }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
