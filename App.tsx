import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OnboardingScreen from './src/screens/OnboardingScreen';

const App = () => {
  return (
    <SafeAreaProvider>
        <OnboardingScreen />
    </SafeAreaProvider>
  );
};

export default App;

