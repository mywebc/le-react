import React from 'react'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { ThemeProvider } from 'theme-ui'
import { Menu } from './Menu'

const Theme = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={config}>
       <Menu />
      <ComponentsProvider>{children}</ComponentsProvider>
    </ThemeProvider>
  )
}

const themeConfig = {
  initialColorMode: 'dark',
}

export default theme(themeConfig)(Theme)