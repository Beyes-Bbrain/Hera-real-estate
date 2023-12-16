import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';


//Import the pages that we will use
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import About from "./pages/About";



function App() {
  return (
    <div className="App">

     <Router>
         <Navbar/>
         <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/properties' element={ <Properties/>}/>
          <Route path='/contact-me' element={ <Contact/>}/>
          <Route path='/about-us' element={ <About/>}/>

          </Routes>
         </Router>

    
      </div>
  );
}

export default App;
