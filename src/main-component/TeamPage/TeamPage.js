import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import Teams from '../../api/team'
import PartnerSection from '../../components/PartnerSection';
import ContactSection from '../../components/ContactSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Bg from '../../images/bg/team_bg.jpg'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from 'react-slick';


const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const TeamPage = (props) => {
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
    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Teams'} pagesub={'team'} />
            <section className="team pt-3 sm:pt-12 pb-3 sm:pb-12 bg_img" style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover" }}>
                <div className="container">
                    <div className="sec-title text-center pb-3 sm:mb-12">
                        <h2 className="mb-3 sm:mb-8 wow skewIn">Our trusted immigration <br /> <span> support team</span></h2>
                        <p>At the heart of our commitment to providing exceptional <br /> immigration solutions stands</p>
                    </div>
                    <div className="col-lg-12">
                        <div className="xb-swiper-sliders">
                            <div className="xb-carousel-inner">
                                <div className="xb-testimonial-slider xb-swiper-container">
                                    <Slider ref={slider} {...settings}>
                                        {Teams.slice(0, 8).map((team, tm) => (
                                            <div className="col-xl-3 col-lg-4 col-md-6 mt-30" key={tm}>
                                                <div className="xb-team text-center">
                                                    <div className="xb-item--inner" data-parallax='{"scale" : 1}'>
                                                        <div className="xb-item--img">
                                                            <img src={team.tImg} alt="" />
                                                        </div>
                                                        <div className="xb-item--holder">
                                                            <h3 className="xb-item--name"><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}>{team.name}</Link></h3>
                                                            <span className="xb-item--designation">{team.title}</span>
                                                        </div>
                                                        <ul className="xb-item--social list-unstyled">
                                                            <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}><i className="fab fa-twitter"></i></Link></li>
                                                            <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}><i className="fab fa-linkedin-in"></i></Link></li>
                                                            <li><Link onClick={ClickHandler} to={`/team-single/${team.slug}`}><i className="fab fa-facebook-f"></i></Link></li>
                                                        </ul>
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
            </section>
            <PartnerSection />
            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment >
    )
};
export default TeamPage;
