import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { NOAADataProvider } from './contexts/NOAAContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NOAADataProvider>
      <App />
    </NOAADataProvider>
  </React.StrictMode>,
)
