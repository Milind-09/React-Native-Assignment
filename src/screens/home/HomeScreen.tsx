import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header/Header';
import TabNavigator from '../../components/Tabs/TabNavigator';
import {Images} from '../../../assets/paths/Paths';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <TabNavigator />
        <TouchableOpacity style={styles.addButton}>
          <Image source={Images.Plus} style={styles.plusIcon} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  addButton: {
    position: 'absolute',
    bottom: '2%',
    right: '2%',
  },
  plusIcon: {
    height: 90,
    width: 90,
  },
});
