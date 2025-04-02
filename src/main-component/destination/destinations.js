import React, { Fragment } from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
// import ContactSection from '../../components/ContactSection';
// import NewsLatter from '../../components/NewsLatter/NewsLatter';
import Footer from '../../components/footer/Footer';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// import BelgiumIcon from '../../images/country/img_02.png'
// import DenmarkIcon from '../../images/country/img_03.png'
// import AustraliaIcon from '../../images/country/img_04.png'
// import FranceIcon from '../../images/country/img_05.png'
// import GermanyIcon from '../../images/country/img_06.png'
// import GreeceIcon from '../../images/country/img_07.png'
// import HungaryIcon from '../../images/country/img_08.png'
// import IcelandIcon from '../../images/country/img_09.png'
// import IrelandIcon from '../../images/country/img_10.png'
// import ItalyIcon from '../../images/country/img_11.png'
// import Hungary from '../../images/country/img_12.png'
// import canadaIcon from '../../images/country/flg_01.png'

import CanadaIcon from '../../images/flag/1.png'
import AustraliaIcon from '../../images/flag/4.png'
import GermanyIcon from '../../images/flag/7.png'
import ItalyIcon from '../../images/flag/9.png'
import JapanIcon from '../../images/flag/2.png'
import UkIcon from '../../images/flag/6.png'
import USAIcon from '../../images/flag/3.png'


