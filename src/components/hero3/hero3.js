import React from 'react';
import { Link } from 'react-router-dom'
import Bg from '../../images/bg/hero_bg-3.jpg'
import shape1 from '../../images/icon/arrow-right.svg'
import shape2 from '../../images/shape/hr_shape.png'

const Hero3 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="hero hero__style-three pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-12">
                        <div className="xb-hero-content2 pos-rel">
                            <div className="xb-item--holder">
                                <span>Travel with Evisa Travel Agency</span>
                                <h1 className="xb-item--title">Creating Memories <br /> Worldwide</h1>
                                <p>Creating Timeless Memories Across the Globe Capturing <br /> Moments That Last a Lifetime</p>
                            </div>
                            <div className="xb-item--btn btns gap-20">
                                <Link onClick={ClickHandler} className="thm-btn thm-btn--trv" to="/contact">Book Appointment<span><img src={shape1} alt="" /></span></Link>
                                <Link onClick={ClickHandler} className="thm-btn thm-btn--white thm-btn--trv" to="/about">Our History<span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                                    <path d="M6.68164 13.28L11.5716 8.9333C12.1491 8.41997 12.1491 7.57997 11.5716 7.06664L6.68164 2.71997" stroke="#0F172A" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className="xb-hero-strock-text">Travel Worldwide</h2>
            <div className="xb-hero-shape">
                <img src={shape2} alt="" />
            </div>
        </section>
    )
}

export default Hero3;