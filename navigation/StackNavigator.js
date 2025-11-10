import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home2 from '../Screens/Home2';
import Profile2 from '../Screens/Profile2';

// import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home2">
      <Stack.Screen name="Home2" component={Home2} options={{ headerShown: false }} />
      <Stack.Screen name="Profile2"  component={Profile2} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}