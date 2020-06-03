import React from "react";
import {Container} from 'reactstrap'
import './assets/style.scss'

const Content = props => {
    return (
        <Container className='myContent'>
            <h2 className='row-cols-1 mt-5'>What do I do?</h2><br />
            <h7 className='row-cols-1 ml-5 mr-5'>
                Aside from working, I enjoy learning and applying new concepts to my hobby projects, feel free to
                check them out on my timeline below!
            </h7>

            <section className='mt-4 claimSection'>
                {'<P'} <br/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="main-timeline">
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-globe"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">BSc Computer Science and Mathematics</h3>
                                        <p className="description">
                                            Final year project involved creating a graph calculator with the following
                                            algorithms: Dijkstra's, Kruskal's, Hamiltonian and Vertex Colouring
                                            as an executable .jar file.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-rocket"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">Fire-Tech Camp</h3>
                                        <p className="description">
                                            Delivering in person and remote courses for young people including
                                            Video Game Design, AR/VR and Arduino. During my time there, I’ve
                                            been entrusted with assisting with running of the camp.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">Teaching Assistant</h3>
                                        <p className="description">
                                            Assisting with OOP and Software Design labs throughout the year involving
                                            explaining concepts, helping with set-up and marking.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-briefcase"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">MSc Information Security</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus
                                            officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">Telegram Event Bot</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus
                                            officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">phudakova v1.0</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus
                                            officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">phudakova v2.0</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus
                                            officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                        </p>
                                    </div>
                                </a>
                                <a href="#" className="timeline">
                                    <div className="timeline-icon"><i className="fa fa-mobile"></i></div>
                                    <div className="timeline-content">
                                        <h3 className="title">Restaurant Log</h3>
                                        <p className="description">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus
                                            officiis quod! Aperiam eveniet nam nostrum odit quasi ullam voluptatum.
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {'/>'}
            </section>
        </Container>
    )
}

export default Content