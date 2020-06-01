import React from "react";
import './assets/style.scss'
import profile from './assets/img/profile.png'

const Header = props => {
    return (
        <div className='header'>
            <div className="row">
                <div className="text">
                    <h1>Hey There!</h1><br /><br />
                    <h4>I'm Patricia, and I'm an Information Security graduate <br /> with a keen interest in software engineering!</h4><br /><br />
                    <a href='mailto:phudakova7@gmail.com' type="button" className="btn btn-outline-success btn-lg">
                        Get In Touch!
                    </a>
                </div>
                <div className="image">
                    <img src={profile} className="rounded-circle" alt="Cinque Terre" />
                </div>
            </div>
        </div>
    )
}

export default Header