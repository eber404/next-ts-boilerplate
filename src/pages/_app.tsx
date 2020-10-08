import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { dark, light } from '../styles/themes/'

import GlobalStyle from '../styles/global'

import Menu from '../sections/Menu'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={dark}>
      <Component {...pageProps} />
      <GlobalStyle />
      <Menu />
    </ThemeProvider>
  )
}

export default MyApp
