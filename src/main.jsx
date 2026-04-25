import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

console.log('Starting React app...')
console.log('React version:', React.version)
console.log('Root element:', document.getElementById('root'))

try {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  console.log('Root created:', root)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  console.log('App rendered successfully')
} catch (error) {
  console.error('Error rendering app:', error)
  document.getElementById('root').innerHTML = `
    <div style="padding: 20px; background: #fee; border: 1px solid #fcc; color: #c33;">
      <h2>Greška u učitavanju aplikacije</h2>
      <p>${error.message}</p>
      <pre>${error.stack}</pre>
    </div>
  `
}
