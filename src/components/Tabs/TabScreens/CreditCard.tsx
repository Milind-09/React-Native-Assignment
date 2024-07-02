import React, {useRef, useState} from 'react';
import {View, Animated, PanResponder, StyleSheet, Image} from 'react-native';
import {Images} from '../../../../assets/paths/Paths';
import Colors from '../../../theme/Colors';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import NoDataFound from '../../NoData/NoDataFound';

const CreditCard = () => {
  const cardsPan = useRef(new Animated.ValueXY()).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardImages = [
    Images.Card1,
    Images.Card2,
    Images.Card3,
    Images.Card4,
    Images.Card5,
    Images.Card6,
    Images.Card7,
    Images.Card8,
    Images.Card9,
  ];

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderMove: (event, gestureState) => {
        cardsPan.setValue({x: gestureState.dx, y: gestureState.dy});
      },
      onPanResponderRelease: (event, gestureState) => {
        if (Math.abs(gestureState.dx) > 120) {
          Animated.timing(cardsPan, {
            toValue: {x: gestureState.dx > 0 ? 500 : -500, y: gestureState.dy},
            duration: 300,
            useNativeDriver: true,
          }).start(() => {
            cardsPan.setValue({x: 0, y: 0});
            setCurrentIndex(prevIndex => (prevIndex + 1) % cardImages.length);
          });
        } else {
          Animated.spring(cardsPan, {
            toValue: {x: 0, y: 0},
            friction: 5,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  const renderCards = () => {
    if (cardImages.length === 0) {
      return <NoDataFound />;
    }
    return cardImages.map((image, index) => {
      const isTopCard = index === currentIndex;
      const isNextCard = index === (currentIndex + 1) % cardImages.length;

      const cardStyle = [
        styles.card,
        {
          transform: isTopCard
            ? [...cardsPan.getTranslateTransform(), {translateY: 10}]
            : [
                {scale: isNextCard ? 1 : 1},
                {translateY: isNextCard ? -40 : -90},
              ],
          zIndex: isTopCard ? 3 : isNextCard ? 2 : 1,
        },
      ];

      return (
        <Animated.View
          key={index}
          {...(isTopCard ? panResponder.panHandlers : {})}
          style={cardStyle}>
          <Image source={image} style={styles.cardImage} resizeMode="contain" />
        </Animated.View>
      );
    });
  };

  return <View style={styles.container}>{renderCards()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grayDark,
  },
  card: {
    position: 'absolute',
    borderRadius: 12,
  },
  cardImage: {
    flex: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(90),
  },
});

export default CreditCard;
