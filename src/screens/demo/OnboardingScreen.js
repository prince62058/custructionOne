import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
  PanResponder,
  Animated,
} from 'react-native';
import { COLORS } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../../assets/images/Material.png'),
    title: 'Quality Materials',
    subtitle:
      'We source only the highest-quality construction materials to ensure your projects are strong, durable, and built to last',
  },
  {
    id: '2',
    image: require('../../assets/images/ServiceProvider.png'),
    title: 'Digital vendor Store front',
    subtitle:
      'Bring your business online with a fully-featured store designed to attract and engage buyers.',
  },
  {
    id: '3',
    image: require('../../assets/images/Rentalquipment.png'),
    title: 'Verified & Trusted Professionals',
    subtitle:
      'Work with professionals who are verified, reliable, and committed to quality',
  },
];

const Slide = ({ item, panHandlers }) => {
  return (
    <View style={styles.slide}>
      <View style={styles.imageContainer} {...panHandlers}>
        <View style={styles.circularImageFrame}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const Footer = ({ skip, goToNextSlide }) => {
  return (
    <View style={styles.footer}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={skip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToNextSlide} style={styles.btn}>
          <Text style={styles.btnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scrollX, {
      toValue: -currentSlideIndex * width,
      useNativeDriver: true,
      friction: 8,
      tension: 40,
    }).start();
  }, [currentSlideIndex]);

  const goToNextSlide = () => {
    if (currentSlideIndex === slides.length - 1) {
      navigation.navigate('Welcome');
      return;
    }
    setCurrentSlideIndex(prev => {
      const next = prev + 1;
      return next < slides.length ? next : prev;
    });
  };

  const goToPrevSlide = () => {
    setCurrentSlideIndex(prev => {
      const next = prev - 1;
      return next >= 0 ? next : prev;
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 50) {
          goToPrevSlide();
        } else if (gestureState.dx < -50) {
          goToNextSlide();
        }
      },
    }),
  ).current;

  const skip = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={{ height: height * 0.75 }}>
        <Animated.View
          style={{
            flexDirection: 'row',
            width: width * slides.length,
            transform: [{ translateX: scrollX }],
          }}
        >
          {slides.map((item, index) => (
            <Slide
              key={item.id}
              item={item}
              panHandlers={panResponder.panHandlers}
            />
          ))}
        </Animated.View>

        <View style={styles.indicatorContainer}>
          <View style={styles.indicatorWrapper}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  currentSlideIndex === index && styles.indicatorActive,
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      <Footer skip={skip} goToNextSlide={goToNextSlide} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  imageContainer: {
    marginTop: 130,
    height: 300,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularImageFrame: {
    height: 300,
    width: 300,
    borderRadius: 150,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  textContainer: {
    marginTop: 80, // Adjusted from absolute position
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: COLORS.titleText,
    textAlign: 'center',
    lineHeight: 29,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: COLORS.subtitleText,
    textAlign: 'center',
    lineHeight: 18,
  },
  indicatorContainer: {
    position: 'absolute',
    top: 480, // Same level as before but static
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7.69,
    width: 57.69,
    height: 8.65,
  },
  indicator: {
    height: 8.65,
    width: 8.65,
    backgroundColor: COLORS.indicatorInactive,
    borderRadius: 4.325,
  },
  indicatorActive: {
    backgroundColor: COLORS.indicatorActive,
  },
  footer: {
    height: height * 0.25,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipText: {
    color: COLORS.skipText,
    fontSize: 15.38,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 19,
  },
  btn: {
    paddingVertical: 11.54,
    paddingHorizontal: 28.85,
    borderRadius: 15.38,
    backgroundColor: COLORS.buttonPrimary,
    shadowColor: COLORS.shadowColor,
    shadowOffset: {
      width: 1.92,
      height: 3.85,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7.02,
    elevation: 5,
  },
  btnText: {
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    fontSize: 17.31,
    lineHeight: 21,
    color: COLORS.buttonText,
  },
});

export default OnboardingScreen;
