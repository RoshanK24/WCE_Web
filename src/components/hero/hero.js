import React from 'react';
import Bg from '../../images/bg/hero_bg.jpg'
import { Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom'

const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="hero hero__style-one bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="hero__content">
                            <Slide direction='up' triggerOnce={'false'} duration={1200}>
                                <h1>Your Passport to<br /> <span>Global Education</span></h1>
                            </Slide>
                            <Slide direction='up' triggerOnce={'false'} duration={1400}>
                                <p>Transform Your Academic Journey with Expert Guidance and Worldwide Opportunities.</p>
                            </Slide>
                            <ul className="xb-list list-unstyled mt-40 mb-60">
                                <Slide direction='up' triggerOnce={'false'} duration={1600}>
                                    <li><i className="far fa-check"></i>Expert Legal Support</li>
                                    <li><i className="far fa-check"></i>Meeting Your Unique Needs</li>
                                    <li><i className="far fa-check"></i>Tailored Immigration Solutions</li>
                                </Slide>
                            </ul>
                            <Slide direction='up' triggerOnce={'false'} duration={1800}>
                                <div>
                                    <div className="btns">
                                        <Link onClick={ClickHandler} className="thm-btn" to="/contact">Start Your Journey Today</Link>
                                        {/* <Link onClick={ClickHandler} className="thm-btn thm-btn--white" to="/about">Read Story</Link> */}
                                    </div>
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;