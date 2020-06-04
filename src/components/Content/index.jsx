import React from "react";
import {Container} from 'reactstrap'
import MyTimeline from "./MyTimeline";
import './assets/style.scss'
import 'react-vertical-timeline-component/style.min.css';

const Content = props => {
    return (
        <Container className='myContent'>
            <h2 className='row-cols-1 mt-5'>What do I do?</h2><br />
            <h5 className='row-cols-1 ml-5 mr-5'>
                Aside from working, I enjoy learning and applying new concepts to my hobby projects, feel free to
                check them out on my timeline (and GitHub) below!
            </h5>

            <section className='mt-4 claimSection' >
                <MyTimeline />
            </section>
            <h2 className='row-cols-1 mt-5'>Beside working...</h2><br />
        </Container>
    )
}

export default Content