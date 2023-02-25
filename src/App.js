import React, { useState, useEffect } from "react";

import "./App.css";
import { Header, About, Values, Accordion, Footer } from "./containers";
import GetStarted from "./components/GetStarted";

import Loading from "./components/Loading";
import Nav from "./components/Nav";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Nav />
          <Header />
          <About />
          <Values />
          <GetStarted />
          <Accordion />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
