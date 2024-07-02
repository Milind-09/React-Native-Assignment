import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import Colors from '../theme/Colors';
import HomeScreen from '../screens/home/HomeScreen';
import OptionCard from '../components/OptionCard';
import OptionSelectorScreen from '../screens/selector/OptionSelectorScreen';
import TabSwitchScreen from '../screens/tabs/TabSwitchScreen';
import DateScreen from '../screens/date/DateScreen';
import DropDownScreen from '../screens/dropdown/DropDownScreen';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.navyBlue,
        tabBarInactiveTintColor: Colors.inactiveBottomNavText,
        tabBarHideOnKeyboard: true,
        tabBarStyle: BottonNavStyles.tabBarStyle,
      }}>
      <Tab.Screen
        name="DropDownScreen"
        component={DropDownScreen}
        options={{
          title: 'DropDown',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ) : (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ),
          tabBarIconStyle: BottonNavStyles.tabBarIconStyle,
          tabBarItemStyle: BottonNavStyles.tabBarItemStyle,
          tabBarLabelStyle: BottonNavStyles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="OptionSelectorScreen"
        component={OptionSelectorScreen}
        options={{
          title: 'Option',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ) : (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ),
          tabBarIconStyle: BottonNavStyles.tabBarIconStyle,
          tabBarItemStyle: BottonNavStyles.tabBarItemStyle,
          tabBarLabelStyle: BottonNavStyles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="TabSwitchScreen"
        component={TabSwitchScreen}
        options={{
          title: 'Tabs',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ) : (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ),
          tabBarIconStyle: BottonNavStyles.tabBarIconStyle,
          tabBarItemStyle: BottonNavStyles.tabBarItemStyle,
          tabBarLabelStyle: BottonNavStyles.tabBarLabelStyle,
        }}
      />
      <Tab.Screen
        name="DateScreen"
        component={DateScreen}
        options={{
          title: 'Date Time',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ) : (
              <Text style={BottonNavStyles.icon}>IC</Text>
            ),
          tabBarIconStyle: BottonNavStyles.tabBarIconStyle,
          tabBarItemStyle: BottonNavStyles.tabBarItemStyle,
          tabBarLabelStyle: BottonNavStyles.tabBarLabelStyle,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;

export const BottonNavStyles = StyleSheet.create({
  icon: {
    width: 27,
    height: 27,
  },
  tabBarStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    height: 50,
    position: 'absolute',
    backgroundColor: Colors.white,
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
    paddingBottom: 0,
    bottom: 0,
  },
  tabBarItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  tabBarLabelStyle: {
    fontWeight: '400',
    fontSize: 13,
    marginBottom: 8,
  },
  tabBarIconStyle: {},
});
