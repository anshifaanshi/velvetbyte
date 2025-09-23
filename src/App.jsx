import React from 'react'
import Home from './Home'
import Services from './pages/Services'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
const App = () => {
  return (
    <div>
      <Home/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
