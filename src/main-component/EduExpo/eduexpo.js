import React, { Fragment } from 'react';
// import FeaturesSection from '../../components/student-visa-components/FeaturesSection/FeaturesSection';
// import About from '../../components/student-visa-components/about/about';
// import FeaturesSectionS2 from '../../components/student-visa-components/FeaturesSectionS2/FeaturesSectionS2';
// import ServiceSection from '../../components/student-visa-components/ServiceSection/ServiceSection';
// import CtaSection from '../../components/student-visa-components/CtaSection/CtaSection';
// import StudentFunFact from '../../components/student-visa-components/StudentFunFact/StudentFunFact';
// import CountrySection from '../../components/student-visa-components/CountrySection/CountrySection';
// import StudentFaqSection from '../../components/student-visa-components/StudentFaqSection/StudentFaqSection';
// import StudentTestimonial from '../../components/student-visa-components/StudentTestimonial/StudentTestimonial';
// import StudentBlogSection from '../../components/student-visa-components/StudentBlogSection/StudentBlogSection';
// import TopInstitutions from '../../components/student-visa-components/TopInstitutions/TopInstitutions';
// import StudentContactSection from '../../components/student-visa-components/StudentContactSection/StudentContactSection';
// import StudentFooter from '../../components/student-visa-components/StudentFooter/StudentFooter';
import Scrollbar from '../../components/scrollbar/scrollbar';
import EduExpoHeader from './eduexpoHeader';
import EduExpoHero2 from './eduexpoHero';
import EventTiming from './eventTiming';
import EduexpoAbout from './eduexpoAbout';
import WhyAttendExpo from './attendExpo';
import PartnerSection from '../../components/PartnerSection';
import WhoShouldAttend from './whoAttend';
import CountrySection1 from './countrySection1';
import EduexpoFooter from './eduexpoFooter';


const EduExpo = () => {

    return (
        <Fragment>
            <div className='demo-studient-visa'>
                <EduExpoHeader />
                <EduExpoHero2 />
                <EventTiming />
                <EduexpoAbout />
                <WhyAttendExpo />
                <PartnerSection />
                <WhoShouldAttend />
                
                {/* <About /> */}
                {/* <FeaturesSectionS2 />
                <ServiceSection />
                <CtaSection />
                <StudentFunFact /> */}
                <CountrySection1 />
                {/* <StudentFaqSection />
                <StudentTestimonial />
                <StudentBlogSection /> */}
                {/* <TopInstitutions /> */}
                {/* <StudentContactSection /> */}
                <EduexpoFooter />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default EduExpo;