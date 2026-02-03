import React, { useEffect, useMemo } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../contexts/ThemeContext';
import { setSystemNavBar } from '../../utils/systemNavBar';

const isLightColor = (color = '#000000') => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 160;
};

const MainView = ({
    children,
    mainStyle,
    transparent = true,
    bottomSafe = false,
}) => {
    const insets = useSafeAreaInsets();
    const { colors, mode } = useTheme();

    const paddingTop = transparent ? 0 : insets.top ?? 0;
    const paddingBottom = bottomSafe ? insets.bottom ?? 0 : 0;
    const paddingLeft = bottomSafe ? insets.left ?? 0 : 0;
    const paddingRight = bottomSafe ? insets.right ?? 0 : 0;

    const styles = useMemo(() => getStyles(colors), [colors]);

    useEffect(() => {
        setSystemNavBar?.(colors);
    }, [mode]);

    // ✅ status bar content based on colors.text
    const barStyle = isLightColor(colors.text)
        ? 'light-content'
        : 'dark-content';

    return (
        <View
            style={[
                styles.container,
                mainStyle,
                {
                    paddingTop,
                    paddingBottom,
                    paddingLeft,
                    paddingRight,
                },
            ]}
        >
            <StatusBar
                translucent={transparent}
                backgroundColor={
                    transparent ? 'transparent' : colors.background
                }
                barStyle={barStyle}
            />
            {children}
        </View>
    );
};

export default MainView;

const getStyles = colors =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
    });
