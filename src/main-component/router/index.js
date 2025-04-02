import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import ServicePage from '../ServicePage/ServicePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import CountryPage from '../CountryPage/CountryPage';
import CountrySinglePage from '../CountrySinglePage/CountrySinglePage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import VisaPage from '../VisaPage/VisaPage';
import VisaSinglePage from '../VisaSinglePage/VisaSinglePage';
import CoachingPage from '../CoachingPage/CoachingPage';
import CoachingSinglePage from '../CoachingSinglePage/CoachingSinglePage';
import BlogRightPage from '../BlogRightPage/BlogRightPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import FaqPage from '../FaqPage/FaqPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import ContactPage from '../ContactPage/ContactPage';
import StudyDestinationsPage from '../destination/destination';
import Destinations from '../destination/destinations';
import EduExpo from '../EduExpo/eduexpo';
import ExpoRegistration from '../EduExpo/registration';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="destination" element={<StudyDestinationsPage />} />
          <Route path="destinations" element={<Destinations />} />
          <Route path="eduexpo" element={<EduExpo />} />
          <Route path="eduexpo/registration" element={<ExpoRegistration />} />
          <Route path="home-studient-visa" element={<HomePage2 />} />
          <Route path="home-travel-agency" element={<HomePage3 />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="country" element={<CountryPage />} />
          <Route path="country-single/:slug" element={<CountrySinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="visa" element={<VisaPage />} />
          <Route path="visa-single/:slug" element={<VisaSinglePage />} />
          <Route path="coaching" element={<CoachingPage />} />
          <Route path="coaching-single/:slug" element={<CoachingSinglePage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="blog" element={<BlogRightPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
