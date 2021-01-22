import React from "react";
import Content from "../Content"
import Header from "../Header"
import Navigation from "../Navigation"
import StickyButton from "../StickyButton"

const Home = props => {
    return (
        <>
            <Navigation />
            <Header />
            <Content />
            <StickyButton />
        </>
    )
}

export default Home