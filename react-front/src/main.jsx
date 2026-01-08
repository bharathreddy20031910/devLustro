import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/ContextApi.jsx'
import { CounterProvider } from './Context/ContextApi1.jsx'
import { Provider } from 'react-redux'
import store from './Redux/Store/Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <CounterProvider>
<Provider store={store}> 
  <App/> 
  </Provider>
      </CounterProvider>
    </ThemeProvider>
  </StrictMode>,
)
