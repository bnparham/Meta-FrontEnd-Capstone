import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Highlight from './components/highlight';
import Testimoninals from "./components/testimoninals";
import About from "./components/about";
import BottomNavigation from "./components/bottomNavigation";

const App = () => {
  return(
    <>
      <Navigation/>
      <Hero/>
      <Highlight/>
      <Testimoninals/>
      <About/>
      <BottomNavigation/>
    </>
      
  )
}

export default App;
