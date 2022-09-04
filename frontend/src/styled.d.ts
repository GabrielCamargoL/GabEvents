import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    'colors': {
      'light': string,
      'dark': string,
      'blue': string,
      'lightRed': string,
      'red': string,
      'pink': string,
      'cian': string,
    },

    'fonts': {
      'Headline': string,
      'body': string
    }
  }
}