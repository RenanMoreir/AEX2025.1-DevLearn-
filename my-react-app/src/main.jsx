import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.css'
import App from './App.jsx'
import Footer from './Footer.jsx'
import NavBar from './NavBar.jsx'
import Login from './Login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <Login />
    <Footer />
  </StrictMode>,
)
