import logo from './logo.svg';
import './App.css';
import Navber from './components/NavBar/Navber';
import Home from './components/Home/Home';
import SocialLinks from './components/SocialLinks/SocialLinks';

function App() {
  return (
    <div className="">
     
      <Navber></Navber>
      <Home></Home>
      <SocialLinks></SocialLinks>
    </div>
  );
}

export default App;
