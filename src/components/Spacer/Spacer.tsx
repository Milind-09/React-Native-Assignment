import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

interface SpacerProps {
  size?: number;
}

const {width, height} = Dimensions.get('window');

const Spacer = ({size}: SpacerProps) => {
  const responsiveSize = size ? size : Math.min(width, height) * 0.04; // Adjust the multiplier as needed

  return <View style={{height: responsiveSize, width: responsiveSize}} />;
};

export default Spacer;
