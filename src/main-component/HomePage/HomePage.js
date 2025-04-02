import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/hero';
import PartnerSection from '../../components/PartnerSection';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import About from '../../components/about/about';
import FunFactSection from '../../components/FunFact/FunFact';
import CountrySection from '../../components/CountrySection/CountrySection';
import TeamSection from '../../components/TeamSection/TeamSection';
// import FaqSection from '../../components/FaqSection/FaqSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import NewsLatter from '../../components/NewsLatter/NewsLatter';
import ContactSection from '../../components/ContactSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import WhyChooseUsHomePage from './whyChooseUs';


const HomePage = () => {

    return (
        <Fragment>
            <div>
                <Header />
                <Hero />
                {/* <ServiceSection /> */}
                <WhyChooseUsHomePage />
                <Testimonial />
                <PartnerSection />
                {/* <About /> */}
                <FunFactSection />
                <TeamSection />
                <CountrySection />
                {/* <FaqSection /> */}
                {/* <BlogSection /> */}
                {/* <NewsLatter /> */}
                {/* <ContactSection /> */}
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;