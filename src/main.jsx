import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NotificationContextProvider from './context/NotificationContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationContextProvider>
      <App />
    </NotificationContextProvider>
  </React.StrictMode>,
)
