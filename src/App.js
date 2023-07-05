import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Main from "./Main";
 import Home from "./Home";
// import Nav from "./Nav";
import About from "./About";
import Myteam from "./Myteam";
import Contact from "./Contact";
import { BrowserRouter,Routes,Route} from "react-router-dom";



function App() {
  return (

    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
      {/* {<Route path="/" element={<Home />} />} */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myteam" element={<Myteam />} />
          <Route path="/register" element={<Contact />} />
 
       
      </Routes>
    </BrowserRouter>
    
{/* <Main/> */}

<Footer/>
    </div>
  );
}

export default App;
