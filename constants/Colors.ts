/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  WHITE: '#fff',
  PRIMARY: '#000',
  GRAY: '#7d7d7d',
  LIGHT_GRAY: '#f2f2f2',
  PURPLE: '#debfff',
  GREEN: '#c7edca',
  BLUE: '#0a7bfc',
  DARK_GRAY: '#A9A9A9',
  DARK_GRAY1: '#636363',
  LIGHT_BLUE: '#f0f8ff',
  DIM_GRAY: '#696969',
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
