import React from 'react';
// import CountryList from '../../../api/country'
// import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aIcon1 from '../../images/icon/h_star.png'

// import cnIcon1 from '../images/country/img_01.png'
// import cnIcon2 from '../images/country/img_02.png'
// import cnIcon3 from '../images/country/img_03.png'
// import cnIcon4 from '../images/country/img_04.png'
// import cnIcon5 from '../images/country/img_05.png'
// import cnIcon6 from '../images/country/img_06.png'
// import cnIcon7 from '../images/country/img_07.png'
// import cnIcon8 from '../images/country/img_08.png'
// import cnIcon9 from '../images/country/img_09.png'
// import cnIcon10 from '../images/country/img_10.png'
// import cnIcon11 from '../images/country/img_11.png'
// import cnIcon12 from '../images/country/img_12.png'

import CanadaIcon from '../../images/flag/1.png'
import AustraliaIcon from '../../images/flag/4.png'
import GermanyIcon from '../../images/flag/7.png'
// import ItalyIcon from '../../images/flag/9.png'
import JapanIcon from '../../images/flag/2.png'
import UkIcon from '../../images/flag/6.png'
import USAIcon from '../../images/flag/3.png'
import KoreaIcon from '../../images/flag/5.png'
import SpainIcon from '../../images/flag/8.png'

const CountrySection1 = (props) => {

    const country = [{
        Id: '1',
        sIcon: CanadaIcon,
        title: 'Canada',
        slug: 'Canada',
    },
    {
        Id: '2',
        sIcon: JapanIcon,
        title: 'Japan',
        slug: 'Japan',
    },
    {
        Id: '3',
        sIcon: USAIcon,
        title: 'America',
        slug: 'America',
    },
    {
        Id: '4',
        sIcon: AustraliaIcon,
        title: 'Australia',
        slug: 'Australia',
    },
    {
        Id: '5',
        sIcon: KoreaIcon,
        title: 'Korea',
        slug: 'Korea',
    },
    {
        Id: '6',
        sIcon: UkIcon,
        title: 'UK',
        slug: 'UK',
    },

    {
        Id: '7',
        sIcon: GermanyIcon,
        title: 'Germany',
        slug: 'Germany',
    },
    {
        Id: '8',
        sIcon: SpainIcon,
        title: 'Spain',
        slug: 'Spain',
    },]
    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
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


    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // }

    return (
        <section className="country pb-120">
            <div className="container">
                <div className="sec-title style-2 text-center mb-55">
                    <span className="sec-title--sub"><img src={aIcon1} alt="" />countries<img src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading">Best Countries to Study <br /> Abroad</h3>
                </div>
                <div className="xb-country-slide">
                    <div className="">
                        <div className="">
                            <Slider {...settings}>
                                {country.map((country, cnt) => (
                                    <div className="xb-country2" key={cnt}>
                                        <div className="xb-item--inner text-center">
                                            <div className="xb-item--flag mb-20">
                                                <img src={country.sIcon} alt="" />
                                            </div>
                                            <h3 className="xb-item--title">{country.title}</h3>
                                            {/* <Link onClick={ClickHandler} to={`/country-single/${country.slug}`} className="xb-item--link"></Link> */}
                                            <div className="xb-item--link"></div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CountrySection1;