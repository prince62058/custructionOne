import { Platform } from 'react-native';
import SystemNavigationBar from 'react-native-system-navigation-bar';

export const setSystemNavBar = (colors) => {
    if (Platform.OS !== 'android') return;
    if (!colors?.background) return; // 🔒 SAFETY

    SystemNavigationBar.setNavigationColor(
        colors.background,
        colors.mode === 'dark'
    );
};
