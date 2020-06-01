import React from "react";
import './assets/style.scss'

const Header = props => {
    return (
        <div className='header'>
            <h1>Hey There!</h1><br /><br />
            <h4>I'm Patricia, and I'm a software engineer with a <br />keen interest in security!</h4><br /><br />
            <a href='mailto:phudakova7@gmail.com' type="button" className="btn btn-outline-success btn-lg">
                Get In Touch!
            </a>
        </div>
    )
}

export default Header