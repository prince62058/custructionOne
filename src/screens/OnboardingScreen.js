import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { COLORS } from '../constants/theme';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    image: require('../assets/images/Material.png'),
    title: 'Quality Materials',
    subtitle:
      'We source only the highest-quality construction materials to ensure your projects are strong, durable, and built to last',
  },
  {
    id: '2',
    image: require('../assets/images/ServiceProvider.png'),
    title: 'Digital vendor Store front',
    subtitle:
      'Bring your business online with a fully-featured store designed to attract and engage buyers.',
  },
  {
    id: '3',
    image: require('../assets/images/Rentalquipment.png'),
    title: 'Verified & Trusted Professionals',
    subtitle:
      'Work with professionals who are verified, reliable, and committed to quality',
  },
];

const Slide = ({ item, currentIndex, totalSlides }) => {
  return (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        <View style={styles.circularImageFrame}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.indicatorWrapper}>
          {Array.from({ length: totalSlides }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentIndex === index && styles.indicatorActive,
              ]}
            />
          ))}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const OnboardingScreen = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item, index }) => (
          <Slide
            item={item}
            currentIndex={currentSlideIndex}
            totalSlides={slides.length}
          />
        )}
      />
      <Footer />
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
  contentContainer: {
    position: 'absolute',
    top: 480,
    left: 0,
    right: 0,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 56,
  },
  textContainer: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: COLORS.titleText,
    textAlign: 'center',
    lineHeight: 29,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: COLORS.subtitleText,
    textAlign: 'center',
    lineHeight: 18,
    paddingHorizontal: 40,
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
