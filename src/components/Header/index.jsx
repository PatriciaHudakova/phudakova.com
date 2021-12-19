import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import './assets/style.scss'
import profileSq from './assets/img/profileSq.jpg'

const Header = props => {
    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col xs={12} sm={{size:12, order: 1}} md={{size:4, order: 2, offset: 1}} className='text-sm-right text-center'>
                        <picture className='center-block mt-5 w-100'>
                            <img src={profileSq} className='profile img-responsive w-100 p-4' alt='Responsive image' />
                        </picture>
                    </Col>

                    <Col xs={12} sm={{size:12, order: 2}} md={{size:7, order: 1}}>
                        <div className="text text-lg-left text-center">
                            <h1 className='h1'>Hey There!</h1><br />
                            <h2 className='h4'>I'm Patricia, and I'm a Backend developer at Tendable!</h2><br /><br /><br />
                            <a href='mailto:phudakova7@gmail.com' className='btn btn-outline-info btn-l'>
                                Get In Touch!
                            </a>
                        </div>
                    </Col>
                </Row>
                <div className='hero nonselectable'>{'<P/>'}</div>
            </Container>
        </div>
    )
}

export default Header
