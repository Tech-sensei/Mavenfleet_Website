import React, { useState, useEffect } from "react";

import "./Home.css";
import { Header, About, Values, Accordion, Footer, CTO } from "./../containers";

import Loading from "./../components/Loading";
import Nav from "./../components/Nav";


function Home() {
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
                    <CTO />
                    <Accordion />
                    <Footer />
                </>
            )}
        </>
    );
}

export default Home;
