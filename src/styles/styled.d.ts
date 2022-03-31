import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary?: string;
      background1: string;
      background2: string;
      background3?: string;
      background4?: string;
      text1: string;
      text2: string;
      text3?: string;
      text4?: string;
      red: string;
      green: string;
      blue: string;
      yellow: string;
      white: string;
      black: string;
      pink: string;
      transparent1: string;
      transparent2?: string;
      transparent3?: string;
      transparent4?: string;
      transparent5?: string;
    };
  }
}