import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Highlight from './components/highlight';
import Testimoninals from "./components/testimoninals";

const App = () => {
  return(
    <>
      <Navigation/>
      <Hero/>
      <Highlight/>
      <Testimoninals/>
      <div style={{height:"300px"}}>
        
      </div>
    </>
      
  )
}

export default App;