const Destinations = (props) => {

    const destinations = [
        {
            id: 'usa',
            tImg: USAIcon,
            flag: '🇺🇸',
            name: 'USA',
            tagline: 'The Land of Innovation',
            benefits: [
                'World-Ranked Universities – Ivy League & top public institutions',
                'Diverse Course Options – STEM, Business, Arts, and more',
                'Career Prospects – Internships & post-study work (OPT) opportunities',
                'Scholarships – Merit-based and need-based financial aid available'
            ],
            universities: 'Harvard, MIT, Stanford, UC Berkeley',
            cities: 'New York, Boston, Los Angeles, Chicago',
            style: 'style-7'
        },
        {
            id: 'canada',
            tImg: CanadaIcon,
            flag: '🇨🇦',
            name: 'Canada',
            tagline: 'A Hub for Quality Education',
            benefits: [
                'Affordable Tuition Fees – Lower cost compared to the US & UK',
                'Post-Study Work Opportunities – Up to 3 years of work permit',
                'PR Pathways – Easy transition from student visa to permanent residency',
                'High Quality of Life – Safe and multicultural environment'
            ],
            universities: 'University of Toronto, UBC, McGill University',
            cities: 'Toronto, Vancouver, Montreal, Calgary',
            style: 'style-2'
        },
        {
            id: 'japan',
            tImg: JapanIcon,
            flag: '🇯🇵',
            name: 'Japan',
            tagline: 'Innovation & Technological Leadership',
            benefits: [
                'Top-Ranked Universities – Strong focus on Science & Technology',
                "High Employability – Japan's demand for skilled foreign professionals",
                'Scholarship Opportunities – MEXT & university-funded scholarships',
                'Cultural & Language Immersion – Learn Japanese while studying'
            ],
            universities: 'University of Tokyo, Kyoto University, Osaka University',
            cities: 'Tokyo, Kyoto, Osaka, Fukuoka',
            style: 'style-7'
        },
        {
            id: 'uk',
            tImg: UkIcon,
            flag: '🇬🇧',
            name: 'United Kingdom',
            tagline: 'Academic Excellence & Tradition',
            benefits: [
                'Globally Recognized Degrees – Oxbridge & Russell Group universities',
                "Shorter Courses – Bachelor's in 3 years, Master's in 1 year",
                'Strong Research Opportunities – Cutting-edge innovations',
                'Post-Study Work Visa – 2-year work permit after graduation'
            ],
            universities: 'Oxford, Cambridge, Imperial College, UCL',
            cities: 'London, Manchester, Edinburgh, Birmingham',
            style: 'style-3'
        },
        {
            id: 'australia',
            tImg: AustraliaIcon,
            flag: '🇦🇺',
            name: 'Australia',
            tagline: 'A Student-Friendly Nation',
            benefits: [
                'High Employability Rate – Strong demand for skilled graduates',
                'Part-Time Work Benefits – Earn while you study',
                'Permanent Residency Pathways – Migration opportunities after graduation',
                'Natural Beauty & Lifestyle – Great climate and outdoor activities'
            ],
            universities: 'University of Melbourne, ANU, University of Sydney',
            cities: 'Sydney, Melbourne, Brisbane, Perth',
            style: 'style-4'
        },
        {
            id: 'germany',
            tImg: GermanyIcon,
            flag: '🇩🇪',
            name: 'Germany',
            tagline: 'Tuition-Free Excellence',
            benefits: [
                'No Tuition Fees at Public Universities – Only minimal semester charges',
                'Strong Industrial & Research Collaboration – Internships & job placements',
                'English-Taught Programs – Wide range of courses available',
                'High Employability – Engineering, IT, Business, and more'
            ],
            universities: 'TU Munich, Heidelberg University, RWTH Aachen',
            cities: 'Berlin, Munich, Frankfurt, Hamburg',
            style: 'style-5'
        },
        {
            id: 'italy',
            tImg: ItalyIcon,
            flag: '🇮🇹',
            name: 'Italy',
            tagline: 'A Blend of Culture & Academia',
            benefits: [
                'Affordable Public Universities – Low tuition costs',
                'Specialized Fields – Architecture, Fashion, Engineering, Arts',
                'Rich History & Lifestyle – Study in a cultural hotspot',
                'Internship & Job Prospects – Strong business and design industries'
            ],
            universities: 'University of Bologna, Politechno di Milano, Sapienza University',
            cities: 'Milan, Rome, Florence, Venice',
            style: 'style-6'
        },
    ];

    return (
        <Fragment>
            <Header />
            <PageTitle pageTitle={'Study Destinations 🌍'} pagesub={'Destinations'} description={"Your dream of studying abroad starts with choosing the right destination! Each country offers unique opportunities, world-class universities, and career pathways. Explore our expert insights on the top study destinations across the globe."} />
            <section className="testimonial py-[7rem]">
                <div className="container">
                    <div className="xb-testimonial__masonry">
                        <div className="row grid mt-none-100">
                            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 1, 992: 2 }}>
                                <Masonry columnsCount={2} gutter="50px">
                                    {destinations.map((destination, tsm) => (
                                        <div className="mt-100" key={tsm}>
                                            <div className={`xb-testimonial3 ${destination.style}`}>
                                                <div className="xb-item--inner pe-0">
                                                    <div className="xb-item--author-info ul_li">
                                                        <div className="xb-item--avatar flex items-center juxtify-center">
                                                            <img src={destination.tImg} alt="" className='h-full w-full' />
                                                        </div>
                                                        <div className="xb-item--author pb-2">
                                                            <h3 className="xb-item--name">{destination.name}</h3>
                                                            <span className="xb-item--desig">{destination.tagline}</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-6 lg:pe-20">
                                                        <h3 className="font-semibold text-indigo-800 mb-3">Key Benefits:</h3>
                                                        <ul className="space-y-2 mb-4">
                                                            {destination.benefits.map((benefit, idx) => (
                                                                <li key={idx} className="flex items-start">
                                                                    <span className="text-green-500 mr-2">✅</span>
                                                                    <span>{benefit}</span>
                                                                </li>
                                                            ))}
                                                        </ul>

                                                        <div className="mt-4 space-y-2 text-gray-700">
                                                            <p><span className="font-medium text-indigo-700">Top Universities:</span> {destination.universities}</p>
                                                            <p><span className="font-medium text-indigo-700">Popular Cities:</span> {destination.cities}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Masonry>
                            </ResponsiveMasonry>
                        </div>
                    </div>
                </div>
            </section>
            {/* <NewsLatter /> */}
            {/* <ContactSection /> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Destinations;
