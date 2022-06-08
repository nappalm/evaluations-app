import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#1D212C')(props),
      fontSize: 15
    }
  })
}

const components = {
  Text: {
    baseStyle: {
      fontWeight: 500
    }
  },
  Link: {
    variants: {
      unstyled: {
        _hover: {
          textDecoration: 'none'
        }
      }
    }
  },
  Heading: {
    variants: {
      'user-name': {
        fontSize: 19
      }
    }
  },
  Progress: {
    baseStyle: {
      track: {
        borderRadius: 'xl'
      }
    }
  }
}

const fonts = {
  heading: 'Inter',
  body: 'Inter'
}

const colors = {
  dark: '#10171f',
  primary: '#1D212C',
  secondary: '#866CE9',
  lightGreen: '#E4F23C',
  lightGray: '#c2c2c2',
  darkColorMode: '#1d212c',
  lightColorMode: '#ffffff'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
})
export default theme
