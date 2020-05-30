import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import './assets/scss/style.scss'
import Navigation from "./components/Navigation";

function App() {
    return (
        <>
            <Navigation />
            <Header />
            <Content />
            <Footer />
        </>
    );
}

export default App;
