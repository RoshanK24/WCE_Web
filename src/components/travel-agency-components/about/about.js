import React from 'react';
import VideoModal from '../../ModalVideo';
import { Link } from 'react-router-dom'
import aImg1 from '../../../images/about/trv_img.jpg'
import aImg2 from '../../../images/about/trv_img2.jpg'
import aImg3 from '../../../images/about/trv_img3.jpg'

import aIcon from '../../../images/icon/arrow-right.svg'
import shape from '../../../images/shape/about_shape.png'


const About = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="about pos-rel pt-125 pb-125">
            <div className="container">
                <div className="row align-items-center mt-none-30">
                    <div className="col-lg-7 mt-30">
                        <div className="xb-about xb-about2">
                            <div className="xb-item--img text-center pos-rel">
                                <div className="xb-item--main-img">
                                    <img src={aImg1} alt="" />
                                </div>
                                <div className="xb-item--sml-img1">
                                    <img src={aImg2} alt="" />
                                </div>
                                <div className="xb-item--sml-img2">
                                    <img src={aImg3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mt-30">
                        <div className="xb-travel-about-content">
                            <div className="sec-title sec-title--travel">
                                <span className="subtitle">Travel with Evisa Travel Agency</span>
                                <h2 className="mb-25">Make Your Travel More Enjoyable</h2>
                                <p className="mb-25">Embrace a worry-free travel experience with us as <br /> we strive to make your journey more enjoyable. From <br /> seamless itineraries to handpicked</p>
                                <p>accommodations, we take care of every detail, <br /> leaving you free to savor every moment and create <br /> unforgettable memories.</p>
                            </div>
                            <ul className="xb-about-list list-unstyled mt-25 mb-40">
                                <li><i className="far fa-check"></i>Most Popular Destinations</li>
                                <li><i className="far fa-check"></i>Budget Friendly Packages</li>
                                <li><i className="far fa-check"></i>100% Satisfaction Guarantied</li>
                            </ul>
                            <div className="ul_li btns">
                                <Link onClick={ClickHandler} className="thm-btn thm-btn--trv" to="/about">Our History<span><img src={aIcon} alt="" /></span></Link>
                                <VideoModal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xb-about-shape">
                <img src={shape} alt="" />
            </div>
            <h2 className="xb-strock-text">About WCE</h2>
        </section>
    )
}

export default About;