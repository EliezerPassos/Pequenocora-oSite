import Hero from '../components/sections/Hero.jsx'
import About from '../components/sections/About.jsx'
import Methodology from '../components/sections/Methodology.jsx'
import BiaPlaylist from '../components/sections/BiaPlaylist.jsx'
import Gallery from '../components/sections/Gallery.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import Location from '../components/sections/Location.jsx'
import Contact from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Methodology />
      <BiaPlaylist />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
    </>
  )
}
