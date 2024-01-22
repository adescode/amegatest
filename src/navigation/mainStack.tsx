import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Dashboard from '../screens/dashboard';
import Market from '../screens/market';
import Profile from '../screens/profile';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

type RouteName = 'Dashboard' | 'Market' | 'Profile';

const MainTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.default,
        headerTintColor: colors.default,
        tabBarIcon: ({color, size}) => {
          const routeName = route.name as RouteName;
          const icons = {
            Dashboard: 'view-dashboard',
            Market: 'animation',
            Profile: 'account-circle-outline',
          };

          return (
            <MaterialCommunityIcons
              name={icons[routeName]}
              color={color}
              size={size}
            />
          );
        },
      })}>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Market"
        component={Market}
        options={{
          tabBarLabel: 'Market Data',
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainTab;
