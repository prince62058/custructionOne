import React, {
    createContext,
    useContext,
    useState,
    useMemo,
    useEffect,
} from 'react';
import { Appearance } from 'react-native';
import { Theme } from '../constants/theme';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(
        Appearance.getColorScheme() || 'light'
    );

    // 🔥 LISTEN TO SYSTEM THEME CHANGES
    useEffect(() => {
        const subscription = Appearance.addChangeListener(
            ({ colorScheme }) => {
                if (colorScheme) {
                    setMode(colorScheme);
                }
            }
        );

        return () => subscription.remove();
    }, []);

    const colors = useMemo(() => Theme[mode], [mode]);

    const toggleTheme = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, colors, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
