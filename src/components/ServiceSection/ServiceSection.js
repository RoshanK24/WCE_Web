import React from 'react';
import Services from '../../api/service'
import { Link } from "react-router-dom";
import sImg from '../../images/service/img_01.jpg'
import sBg from '../../images/bg/service_bg.png'

const ServiceSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="visa type pb-[3.5rem] sm:pb-[6rem]">
            <div className="container">
                <div className="service-wrap pos-rel">
                    <div className="service-img-wrap">
                        <div className="service-bg" style={{ backgroundImage: `url(${sBg})` }}></div>
                        <div className="service-img" style={{ backgroundImage: `url(${sImg})` }}></div>
                    </div>
                    <div className="sec-title wow skewIn pt-[2.5rem] sm:pt-[4rem]">
                        <h2 className="mb-30 text-4xl ps-3 ">Visa types and eligibility <br /> <span className=''>assessment</span></h2>
                    </div>
                    <div className="row mt-none-30 flex justify-center ">
                        {Services.slice(0, 7).map((service, srv) => (
                            <div className={`col-lg-4 col-md-6 mt-30 w-44 sm:w-80 lg:w-[26rem] p-1 ${service.title ? (""):"hidden xl:block"}`} key={srv}>
                                {service.title ?
                                    <div className="xb-service ">
                                        <div className="xb-item--inner p-3 h-68 sm:h-fit">
                                            <div className={`xb-item--icon mb-50 ${service.iconColor}`}>
                                                <img src={service.sIcon} alt="" />
                                            </div>
                                            <div className="xb-item--holder">
                                                <h3 className="xb-item--title mb-20"><Link onClick={ClickHandler} to={`/service-single/${service.slug}`} className='text-lg sm:text-2xl'>{service.title}</Link>
                                                </h3>
                                                <div className="xb-item--description text-xs sm:text-base">
                                                    {service.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    : ''}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;