import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../../theme/Colors';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const Tab5Screen = () => (
  <View style={styles.container}>
    <Text>Tab 1 Content</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.grayDark,
    height: responsiveHeight(66.2),
  },
});

export default Tab5Screen;
