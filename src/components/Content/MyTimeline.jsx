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
                    <span className="badge badge-pill badge-dark mr-2">REACT</span>
                    <span className="badge badge-pill badge-info mr-2">SCSS</span>
                    <span className="badge badge-pill badge-success mr-2">JSX</span>
                    <span className="badge badge-pill badge-light mr-2">Authentication</span>
                    <span className="badge badge-pill badge-warning mr-2">PostgreSQL</span>
                    <span className="badge badge-pill badge-danger mr-2">APIs</span>
                    <span className="badge badge-pill badge-success mr-2">Git</span>
                </row><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="June 2020"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<IoIosLaptop />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">phudakova.com</h4>
                <h5 className="vertical-timeline-element-subtitle mt-1">Hobby Project</h5>
                <p>
                    A responsive, fully functional personal website with an entirely different feel created using REACT.
                </p>
                <row>
                    <span className="badge badge-pill badge-dark mr-2">REACT</span>
                    <span className="badge badge-pill badge-danger mr-2">Bootstrap</span>
                    <span className="badge badge-pill badge-info mr-2">SCSS</span>
                    <span className="badge badge-pill badge-success mr-2">JSX</span>
                    <span className="badge badge-pill badge-warning mr-2">JS</span>
                    <span className="badge badge-pill badge-success mr-2">HTML</span>
                    <span className="badge badge-pill badge-info mr-2">CSS</span>
                    <span className="badge badge-pill badge-success mr-2">Git</span>
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
                    <span className="badge badge-pill badge-info mr-2">Golang</span>
                    <span className="badge badge-pill badge-danger mr-2">APIs</span>
                    <span className="badge badge-pill badge-warning mr-2">PostgreSQL</span>
                    <span className="badge badge-pill badge-success mr-2">Git</span>
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
                    Final year project involved exploring web vulnerabilities and their mitigations.
                </p>
                <row>
                    <span className="badge badge-pill badge-dark mr-2">Django</span>
                    <span className="badge badge-pill badge-success mr-2">HTML</span>
                    <span className="badge badge-pill badge-info mr-2">CSS</span>
                    <span className="badge badge-pill badge-light mr-2">Cryptography</span>
                    <span className="badge badge-pill badge-danger mr-2">Web Security</span>
                    <span className="badge badge-pill badge-warning mr-2">SQL</span>
                    <span className="badge badge-pill badge-secondary mr-2">Bash</span>
                    <span className="badge badge-pill badge-light mr-2">LaTex</span>
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
                    Video Game Design, AR/VR and Arduino. During my time there, aside from delivering courses, I’ve
                    been entrusted with being responsible for the safety of all campers, dealing
                    with parental enquiries and ensuring all tutors have have the right materials
                    specific to their class.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work mb-5"
                date="2015 - 2018"
                iconStyle={{ background: 'rgb(217, 83, 79)', color: '#d9534f' }}
                icon={<FaGraduationCap />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">BSc Computer Science and Mathematics</h4>
                <h5 className="vertical-timeline-element-subtitle mt-2">Royal Holloway, University of London</h5>
                <p>
                    Final year project involved creating a graph calculator with the following
                    algorithms: Dijkstra's, Kruskal's, Hamiltonian and Vertex Colouring.
                </p>
                <row>
                    <span className="badge badge-pill badge-danger mr-2">Java</span>
                    <span className="badge badge-pill badge-success mr-2">HTML</span>
                    <span className="badge badge-pill badge-info mr-2">CSS</span>
                    <span className="badge badge-pill badge-secondary mr-2">Bash</span>
                    <span className="badge badge-pill badge-success mr-2">Git</span>
                    <span className="badge badge-pill badge-warning mr-2">Software Enginering</span>
                </row><br />
            </VerticalTimelineElement>
        </VerticalTimeline>
    </>
);

export default MyTimeline;