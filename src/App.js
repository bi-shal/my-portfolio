// import logo from './logo.svg';
import './App.css';
import Navber from './components/NavBar/Navber';
import Home from './components/Home/Home';
import SocialLinks from './components/SocialLinks/SocialLinks';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="">
     
      <Navber></Navber>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
