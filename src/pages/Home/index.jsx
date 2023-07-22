import Footer from '../../components/Footer'
import Header from '../../components/Header'
import HomeAbout from './components/HomeAbout'
import HomeHero from './components/HomeHero'
import HomeSpecials from './components/HomeSpecials'
import HomeTestimonials from './components/HomeTestimonials'

const Home = () => {
  return (
    <main>
      <Header />
      <HomeHero />
      <HomeSpecials />
      <HomeTestimonials />
      <HomeAbout />
      <Footer />
    </main>
  )
}

export default Home
