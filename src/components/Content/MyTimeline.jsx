import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {IoIosBriefcase, IoIosLaptop, IoIosLink} from "react-icons/io";
import {FaGraduationCap} from "react-icons/fa";

const MyTimeline = () => (
    <div className='timeline'>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="August 2021 - Present"
                iconStyle={{ background: 'rgba(184, 179, 179, 1)'}}
                icon={<IoIosBriefcase />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">Backend Developer</h4>
                <h5 className="vertical-timeline-element-subtitle">Perfect Ward</h5>
                <div>
                    <span className="badge badge-pill badge-danger mr-2">Ruby</span>
                    <span className="badge badge-pill badge-warning mr-2">Rails</span>
                    <span className="badge badge-pill badge-success mr-2">AWS</span>
                    <span className="badge badge-pill badge-dark mr-2">Heroku</span>
                    <span className="badge badge-pill badge-info mr-2">Docker</span>
                    <span className="badge badge-pill badge-warning mr-2">PostgreSQL</span>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="July 2020 - July 2021"
                iconStyle={{ background: 'rgba(184, 179, 179, 1)'}}
                icon={<IoIosBriefcase />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">Future Networks Consultant</h4>
                <h5 className="vertical-timeline-element-subtitle">Net Reply</h5>
                <p>
                    My main focus as a consultant centres around any future networking concepts such as 5G, SDN and NFV while contributing to the development of client projects in Golang.
                </p>
                <div>
                    <span className="badge badge-pill badge-info mr-2">Golang</span>
                    <span className="badge badge-pill badge-success mr-2">5G</span>
                    <span className="badge badge-pill badge-warning mr-2">SDN</span>
                    <span className="badge badge-pill badge-danger mr-2">NFV</span>
                    <span className="badge badge-pill badge-info mr-2">Docker</span>
                    <span className="badge badge-pill badge-secondary mr-2">Kubernetes</span>
                    <span className="badge badge-pill badge-dark mr-2">Helm</span>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="June 2020"
                iconStyle={{ background: 'rgba(184, 179, 179, 1)'}}
                icon={<IoIosLaptop />}
            >
                <a href="https://github.com/PatriciaHudakova/phudakova.com"><h4 className="vertical-timeline-element-title font-weight-bold">phudakova.com  <IoIosLink /></h4></a>
                <h5 className="vertical-timeline-element-subtitle mt-1">Hobby Project</h5>
                <p>
                    A responsive, fully functional personal website with an entirely different feel created using REACT.
                </p>
                <div>
                    <span className="badge badge-pill badge-dark mr-2">REACT</span>
                    <span className="badge badge-pill badge-danger mr-2">Bootstrap</span>
                    <span className="badge badge-pill badge-info mr-2">SASS</span>
                    <span className="badge badge-pill badge-success mr-2">JSX</span>
                    <span className="badge badge-pill badge-warning mr-2">JS</span>
                    <span className="badge badge-pill badge-success mr-2">HTML</span>
                    <span className="badge badge-pill badge-info mr-2">CSS</span>
                    <span className="badge badge-pill badge-success mr-2">Git</span>
                </div><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="2018 - 2020"
                iconStyle={{ background: 'rgba(184, 179, 179, 1)'}}
                icon={<FaGraduationCap />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">MSc Information Security</h4>
                <h5 className="vertical-timeline-element-subtitle mt-2">Royal Holloway, University of London</h5>
                <p>
                    Final year project involved exploring web vulnerabilities and their mitigations.
                </p>
                <div>
                    <span className="badge badge-pill badge-dark mr-2">Django</span>
                    <span className="badge badge-pill badge-success mr-2">HTML</span>
                    <span className="badge badge-pill badge-info mr-2">CSS</span>
                    <span className="badge badge-pill badge-light mr-2">Cryptography</span>
                    <span className="badge badge-pill badge-danger mr-2">Web Security</span>
                    <span className="badge badge-pill badge-warning mr-2">SQL</span>
                    <span className="badge badge-pill badge-secondary mr-2">Bash</span>
                    <span className="badge badge-pill badge-light mr-2">LaTex</span>
                </div><br />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work align='left'"
                date="2018 - 2019"
                iconStyle={{ background: 'rgba(184, 179, 179, 1)'}}
                icon={<IoIosBriefcase />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">Teaching Assistant</h4>
                <h5 className="vertical-timeline-element-subtitle mt-2">Royal Holloway, University of London</h5>
                <p>
                    Assisting with OOP and Software Design labs throughout the year involving
                    explaining concepts, helping with set-up and marking.
                </p>
                <div>
                    <span className="badge badge-pill badge-danger mr-2">Java</span>
                    <span className="badge badge-pill badge-secondary mr-2">Software Design</span>
                </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work mb-5"
                date="2015 - 2018"
                iconStyle={{ background: 'rgba(184, 179, 179, 1)'}}
                icon={<FaGraduationCap />}
            >
                <h4 className="vertical-timeline-element-title font-weight-bold">BSc Computer Science and Mathematics</h4>
                <h5 className="vertical-timeline-element-subtitle mt-2">Royal Holloway, University of London</h5>
                <p>
                    Final year project involved creating a graph calculator with the following
                    algorithms: Dijkstra's, Kruskal's, Hamiltonian and Vertex Colouring.
                </p>
                <div>
                    <span className="badge badge-pill badge-danger mr-2">Java</span>
                    <span className="badge badge-pill badge-success mr-2">HTML</span>
                    <span className="badge badge-pill badge-info mr-2">CSS</span>
                    <span className="badge badge-pill badge-secondary mr-2">Bash</span>
                    <span className="badge badge-pill badge-success mr-2">Git</span>
                    <span className="badge badge-pill badge-warning mr-2">Software Enginering</span>
                </div><br />
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
);

export default MyTimeline;
