import {BrowserRouter } from 'react-router-dom';
import Pages from './Pages/Pages';
import Navigation from './components/navigation';
import BottomNavigation from './components/bottomNavigation';

const App = () => {
  return(
    <BrowserRouter>
      <Navigation/>
      <Pages/>
      <BottomNavigation/>
    </BrowserRouter>
  )
}

export default App;
