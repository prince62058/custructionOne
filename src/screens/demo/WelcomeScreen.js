import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../constants/theme';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Full Background Image at Bottom */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/Welcome.jpeg')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
      </View>

      {/* Content Overlay */}
      <View style={styles.contentOverlay}>
        <View style={styles.topSection}>
          <View style={styles.logoContainer}>
            <Text style={styles.titleSmart}>Smart</Text>
            <Text style={styles.titleConstruction}>Construction</Text>
          </View>

          <Text style={styles.subtitle}>
            Buy Materials, Construction Planner,{'\n'}
            Rental Equipment & Service Providers{'\n'}
            <Text style={styles.subtitleBold}>All in One App</Text>
          </Text>
        </View>

        {/* Button - using simple View wrapper or direct text as touchable is also absolute */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Onboarding')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  /* Background Image (Absolute) */
  imageContainer: {
    position: 'absolute',
    height: 676.75,
    bottom: 0.25,
    left: 0,
    right: -0.02, // Approximating -0.02%
    // zIndex: -1, // Removed to fix blank screen issue
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  /* Content Overlay */
  contentOverlay: {
    flex: 1,
    // We remove full centering logic from overlay because button is now absolute
    // But text needs to remain at top
    // alignItems: 'center', // keep lateral center
    // paddingTop: 60, // keep top spacing
  },

  topSection: {
    width: '100%',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 272,
    height: 127,
    marginBottom: 10,
  },
  titleSmart: {
    fontSize: 48,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#242731',
    textAlign: 'center',
    lineHeight: 52,
  },
  titleConstruction: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    color: '#FF6900',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: '#242731',
    textAlign: 'center',
    lineHeight: 24,
  },
  subtitleBold: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },

  /* Absolute Button per User Request */
  button: {
    // Auto layout props mapped to Flexbox
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,

    // Absolute Position
    position: 'absolute',
    width: 159,
    height: 46,
    // Centering logic: left: 50% - width/2
    left: width / 2 - 159 / 2,
    // Centering logic: top: 50% - height/2 - 9
    top: height / 2 - 46 / 2 - 9,

    backgroundColor: '#FF6A00', // Note: User sent #FF6A00, Theme has #FF6900. Using user's value.
    borderRadius: 8,

    // Z-index to ensure it sits above the image
    zIndex: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default WelcomeScreen;
