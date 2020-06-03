import React from "react";
import './assets/style.scss'
import profile from './assets/img/profile.png'

const Header = props => {
    return (
        <div className='header'>
            <div className="row">
                <div className="text text-lg-left text-center">
                    <h1>Hey There!</h1>
                    <h4>I'm Patricia, and I'm an Information Security <br />graduate with a keen interest in software engineering!</h4><br />
                    <a href='mailto:phudakova7@gmail.com' type="button" className="btn btn-outline-danger btn-lg">
                        Get In Touch!
                    </a>
                </div>
                <picture className="center-block">
                    <img src={profile} className="img-responsive" alt="Responsive image" />
                </picture>
            </div>
        </div>
    )
}

export default Header