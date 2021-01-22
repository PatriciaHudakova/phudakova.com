import React, {useState, useEffect}  from 'react';
import './assets/style.scss'

const StickyButton = () => {

    const [visible, setVisible] = useState(false)

    function handleScroll() {
        setVisible(500 < window.pageYOffset)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll]);

    return (
        <a href='mailto:phudakova7@gmail.com' className={'btn btn-warning btn-lg font-weight-bold col-xs-7 stickyButton ' + (visible ? 'fixed-bottom' : 'd-none')}>
            Get In Touch!
        </a>
    )
}

export default StickyButton