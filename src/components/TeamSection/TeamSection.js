import React from 'react';
// import Teams from '../../api/team'
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import timg1 from '../../images/team/1.png'
import timg2 from '../../images/team/2.png'
import timg3 from '../../images/team/3.png'
import timg4 from '../../images/team/4.png'
import timg5 from '../../images/team/5.png'

const TeamSection = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slider = React.useRef(null);

    const teams = [{
        Id: '1',
        tImg: timg1,
        name: 'Rose Kapoor',
        slug: 'Rose Kapoor',
        title: 'Vice Counselor',
    },
    {
        Id: '2',
        tImg: timg2,
        name: 'Ramandeep Kaur',
        slug: 'Ramandeep Kaur',
        title: 'Asistant Marketing Executive',
    },
    {
        Id: '3',
        tImg: timg3,
        name: 'Rajveer Kaur',
        slug: 'Rajveer Kaur',
        title: 'Office Executive',
    },
    {
        Id: '4',
        tImg: timg4,
        name: 'Simrandeep Gill',
        slug: 'Simrandeep Gill',
        title: 'PTE Trainer',
    },
    {
        Id: '5',
        tImg: timg5,
        name: 'Harkeerat Singh',
        slug: 'Harkeerat Singh', 
        title: 'Marketing Executive',
    },]

    return (

        <section className="team pb-[2rem] sm:pb-[4rem] bg-gray-100">
            <div className="container">
                <div className="team-wrap pos-rel">
                    <div className="row mt-none-30">
                        <div className="col-xl-6 mt-30">
                            <div className="sec-title mb-2 sm:mb-[3rem] mx-3">
                                <h3 className="wow skewIn mb-3 sm:mb-[2rem] text-[1.35rem] sm:text-5xl font-bold">Our trusted immigration <br /> <span className='text-gray-500'> support team</span>
                                </h3>
                                <div className='text-base sm:text-lg'>At the heart of our commitment to providing exceptional immigration solutions
                                    stands</div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="xb-swiper-sliders">
                                <div className="xb-carousel-inner">
                                    <div className="xb-testimonial-slider xb-swiper-container">
                                        <Slider ref={slider} {...settings}>
                                            {teams.slice(0, 6).map((team, tm) => (
                                                <div className="col-xl-3 col-lg-4 col-md-6 mt-30 flex justify-center" key={tm}>
                                                    <div className="xb-team text-center">
                                                        <div className="xb-item--inner" data-parallax='{"scale" : 1}'>
                                                            <div className="xb-item--img">
                                                                <img src={team.tImg} alt="" />
                                                            </div>
                                                            <div className="xb-item--holder">
                                                                <h3 className="xb-item--name"><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                                                <span className="xb-item--designation">{team.title}</span>
                                                            </div>
                                                            {/* <ul className="xb-item--social list-unstyled">
                                                                <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}><i className="fab fa-twitter"></i></Link></li>
                                                                <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}><i className="fab fa-linkedin-in"></i></Link></li>
                                                                <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                                                            </ul> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="w-11 h-11 shadow-xl rounded-full bg-white absolute top-1/2 left-0 sm:-left-3 flex justify-center items-center" onClick={() => slider?.current?.slickPrev()}><GrFormPrevious className='text-2xl' /></div>
                                        <div className="w-11 h-11 shadow-xl rounded-full bg-white absolute top-1/2 right-0 sm:-right-2 flex justify-center items-center" onClick={() => slider?.current?.slickNext()}><GrFormNext className='text-2xl' /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xb-team-bg">
                        <div className="xb-bg xb-bg--1"></div>
                        <div className="xb-bg xb-bg--2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;