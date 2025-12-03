import { useState } from 'react'
import './styles/main.css'
import './styles/slider.min.css'
import './styles/animation.min.css'
import './styles/bootstrap.min.css'
import './styles/cookie-notice.min.css'
import './styles/default.css'
import './styles/gallery.min.css'
import './styles/icons-fa.min.css'
import './styles/icons.min.css'
import './styles/slider.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'




function App() {

  return (
    <>
      <body class="home">
        <Header />
        <Home />
        <Footer />
      </body>
    </>
  )
}

export default App
