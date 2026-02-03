import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Images } from '../../constants/constant';
import { s, vs, fs, Fonts } from '../../constants/constant';

const EmptyState = ({ 
  title = 'No items found',
  subtitle = 'Nothing to show here yet',
  image = Images.emptyImg 
}) => {
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default EmptyState;

const getStyles = (colors) =>
  StyleSheet.create({
    container: {
      marginTop: vs(100),
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: s(20),
      backgroundColor: colors.background,
    },
    image: {
      width: s(300),
      height: s(300),
      resizeMode: 'contain',
      // marginBottom: vs(20),
    },
    title: {
      fontSize: fs(24),
      fontFamily: Fonts.PoppinsM,
      color: colors.text,
      marginBottom: vs(4),
      textAlign: 'center',
    },
    subtitle: {
      fontSize: fs(14),
      fontFamily: Fonts.PoppinsR,
      color: colors.textSecondary || colors.border,
      textAlign: 'center',
      lineHeight: vs(20),
      opacity: 0.8,
    },
  });
