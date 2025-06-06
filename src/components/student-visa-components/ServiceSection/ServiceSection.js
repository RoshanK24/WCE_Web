import React from 'react';
import Services from '../../../api/service'
import { Link } from "react-router-dom";
import aIcon1 from '../../../images/icon/h_star.png'
import aIcon2 from '../../../images/icon/arrow_right.svg'

import shape1 from '../../../images/shape/s_shape1.png'
import shape2 from '../../../images/shape/s_shape2.png'
import shape3 from '../../../images/shape/s_shape3.png'
import shape4 from '../../../images/shape/s_shape4.png'


const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="service service-bottom-pb pos-rel black-bg pt-120">
            <div className="container">
                <div className="xb-service__top ul_li_between mb-20">
                    <div className="sec-title sec-title--white style-2 mb-20">
                        <span className="sec-title--sub"><img src={aIcon1} alt="" />services<img src={aIcon1} alt="" /></span>
                        <h3 className="sec-title--heading">Easy Study Abroad</h3>
                    </div>
                    <div className="xb-service__btn mb-20">
                        <Link onClick={ClickHandler} to="/services" className="xb-tran-btn">more services<span><img src={aIcon2} alt="" /></span></Link>
                    </div>
                </div>
                <div className="xb-service2__wrap ul_li">
                    {Services.slice(6, 14).map((service, srv) => (
                        <div className="xb-service2" key={srv}>
                            <div className="xb-item--inner">
                                <div className="xb-item--icon">
                                    <img src={service.sIcon} alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <h3 className="xb-item--title"><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h3>
                                    <p className="xb-item--content">{service.description}</p>
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-item--link">Read more</Link>
                                </div>
                                <Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className="xb-item--link-full"></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="service-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
                        <img src={shape2} alt="" />
                    </div>
                </div>
                <div className="shape shape--3">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":80}'>
                        <img src={shape3} alt="" />
                    </div>
                </div>
                <div className="shape shape--4">
                    <div className="shape-inner" data-parallax='{"x":50,"y":80}'>
                        <img src={shape4} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;