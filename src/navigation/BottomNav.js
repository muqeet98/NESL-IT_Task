
import React from 'react';
// import {Icon} from '../theme/icons';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Trips from "../screens/Trips";
import SavedTrips from "../screens/SavedTrips";
import Icon from "../theme/icons";
const Stack = createNativeStackNavigator ();
const Tab = createBottomTabNavigator();

function DashboardTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Trips"
    >
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          headerShown:false
        }}
        options={{
          headerShown:false,
          tabBarLabel: 'Trips',
          tabBarIcon: ({color}) => <Icon.place color={color} size={26} />,
          tabBarOnPress: (scene, jumpToIndex) => {
            console.log('onPress:', scene.route);
            jumpToIndex(scene.index);
          },
        }}
      />
      <Tab.Screen
        name="SavedTrips"
        component={SavedTrips}
        options={{
          headerShown:false,
          tabBarLabel: 'Saved',
            tabBarIcon: ({color}) => <Icon.saved color={color} size={26} />,
            tabBarOnPress: (scene, jumpToIndex) => {
              console.log('onPress:', scene.route);
              jumpToIndex(scene.index);
            },
        }}

      />
    </Tab.Navigator>
  );
}

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard" headerMode="none">
      <Stack.Screen name="Dashboard" component={DashboardTabNavigator}  options={({ navigation }) => ({
          headerShown: false,

          })} />
    </Stack.Navigator>
  );
};

export default MainStack;
