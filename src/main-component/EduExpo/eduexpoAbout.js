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
                <span className="flex text-xl md:text-2xl font-bold items-center gap-1"><img src={aIcon1} alt="" className='w-5 h-5' />About us<img src={aIcon1} alt="" className='w-5 h-5' /></span>
                {/* <h3 className="sec-title--heading mb-30">Since 1998 - Unparalleled Comprehensive <br /> Student Visa Guide</h3> */}
                <p className='text-lg w-[100%] lg:w-[65%]'>Edu Expo 2K25 is an exhibition platform to link students with universities, colleges, as well as education consultants to help them towards studying abroad. From targeting students to converting them with value-driven engagement, expert advice, and exclusive opportunities.</p>
                {/* </div> */}
                <div className="row">
                    <div className="col-xl-3 col-lg-4 mt-8">
                        <div className="about-btn">
                            <Link onClick={ClickHandler} className="grd-btn" to="registration">Register Now</Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 mt-8">
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