// Import components
import {Navbar} from './components/navbar/Navbar'
import {Hero} from './components/hero/Hero'
import {Food} from './components/food/Food'
import {Footer} from './components/footer/Footer'

// Import images
import Craft1 from './assets/craft1.jpg'
import Craft2 from './assets/craft2.jpg'
import Chicken from './assets/chicken.jpg'
import Burger from './assets/burger.jpg'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Food bgImg1={Craft1} bgImg2={Craft2}/>
      <Food bgImg={Chicken} />
      <Food bgImg={Burger} />
      <Footer />
    </>
  );
}

export default App;
