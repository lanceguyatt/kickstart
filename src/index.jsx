import React from 'react'
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'

import theme from './styles/theme'
import GlobalStyle from './styles/global'
import KickStart from './containers/KickStart'

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <KickStart />
    </>
  </ThemeProvider>
)

render(<App />, document.getElementById('root'))
