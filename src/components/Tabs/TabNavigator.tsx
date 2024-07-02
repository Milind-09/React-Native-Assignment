// TabNavigator.tsx
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Image, StyleSheet, View} from 'react-native';
import {Images} from '../../../assets/paths/Paths';
import Colors from '../../theme/Colors';
import Tab2Screen from './TabScreens/Tab2Screen';
import Tab3Screen from './TabScreens/Tab3Screen';
import Tab4Screen from './TabScreens/Tab4Screen';
import Tab5Screen from './TabScreens/Tab5Screen';
import Tab6Screen from './TabScreens/Tab6Screen';
import CreditCard from './TabScreens/CreditCard';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconSource;
          switch (route.name) {
            case 'Tab1':
              iconSource = Images.Verify;
              break;
            case 'Tab2':
              iconSource = Images.Go;
              break;
            case 'Tab3':
              iconSource = Images.Drop;
              break;
            case 'Tab4':
              iconSource = Images.Protect;
              break;
            case 'Tab5':
              iconSource = Images.AddCard;
              break;
            case 'Tab6':
              iconSource = Images.CheckCard;
              break;
            default:
              iconSource = Images.Verify;
          }
          return (
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={[styles.icon, focused && styles.iconFocused]}
              />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
          backgroundColor: Colors.grayDark,
          paddingVertical: 24,
        },
      })}>
      <Tab.Screen name="Tab1" component={CreditCard} />
      <Tab.Screen name="Tab2" component={Tab2Screen} />
      <Tab.Screen name="Tab3" component={Tab3Screen} />
      <Tab.Screen name="Tab4" component={Tab4Screen} />
      <Tab.Screen name="Tab5" component={Tab5Screen} />
      <Tab.Screen name="Tab6" component={Tab6Screen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
    tintColor: Colors.offWhite,
  },
  iconFocused: {
    height: 28,
    width: 28,
    tintColor: Colors.white,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabNavigator;
