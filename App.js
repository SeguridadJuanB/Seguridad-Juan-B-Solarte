import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  MaterialIcons, MaterialCommunityIcons, Entypo, FontAwesome,
} from '@expo/vector-icons';
import {
  Main,
  Radar,
  Service,
  About,
  Bodyguard,
  BodyguardDriver,
  BodyguardMotordriver,

} from './src/screens';
import { textColor, tabBarColor } from './src/config';
import store from './src/store';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: textColor.alternate,
  inactiveTintColor: 'gray',
  style: {
    backgroundColor: tabBarColor,
    borderTopColor: 'transparent',
    height: 80,
    elevation: 20,
    borderRadius: 20,
    paddingBottom: 20,
    padding: 20,
    position: 'absolute',
    left: '2.5%',
    bottom: 15,
    width: '95%',
    alignSelf: 'center',
  },
  showLabel: false,
};

function MainStack() {
  return (
    <Stack.Navigator initialRouteName="Bodyguard" headerMode="none">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Bodyguard" component={Bodyguard} />
      <Stack.Screen name="BodyguardDriver" component={BodyguardDriver} />
      <Stack.Screen name="BodyguardMotodriver" component={BodyguardMotordriver} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
              const iconColor = focused ? textColor.alternate : 'gray';

              if (route.name === 'MainStack') {
                return <MaterialIcons name="security" size={size} color={iconColor} />;
              } if (route.name === 'Radar') {
                return <MaterialCommunityIcons name="radar" size={size} color={iconColor} />;
              } if (route.name === 'Service') {
                return <FontAwesome name="building-o" size={size} color={iconColor} />;
              } if (route.name === 'About') {
                return <Entypo name="location" size={size} color={iconColor} />;
              }
              return <Entypo name="location" size={size} color={iconColor} />;
            },
          })}

          tabBarOptions={tabBarOptions}
          initialRouteName="Stats"
          headerMode="none"
        >
          <Tab.Screen name="MainStack" component={MainStack} />
          <Tab.Screen name="Radar" component={Radar} />
          <Tab.Screen name="Service" component={Service} />
          <Tab.Screen name="About" component={About} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
