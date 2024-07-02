import {StyleSheet} from 'react-native';
import Colors from './Colors';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

const Fonts = StyleSheet.create({
  title: {
    fontWeight: '500',
    fontSize: responsiveFontSize(4),
    color: Colors.white,
  },

  subHeading: {
    fontWeight: '400',
    fontSize: responsiveFontSize(3.5),
    color: Colors.white,
  },

  subtitle: {
    fontWeight: '400',
    fontSize: responsiveFontSize(3),
    color: Colors.white,
  },

  paragraph: {
    fontWeight: '400',
    fontSize: responsiveFontSize(2.5),
    color: Colors.white,
  },
  caption: {
    fontWeight: '400',
    fontSize: responsiveFontSize(2),
    color: Colors.white,
  },
});

export default Fonts;
