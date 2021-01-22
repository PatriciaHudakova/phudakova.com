import React from 'react';
import './assets/scss/style.scss'
import Home from "./components/Home";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={() => <Home />} />
                    <Route path="/blog" exact component={() => <Blog />} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
