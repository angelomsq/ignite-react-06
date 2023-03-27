import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      100: '#F5F8FA',
      300: '#DADADA',
      400: '#999999',
      700: '#47585B',
    },
    background: '#f5f8fa',
    highlight: '#ffba08',
    dark: {
      text: '#47585b',
      info: {
        500: '#999999',
        250: '#cccccc',
      },
    },
    light: {
      text: '#f5f8fa',
      info: {
        500: '#dadada',
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: 'background',
      },
      ':root': {
        '--swiper-navigation-sides-offset': '40px',
        '--swiper-pagination-bottom': '24px',
        '--swiper-navigation-size': '30px',
        '--swiper-pagination-bullet-horizontal-gap': '6px',
        '--swiper-pagination-bullet-inactive-color': '#999999',
      },
      '.swiper-button-prev::after, .swiper-button-next::after': {
        color: 'highlight',
      },
      '.swiper-pagination-bullet': {
        bg: 'background',
        width: '16px',
        height: '16px',
      },
      '.swiper-pagination-bullet-active': {
        bg: 'highlight',
      },
    },
  },
  textStyles: {
    h1: {
      fontSize: ['24px', '48px'],
      fontWeight: 'bold',
      lineHeight: '150%',
    },
    h2: {
      fontSize: ['22px', '36px'],
      fontWeight: '500',
      lineHeight: '150%',
    },
    h3: {
      fontSize: ['18px', '24px'],
      fontWeight: '500',
      lineHeight: '150%',
    },
    h4: {
      fontSize: ['20px', '20px'],
      fontWeight: '600',
      lineHeight: '150%',
    },
  },
})
