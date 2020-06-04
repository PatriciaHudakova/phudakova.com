import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {IoIosBriefcase, IoIosLaptop} from "react-icons/io";
import {FaGraduationCap} from "react-icons/fa";

const MyTimeline = () => (
    <>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="in progress"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<IoIosLaptop />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">Restaurant Log</h4>
                <h5 className="vertical-timeline-element-subtitle mt-1">Hobby Project</h5>
                <p>
                    A platform for people to record, share and look up restaurant experiences so they
                    don't have to have the same bad experience twice.
                </p>
                <row>
                    <span className="badge badge-pill badge-dark">REACT</span>
                    <span className="badge badge-pill badge-info">SCSS</span>
                    <span className="badge badge-pill badge-success">JSX</span>
                    <span className="badge badge-pill badge-light">Authentication</span>
                    <span className="badge badge-pill badge-warning">PostgreSQL</span>
                    <span className="badge badge-pill badge-danger">APIs</span>
                </row><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="June 2020"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<IoIosLaptop />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">phudakova.com v2.0</h4>
                <h5 className="vertical-timeline-element-subtitle mt-1">Hobby Project</h5>
                <p>
                    A responsive, fully functional personal website with an entirely different feel created using REACT JS libary.
                </p>
                <row>
                    <span className="badge badge-pill badge-dark">REACT</span>
                    <span className="badge badge-pill badge-danger">Bootstrap</span>
                    <span className="badge badge-pill badge-info">SCSS</span>
                    <span className="badge badge-pill badge-success">JSX</span>
                    <span className="badge badge-pill badge-warning">JS</span>
                </row><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="May 2020"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<IoIosLaptop />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">phudakova.com v1.0</h4>
                <h5 className="vertical-timeline-element-subtitle mt-1">Hobby Project</h5>
                <p>
                    A simply static yet fully functional personal website.
                </p>
                <row>
                    <span className="badge badge-pill badge-success">HTML</span>
                    <span className="badge badge-pill badge-info">CSS</span>
                </row><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="April 2020"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<IoIosLaptop />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">Telegram Event Bot</h4>
                <h5 className="vertical-timeline-element-subtitle mt-1">Hobby Project</h5>
                <p>
                    A telegram bot created using Golang that helps you keep track of your scheduled events
                    with full create, edit, delete and reminder functionality.
                </p>
                <row>
                    <span className="badge badge-pill badge-info">Golang</span>
                    <span className="badge badge-pill badge-danger">APIs</span>
                    <span className="badge badge-pill badge-warning">PostgreSQL</span>
                </row><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="2018 - 2020"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<FaGraduationCap />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">MSc Information Security</h4>
                <h5 className="vertical-timeline-element-subtitle mt-2">Royal Holloway, University of London</h5>
                <p>
                    Final year project involved exploring web vulnerabilities and their mitigations using a test
                    website specifically created for that purpose.
                </p>
                <row>
                    <span className="badge badge-pill badge-dark">Django</span>
                    <span className="badge badge-pill badge-success">HTML</span>
                    <span className="badge badge-pill badge-info">CSS</span>
                    <span className="badge badge-pill badge-light">Cryptography</span>
                    <span className="badge badge-pill badge-danger">Web Security</span>
                    <span className="badge badge-pill badge-warning">SQL</span>
                </row><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="2018 - 2019"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<IoIosBriefcase />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">Teaching Assistant</h4>
                <h5 className="vertical-timeline-element-subtitle mt-2">Royal Holloway, University of London</h5>
                <p>
                    Assisting with OOP and Software Design labs throughout the year involving
                    explaining concepts, helping with set-up and marking.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - present"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<IoIosBriefcase />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">Tutor</h4>
                <h5 className="vertical-timeline-element-subtitle">Fire-Tech Camp</h5>
                <p>
                    Delivering in person and remote courses for young people including
                    Video Game Design, AR/VR and Arduino. During my time there, I’ve
                    been entrusted with assisting with running of the camp.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2015 - 2018"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<FaGraduationCap />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">BSc Computer Science and Mathematics</h4>
                <h5 className="vertical-timeline-element-subtitle mt-2">Royal Holloway, University of London</h5>
                <p>
                    Final year project involved creating a graph calculator with the following
                    algorithms: Dijkstra's, Kruskal's, Hamiltonian and Vertex Colouring
                    as an executable .jar file.
                </p>
                <row>
                    <span className="badge badge-pill badge-danger">Java</span>
                    <span className="badge badge-pill badge-success">HTML</span>
                    <span className="badge badge-pill badge-info">CSS</span>
                    <span className="badge badge-pill badge-warning">Software Enginering</span>
                </row><br />
            </VerticalTimelineElement>
        </VerticalTimeline>
    </>
);

export default MyTimeline;