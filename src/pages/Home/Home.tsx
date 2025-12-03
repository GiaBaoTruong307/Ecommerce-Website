import BestSeller from '../../components/sections/BestSeller'
import Hero from '../../components/sections/Hero'
import LatestCollection from '../../components/sections/LatestCollection'
import NewsletterBox from '../../components/ui/NewsletterBox'
import OurPolicy from '../../components/ui/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
