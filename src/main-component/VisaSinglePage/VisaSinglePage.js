import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import Services from '../../api/service'
import ServiceSidebar from './sidebar';
import eImg1 from '../../images/visa/img_01.jpg'
import eImg from '../../images/visa/img_02.jpg'
import eImg2 from '../../images/icon/star.svg'

const VisaSinglePage = (props) => {
    const { slug } = useParams()

    const ServiceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={ServiceDetails.title} pagesub={'Project'} />
            <section className="coaching-single py-[3rem]">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ServiceSidebar />
                        </div>
                        <div className="col-lg-8">
                            <div className="single-content">
                                <h3>{ServiceDetails.title}</h3>
                                <h4>The United Kingdom Offers Effortless Business Setup in the Country</h4>
                                <p>A {ServiceDetails.title} stands as a gateway to building a new life in a foreign land. It's more than just a permit; it's an opportunity to immerse yourself in a new culture, embrace fresh opportunities, and become an integral part of a different community</p>
                                <p>In the realm of global communication, a strong command of the English language is a bridge that connects cultures, , and aspirations. The International English.</p>
                                <div className="single-img mt-35 mb-70">
                                    <img src={eImg1} alt="" />
                                </div>
                                <h3>How WCE work</h3>
                                <div className="row align-items-center">
                                    <div className="col-lg-10">
                                        <div className="about__content">
                                            <ul className="about-list ul_li list-unstyled">
                                                <li className='mx-2'>
                                                    <div className="xb-item--inner py-3 md:py-[2.5rem]">
                                                        <div className="xb-item--number">1</div>
                                                        <div className="xb-item--holder">
                                                            <h3 className=" mb-2 text-[1.3rem] sm:text-2xl">Choose your visa type</h3>
                                                            <div className="xb-item--description pb-1 text-xs sm:text-base mb-2">
                                                                Determine the Visa type for your travel purpose.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='mx-2'>
                                                    <div className="xb-item--inner py-3 md:py-[2.5rem]">
                                                        <div className="xb-item--number color-2">2</div>
                                                        <div className="xb-item--holder">
                                                            <h3 className="mb-2 text-[1.3rem] sm:text-2xl">Contact our branches</h3>
                                                            <div className="xb-item--description text-xs sm:text-base mb-2">
                                                                Start your transaction by applying to our branches.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='mx-2'>
                                                    <div className="xb-item--inner py-3 md:py-[2.5rem]">
                                                        <div className="xb-item--number color-3">3</div>
                                                        <div className="xb-item--holder">
                                                            <h3 className="mb-2 text-[1.3rem] sm:text-2xl">Submit Your Documents</h3>
                                                            <div className="xb-item--description text-xs sm:text-base mb-2">
                                                                Collect all the required documents the process.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='mx-2'>
                                                    <div className="xb-item--inner py-4 md:py-[2.5rem]">
                                                        <div className="xb-item--number color-4">4</div>
                                                        <div className="xb-item--holder">
                                                            <h3 className="mb-2 text-[1.3rem] sm:text-2xl">Passport delivery</h3>
                                                            <div className="xb-item--description text-xs sm:text-base mb-2">
                                                                Receive your visa, which is finalized after application,
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="mt-70">{ServiceDetails.title} benefits</h3>
                                <p>A {ServiceDetails.title} isn't merely a document; it's a key to unlocking a world of opportunities and experiences. With its myriad benefits, a residence visa opens, Here's a closer look at the remarkable advantages that a residence visa brings:</p>
                                <div className="row align-items-center mt-10">
                                    <div className="col-lg-6 mt-30">
                                        <img src={eImg} alt="" />
                                    </div>
                                    <div className="col-lg-6 mt-30">
                                        <ul className="single-content-list list-unstyled pl-25">
                                            <li><img src={eImg2} alt="" />Cultural Enrichmen</li>
                                            <li><img src={eImg2} alt="" />Language Proficiency</li>
                                            <li><img src={eImg2} alt="" />Quality of Life</li>
                                            <li><img src={eImg2} alt="" />Career Opportunities</li>
                                            <li><img src={eImg2} alt="" />Business Setup</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <NewsLatter />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default VisaSinglePage;
