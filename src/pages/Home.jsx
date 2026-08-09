import Hero from '../components/sections/Hero.jsx'
import LeaderInEarlyEducation from '../components/sections/LeaderInEarlyEducation.jsx'
import Methodology from '../components/sections/Methodology.jsx'
import BiaPlaylist from '../components/sections/BiaPlaylist.jsx'
import Gallery from '../components/sections/Gallery.jsx'
import FamiliesLoveUs from '../components/sections/FamiliesLoveUs.jsx'
import Location from '../components/sections/Location.jsx'
import Contact from '../components/sections/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <LeaderInEarlyEducation />
      <Methodology />
      <BiaPlaylist />
      <Gallery />
      <FamiliesLoveUs />
      <Location />
      <Contact />
    </>
  )
}
