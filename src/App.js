import React from 'react';
import Header from "./components/Header";
import Content from "./components/Content";
import './assets/scss/style.scss'
import Navigation from "./components/Navigation";
import StickyButton from "./components/StickyButton";

function App() {
    return (
        <>
            <Navigation />
            <Header />
            <Content />
            <StickyButton />
        </>
    );
}

export default App;
