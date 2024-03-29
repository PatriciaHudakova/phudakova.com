import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {IoLogoGithub, IoIosMail, IoLogoLinkedin} from 'react-icons/io'
import './assets/style.scss'


const Navigation = props => {
    return (
        <div className='navigation'>
            <Navbar expand="md">
                <NavbarBrand className={'text-lg'} href="/">{'<P />'}</NavbarBrand>
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
                </Nav>
            </Navbar>
        </div>
    )
}





export default Navigation