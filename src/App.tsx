import { ThemeProvider } from 'styled-components'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Project } from './pages/Project'
import { Skills } from './pages/Skills'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
