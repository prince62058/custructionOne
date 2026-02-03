export const Theme = {
  light: {
    // ===== Brand =====
    primary: '#FF6A00',
    secondary: '#FFC399',
    primaryLight: '#FFF5EB',

    // ===== Layout =====
    background: '#FFFFFF',
    surface: '#F8FAFC',
    card: '#F8F0E0',

    // ===== Status Colors =====
    success: '#16A34A',
    successLight: '#DCFCE7',
    successDark: '#0F7A36',

    danger: '#DC2626',
    dangerLight: '#FEE2E2',
    dangerDark: '#B91C1C',

    // ===== Text =====
    textPrimary: '#242731',
    textSecondary: '#5F6165',
    textMuted: '#72767C',
    text: '#000000',

    // ===== Gray Scale =====
    gray50: '#F2F2F2',
    gray100: '#E0E4E7',
    gray200: '#EDEDED',
    gray300: '#7C7C8D',
    gray400: '#72767C',
    gray500: '#5F6165',
    gray600: '#242731',

    // ===== UI =====
    border: '#D9D9D9',
    shadow: 'rgba(0,0,0,0.08)',

    blue: '#0972C9',
  },

  dark: {
    // ===== Brand =====
    primary: '#FF6A00',
    secondary: '#FFC399',
    primaryLight: '#331500',

    // ===== Layout =====
    background: '#0B141A',
    surface: '#121E26',
    card: '#16232D',

    // ===== Status Colors =====
    success: '#22C55E',
    successLight: '#052E16',
    successDark: '#16A34A',

    danger: '#EF4444',
    dangerLight: '#450A0A',
    dangerDark: '#DC2626',

    // ===== Text =====
    textPrimary: '#E6E9EF',
    textSecondary: '#A0A6B0',
    textMuted: '#7B8290',
    text: '#ffffff',

    // ===== Gray Scale =====
    gray50: '#041c24ff',
    gray100: '#2E3440',
    gray200: '#3A404C',
    gray300: '#5C6470',
    gray400: '#7B8290',
    gray500: '#A0A6B0',
    gray600: '#E6E9EF',

    // ===== UI =====
    border: '#2E3440',
    shadow: 'rgba(0,0,0,0.6)',

    blue: '#3B82F6',
  },
};

export const COLORS = {
  ...Theme.light,
  white: '#FFFFFF',
  titleText: Theme.light.textPrimary,
  subtitleText: Theme.light.textSecondary,
  indicatorInactive: Theme.light.gray100,
  indicatorActive: Theme.light.primary,
  skipText: Theme.light.textSecondary,
  buttonPrimary: Theme.light.primary,
  shadowColor: 'rgba(0,0,0,0.25)',
  buttonText: '#FFFFFF',
};
