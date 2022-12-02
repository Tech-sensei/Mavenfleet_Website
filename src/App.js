import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import Values from "./components/Values";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/about" element={<Welcome />}></Route>
            </Routes> */}
      <Hero />
      <About />
      <Values />
      <GetStarted />
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
