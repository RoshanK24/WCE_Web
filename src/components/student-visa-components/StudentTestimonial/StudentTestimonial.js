import React from 'react';
import tsm1 from '../../../images/testimonial/img_01.jpg'
import tsm2 from '../../../images/testimonial/img_02.jpg'
import tsm3 from '../../../images/testimonial/img_03.jpg'
import rating from '../../../images/icon/h_star.png'
import quote from '../../../images/icon/t_quote.png'

import shape1 from '../../../images/shape/tm_shape1.png'
import shape2 from '../../../images/shape/tm_shape2.png'



const testimonial = [
    {
        id: '01',
        tImg: tsm1,
        Des: "Unparalleled Student Visa Service: Delivering Expertise, Personalized Guidance, and Reliable, Timely Updates for a Seamless and Process",
        Title: 'Gladriao Gomeza',
        country: 'AMAERICA-BOUND STUDENT',
    },
    {
        id: '02',
        tImg: tsm2,
        Des: "Profound Gratitude for Exceptional Student Visa Assistance: Painless Application and an Incredible Educational Journey in the UK",
        Title: 'Olabira Lahardia',
        country: 'CANADA-BOUND STUDENT',
    },
    {
        id: '03',
        tImg: tsm3,
        Des: "Elevating My Australian Student Visa Experience: Unmatched Assistance, Dedicated Team, Comprehensive Interview Preparation!",
        Title: 'Marana Galadare',
        country: 'UK-BOUND STUDENT',
    }
]

const StudentTestimonial = () => {

    return (
        <section className="testimonial pos-rel black-bg pt-120 pb-120">
            <div className="container">
                <div className="row align-items-end mb-30">
                    <div className="col-lg-6">
                        <div className="sec-title sec-title--white style-2 mb-30">
                            <span className="sec-title--sub"><img src={rating} alt="" />popular<img src={rating} alt="" /></span>
                            <h3 className="sec-title--heading">Happy Student Feedback</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="xb-testimonial2__ratting ul_li_right mb-30">
                            <h2>4.8</h2>
                            <span>Rating from <br /> our Clients</span>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    {testimonial.map((testimonial, tsm) => (
                        <div className="col-lg-4" key={tsm}>
                            <div className="xb-testimonial2">
                                <div className="xb-item--inner pos-rel">
                                    <div className="xb-item--img" style={{ backgroundImage: `url(${testimonial.tImg})` }}></div>
                                    <div className="xb-item--holder">
                                        <div className="xb-item--quote">
                                            <img src={quote} alt="" />
                                        </div>
                                        <span className="xb-item--desig">
                                            {testimonial.country}
                                        </span>
                                        <div className="xb-item--content">
                                            "{testimonial.Des}"
                                        </div>
                                        <h1 className="xb-item--name">{testimonial.Title}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="testimonial-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-70}'>
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":80}'>
                        <img src={shape2} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentTestimonial;