import React from "react";
import {Container} from 'reactstrap'
import './assets/style.scss'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Content = props => {
    return (
        <Container className='myContent'>
            <h2 className='row-cols-1 mt-5'>What do I do?</h2><br />
            <h5 className='row-cols-1 ml-5 mr-5'>
                Aside from working, I enjoy learning and applying new concepts to my hobby projects, feel free to
                check them out on my timeline below!
            </h5>

            <section className='mt-4 claimSection' >
                {'<P'} <br/>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work align='left'"
                        date="2015 - 2018"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                       // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">BSc Computer Science and Mathematics</h3>
                        <h4 className="vertical-timeline-element-subtitle">Royal Holloway</h4>
                        <p>
                            ll
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        //icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Web Designer</h3>
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            User Experience, Visual Design
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
                {'/>'}
            </section>
        </Container>
    )
}

export default Content