import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../../../assets/paths/Paths';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../../theme/Colors';
import Fonts from '../../theme/Fonts';
import Spacer from '../Spacer/Spacer';
import {headerText} from '../../constants/Strings';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Image source={Images.HeaderLogo} style={styles.headerStyles} />
        <TouchableOpacity style={styles.button}>
          <Image source={Images.Blub} style={styles.logoStyles} />
          <Text style={Fonts.caption}>{headerText.buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={Fonts.title}>{headerText.title}</Text>
        <Spacer />
        <Text style={Fonts.caption}>{headerText.description}</Text>
        <Spacer size={40} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.black,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.grayDark,
    opacity: 0.8,
    justifyContent: 'center',
    gap: 8,
    borderRadius: 8,
    width: responsiveWidth(20),
    height: responsiveHeight(4.5),
  },
  logoStyles: {
    height: responsiveHeight(2.4),
    width: responsiveWidth(3.5),
  },
  headerStyles: {
    height: responsiveWidth(12),
    width: responsiveWidth(12),
  },
  content: {
    paddingHorizontal: 16,
  },
});
