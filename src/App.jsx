import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import WhatsAppFloatButton from './components/layout/WhatsAppFloatButton.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Methodology from './components/sections/Methodology.jsx'
import BiaPlaylist from './components/sections/BiaPlaylist.jsx'
import Gallery from './components/sections/Gallery.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import Location from './components/sections/Location.jsx'
import Contact from './components/sections/Contact.jsx'
import useSmoothScroll from './hooks/useSmoothScroll.js'

function App() {
  useSmoothScroll()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Methodology />
        <BiaPlaylist />
        <Gallery />
        <Testimonials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  )
}

export default App
