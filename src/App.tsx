import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <ToastContainer
            autoClose={3000}
            pauseOnHover={false}
            style={{ width: 'max-content' }}
          />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </CartContextProvider>
  )
}
