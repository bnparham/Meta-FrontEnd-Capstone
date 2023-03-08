import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Highlight from './components/highlight';
import Testimoninals from "./components/testimoninals";
import About from "./components/about";


const App = () => {
  return(
    <>
      <Navigation/>
      <Hero/>
      <Highlight/>
      <Testimoninals/>
      <About/>
      <div style={{height:"300px"}}>
        
      </div>
    </>
      
  )
}

export default App;
