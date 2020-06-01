import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {IoLogoGithub, IoIosMail, IoLogoLinkedin, IoIosPaper} from 'react-icons/io'
import './assets/style.scss'
import CV from '../../assets/docs/CV.pdf'


const Navigation = props => {
    return (
        <div className='navigation'>
            <Navbar expand="md">
                <NavbarBrand href="/">{'<P />'}</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/PatriciaHudakova" target='_blank'><IoLogoGithub /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.linkedin.com/in/patricia-hudakova-395729150/" target='_blank'><IoLogoLinkedin /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="mailto:phudakova7@gmail.com"><IoIosMail /></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={CV} target='_blank'><IoIosPaper /></NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}





export default Navigation