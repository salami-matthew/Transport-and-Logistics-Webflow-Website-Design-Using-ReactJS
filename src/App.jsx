import { useState } from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Services from "./components/Services/Services"
import About from './components/About/About'
import Project from './components/Project/Project'
import Testimonial from './components/Testimonial/Testimonial'
import WhyUs from './components/WhyUs/WhyUs'
import Team from './components/Team/Team'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Services />
      <About />
      <Project />
      <Testimonial />
      <WhyUs />
      <Team />
      <Contact />
      <Blog />

      <Footer />

    </div>
  )
}

export default App
