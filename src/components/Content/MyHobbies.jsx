import React from "react";
import { Container, Row, Col } from 'reactstrap';
import cyprus from "./assets/img/cyprus.jpg";
import games from "./assets/img/games.jpeg";
import summer from "./assets/img/summer.jpg";
import food from "./assets/img/food.jpeg";
import boba from "./assets/img/boba.jpeg";
import scotland from "./assets/img/scotland.jpg";
import mum from "./assets/img/mum.jpeg";

const MyHobbies = () => (
    <>
        <div className='hobbies'>
            <Container>
                <Row>
                    <Col xs={12} sm={{ size: 6, order: 1}} md={{size:4, order: 1}}>
                        <picture className='cyprus center-block mt-5 w-100'>
                            <img src={cyprus} className='img-responsive w-100 p-4' alt=''  />
                            <div className="description">Travelled to Cyprus</div>
                        </picture>
                    </Col>
                    <Col xs={12} sm={{ size: 6, order: 2}} md={{size:8, order: 2}}>
                        <picture className='games center-block mt-5 w-100 '>
                            <img src={games} className='img-responsive w-100 p-4' alt='' />
                            <div className="description">Board Games Cafe</div>
                        </picture>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={{ size: 4, order: 1}} md={{size:4, order: 1}}>
                        <picture className='summer center-block mt-5 w-100'>
                            <img src={summer} className='img-responsive w-100 p-4' alt='' />
                            <div className="description">Summer Ball</div>
                        </picture>
                    </Col>
                    <Col xs={12} sm={{ size: 4, order: 2}} md={{size:4, order: 2}}>
                        <picture className='mum center-block mt-5 w-100'>
                            <img src={mum} className='img-responsive w-100 p-4' alt='' />
                            <div className="description">Beach somewhere in the UK</div>
                        </picture>
                    </Col>
                    <Col xs={12} sm={{ size: 4, order: 3}} md={{size:4, order: 3}}>
                        <picture className='food center-block mt-5 w-100'>
                            <img src={food} className='img-responsive w-100 p-4' alt='' />
                            <div className="description">Yummy ice-cream in Rome </div>
                        </picture>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={{ size: 6, order: 1}} md={{size:8, order: 1}}>
                        <picture className='scotland center-block mt-5 w-100'>
                            <img src={scotland} className='img-responsive w-100 p-4' alt='' />
                            <div className="description">Scottish museum!</div>
                        </picture>
                    </Col>
                    <Col xs={12} sm={{ size: 6, order: 2}} md={{size:4, order: 2}}>
                        <picture className='boba center-block mt-5 w-100'>
                            <img src={boba} className='img-responsive w-100 p-4' alt='' />
                            <div className="description">Boba</div>
                        </picture>
                    </Col>
                </Row>
            </Container>
        </div>
        <br />
    </>

);

export default MyHobbies