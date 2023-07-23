import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/menu' element = {<Menu/>}></Route>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
