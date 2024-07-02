import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Fonts from '../../theme/Fonts';

const NoDataFound = () => {
  return (
    <View>
      <Text style={Fonts.caption}>No Data Found</Text>
    </View>
  );
};

export default NoDataFound;

const styles = StyleSheet.create({});
