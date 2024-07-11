import { createRoot } from 'react-dom/client'
import App from './src/App'
import React from 'react'

const root = createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
