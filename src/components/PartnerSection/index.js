import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Link } from 'react-router-dom'
// import pimg1 from '../../images/brand/img_01.png'
// import pimg2 from '../../images/brand/img_02.png'
// import pimg3 from '../../images/brand/img_03.png'
// import pimg4 from '../../images/brand/img_04.png'
// import pimg5 from '../../images/brand/img_05.png'
// import pimg6 from '../../images/brand/img_06.png'
// import pimg7 from '../../images/brand/img_07.png'
import partner1 from '../../images/brand/partner/1.png'
import partner2 from '../../images/brand/partner/2.png'
import partner3 from '../../images/brand/partner/3.png'
import partner4 from '../../images/brand/partner/4.png'
import partner5 from '../../images/brand/partner/5.png'
// import partner6 from '../../images/brand/partner/6.png'
import partner7 from '../../images/brand/partner/7.png'
import partner8 from '../../images/brand/partner/8.png'
import partner9 from '../../images/brand/partner/9.png'

const partners = [
    {
        pImg: partner1,
    },
    {
        pImg: partner2,
    },
    {
        pImg: partner3,
    },
    {
        pImg: partner4,
    },
    {
        pImg: partner5,
    },
    // {
    //     pImg: partner6,
    // },
    {
        pImg: partner7,
    },
    {
        pImg: partner8,
    },
    {
        pImg: partner9,
    },
]


const PartnerSection = (props) => {

    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (

        <section className="brand py-16">
            <div className="container">
                <h2 className="brand-title text-center">
                    <span><span className="text-sm font-bold sm:text-lg">We're proud to work with our preferred partners</span></span>
                </h2>
                <div className="xb-swiper-sliders brand-slider">
                    <div className="xb-carousel-inner">
                        <div className="xb-swiper-container py-0">
                            <div className="xb-swiper-wrapper">
                                <Slider {...settings}>
                                    {partners.map((partner, pitem) => (
                                        <div className="" key={pitem}>
                                            <img src={partner.pImg} alt="" />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;