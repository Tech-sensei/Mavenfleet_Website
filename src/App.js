import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Header, About, Values } from "./containers";

import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
import Accordion from "./components/Accordion";
import Loading from "./Loading";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <Nav />
          {/* <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/about" element={<Welcome />}></Route>
        </Routes> */}
          <Header />
          <About />
          <Values />
          <GetStarted />
          <Accordion />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
