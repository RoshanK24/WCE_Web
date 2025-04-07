import React, { Fragment } from 'react';
// import { Link } from "react-router-dom";
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
// import StudentFunFact from '../../components/student-visa-components/StudentFunFact/StudentFunFact';
// import Teams from '../../api/team'
import PartnerSection from '../../components/PartnerSection';
// import ContactSection from '../../components/ContactSection';
import aboutImg from '../../images/about/about_img3.jpg'
import aboutImg2 from '../../images/bg/mission.jpg'
import aboutImg3 from '../../images/bg/vission.jpg'
import Bg from '../../images/bg/team_bg.jpg'
// import NewsLatter from '../../components/NewsLatter/NewsLatter';
// import Slider from 'react-slick';
// import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import TeamSection from '../../components/TeamSection/TeamSection';
import FunFactSection from '../../components/FunFact/FunFact';
import NewContactUsAbout from '../../components/NewsLatter/NewContectUsAbout';



const AboutUsPage = (props) => {
    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // }
    // const settings = {
    //     dots: false,
    //     arrows: false,
    //     speed: 1000,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     responsive: [
    //         {
    //             breakpoint: 1500,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 1280,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 767,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };

    // const slider = React.useRef(null);

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'About WCE'} pagesub={'About'} description={"At World Connect Education (WCE), we believe that every student deserves the opportunity to study at their dream university. Founded with a vision to simplify international education, we have been guiding ambitious students for over many years, helping them secure admissions, visas, and scholarships at top universities worldwide."} />
            <FunFactSection />

            <section className="about pt-[3rem]">
                <div className="container">
                    <div className="row mb-40 align-items-center">
                        <div className="col-lg-6">
                            <div className="sec-title mb-20">
                                <h2 className="wow skewIn">Committed to Your Visa <br /> <span>Success - About us</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="sec-title mb-20">
                                <p>We deliver budget-friendly visa solutions, removing financial barriers from your journey. Our goal is to provide quality services at reasonable rates.</p>
                            </div>
                        </div>
                    </div>
                    <div className="xb-about__img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </section>
            {/* <StudentFunFact /> */}
            <section className="mission py-[3rem]">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse mt-none-30">
                        <div className="col-lg-6 mt-30">
                            <div className="mission__img text-lg-end">
                                <div className="inner-img d-inline-block wow skewIn" data-wow-delay="200ms">
                                    <img src={aboutImg2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-10">
                            <div className="mission__content">
                                <div className="sec-title">
                                    <h2 className="mb-10 wow skewIn">Guiding Your Path with Our <br /> <span>Immigration Mission</span></h2>
                                    <p>We're here to simplify immigration complexities, guiding you to success. Our mission is to unite families, open opportunities, and make your journey enriching. Your dreams are our focus on the path to a brighter future.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center mt-40">
                        <div className="col-lg-6 mt-30">
                            <div className="mission__img">
                                <div className="inner-img d-inline-block wow skewIn">
                                    <img src={aboutImg3} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-10">
                            <div className="mission__content">
                                <div className="sec-title">
                                    <h2 className="mb-20 wow skewIn" data-wow-delay="200ms">Our Immigration <br /> <span>Service history</span></h2>
                                    <p>Our history began with a vision to make the immigration process smoother and more accessible for individuals and families around the world. With a deep understanding of the challenges that accompany moving to a new country,</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container" style={{ backgroundImage: `url(${Bg})` }}>
                {/* <div className="container">
                    <div className="sec-title text-center mb-20">
                        <h2 className="mb-20 wow skewIn">Our trusted immigration <br /> <span> support team</span></h2>
                        <p>At the heart of our commitment to providing exceptional <br /> immigration solutions stands</p>
                    </div> */}
                <div className="col-lg-12">
                    <TeamSection />
                </div>
                {/* </div> */}
            </section>
            <PartnerSection />
            {/* <NewsLatter /> */}
            <NewContactUsAbout /> 
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutUsPage;
