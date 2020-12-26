import Home from './components/Home';
import Snacks from './components/Snacks';
import Powder from './components/Powder';
import Pickles from './components/Pickles';
import Upcoming from './components/Upcoming';
import Contact from './components/Contact';
import './App.css';
import {Route, Link} from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
  
      <Route exact path="/Home" component= {Home} />
     <Route exact path="/Snacks" component= {Snacks} />
     <Route exact path="/Powder" component= {Powder} />
     <Route exact path="/Pickles" component= {Pickles} />
     <Route exact path="/Upcoming" component= {Upcoming} />
      <Route exact path="/Contact" component= {Contact} />
     
    </div>
  );
}

export default App;
