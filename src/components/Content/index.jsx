import React from "react";
import {Container} from 'reactstrap'
import MyTimeline from "./MyTimeline";
import MyHobbies from "./MyHobbies"
import './assets/style.scss'
import 'react-vertical-timeline-component/style.min.css';
import SimpleReactLightbox from 'simple-react-lightbox';

const Content = props => {
    return (
        <Container className='myContent'>
            <h2 className='row-cols-1 mt-5'>What do I do?</h2><br />
            <h5 className='row-cols-1 ml-5 mr-5'>
                When I'm not working, I enjoy doing puzzles, learning about skin care and playing competitive Overwatch!
            </h5>

            <section className='mt-4 timeline' >
                <MyTimeline />
            </section>
            <h2 className='icon row-cols-1 mt-5'>Outside of work</h2><br />
            <section className='mt-4 timeline' >
                <SimpleReactLightbox>
                    <MyHobbies />
                </SimpleReactLightbox>
            </section>
        </Container>
    )
}

export default Content