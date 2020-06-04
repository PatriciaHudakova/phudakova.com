import React from 'react';
import classnames from 'classnames';
import './assets/style.scss'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const visible = 400 > currentScrollPos;
        this.setState({
            visible
        });
    };

    render() {
        return (
            <footer
                className={classnames('fixed-bottom', {
                    'fixed-bottom--hidden': this.state.visible
                })}
            >
                <a href='mailto:phudakova7@gmail.com' type='button' className='btn btn-danger btn-lg'>
                    Get In Touch!
                </a>
            </footer>
        );
    }
}

export default Footer