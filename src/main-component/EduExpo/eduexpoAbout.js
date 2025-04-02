import React from 'react';
import { Link } from 'react-router-dom'
import aIcon1 from '../../images/icon/h_star.png' 
import about from '../../images/about/about_img2.png'
import shape1 from '../../images/shape/a_shape1.png'
import shape2 from '../../images/shape/a_shape2.png'

const EduexpoAbout = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="about pos-rel py-[4rem]">
            <div className="container">
                {/* <div className="sec-title sec-title--big style-2 mb-20"> */}
                <span className="sec-title--sub"><img src={aIcon1} alt="" />about us<img src={aIcon1} alt="" /></span>
                {/* <h3 className="sec-title--heading mb-30">Since 1998 - Unparalleled Comprehensive <br /> Student Visa Guide</h3> */}
                <p className='text-lg'>Are you dreaming of studying abroad but unsure where to start? EduExpo 2K25 is your one-stop destination to explore top universities, scholarships, visa guidance, and career opportunities—all in one place!</p>
                {/* </div> */}
                <div className="row align-items-center mt-none-30">
                    <div className="col-xl-3 col-lg-4 mt-30">
                        <div className="about-btn">
                            <Link onClick={ClickHandler} className="grd-btn" to="registration">Register Now</Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 mt-30">
                        <div className="xb-about-content">
                            <p>Unlock Your Educational Journey Abroad: The Essential Student Visa GuideYour Gateway to Global Learning</p>
                            <Link onClick={ClickHandler} to="/about">Explore More Insight About us<i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mt-30">
                        <div className="xb-about-img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
                        <img src={shape2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EduexpoAbout;