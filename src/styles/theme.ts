import { extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  config:{
    useSystemColorMode: true,
    initialColorMode: 'light',
  },
  styles: {
    global: (props:any) => ({
      body: {
        bg: mode('brand.light','brand.dark')(props),
      }
    })
  },
  colors:{
    brand: {
      primary: {
        1: '#ffbf47',
        2: '#ffb01f',
        3: '#ffa700',
        4: '#f59f00',
        5: '#cc8500'
      },
      secondary:{
        1: '#6a9fdc',
        2: '#498ad4',
        3: '#3980D0',
        4: '#2f75c6',
        5: '#2762a5'
      },
      success:{
        1: '#25f892',
        2: '#07ed7f',
        3: '#07DA74',
        4: '#06c669',
        5: '#059e54'
      },
      danger:{
        1: '#fc5f62',
        2: '#fb4b4e',
        3: '#FB373A',
        4: '#fb2327',
        5: '#f00509'
      },
      warning:{
        1: '#ffd770',
        2: '#ffcb47',
        3: '#FFC533',
        4: 'ffbf1f',
        5: 'f5af00'
      },
      purple: "#8257CA",
      light: '#ecf8f8',
      dark: '#151414'
    }
  }
})

export default theme