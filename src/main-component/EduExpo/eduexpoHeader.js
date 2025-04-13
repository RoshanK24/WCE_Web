import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import icon1 from '../../images/icon/n_pad.svg';
// import icon2 from '../../images/icon/time.svg';
// import icon3 from '../../images/icon/location.svg';
// import logo from '../../images/logo/logo.png';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import eduExpologo from '../../images/logo/eduexpo2.png';

// import { RiArrowDropDownLine } from "react-icons/ri";

const EduExpoHeader = () => {
    // const [searchActive, setSearchState] = useState(false);
    const [mobailActive, setMobailState] = useState(false);
    // const [isSticky, setSticky] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // const SubmitHandler = (e) => {
    //     e.preventDefault();
    // };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (window.scrollY > 80) {
    //             setSticky(true);
    //         } else {
    //             setSticky(false);
    //         }
    //     };
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <header className="">
            {/* <div className="gray-bg hidden lg:block pt-1">
                <div className="">
                    <div className="flex justify-between mx-2 py-2">
                        <div className="flex justify-center items-center header__top-cta ms-4 gap-1">
                            <img src={icon1} alt="" className='h-5 w-5' /><span>Help Desk : +91 7618666001, +91 7618666002</span>
                        </div>
                        <ul className="flex justify-center items-center header__top-info gap-1">
                            <img src={icon2} alt="" /><li>Monday - Saturday 09:30 am - 05:00 Pm</li>
                            <img src={icon3} alt="" /><li>Near Bank of Baroda Khatima road Nanakmatta Uttarakhand India, 262311</li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* Header Section
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-8 text-center">
                <h1 className="text-4xl font-bold mb-2">EduExpo 2K25</h1>
                <p className="text-xl italic">Your Gateway to Global Education</p>
                <div className="flex items-center justify-center mt-4">
                    <div className="h-1 w-16 bg-yellow-300 rounded-full"></div>
                    <div className="mx-2">🌍</div>
                    <div className="h-1 w-16 bg-yellow-300 rounded-full"></div>
                </div>
            </div> */}

            <div className={`w-full `}>
                <div className="container w-full flex justify-between items-center py-1 px-1 pe-2">
                    <div className="header__logo">
                        <Link onClick={ClickHandler} to="/eduexpo"><img src={eduExpologo} alt="Logo" className='h-10 sm:h-12 md:h-16' /></Link>
                    </div>
                    <nav className="hidden space-x-4 me-2 md:flex">
                        <ul className='flex space-x-2 sm:space-x-8 font-bold'>
                            <li li><Link onClick={ClickHandler} to="/">Home</Link></li>
                            <li li><Link onClick={ClickHandler} to="/eduexpo" className='text-blue-900'>EduExpo 2K25</Link></li>
                            <li li><Link onClick={ClickHandler} to="/destinations">Destinations</Link></li>
                            {/* <li li><Link onClick={ClickHandler} to="/about">About us</Link></li> */}
                            {/* <li className="relative group">
                                <div onClick={ClickHandler} className='flex justify-center items-center'>Home <RiArrowDropDownLine /></div>
                                <ul className="absolute hidden group-hover:flex bg-white w-[9rem] shadow-xl border z-50 rounded-lg flex-col ">
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/">Immigration</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/home-studient-visa">Student Visa</Link></li>
                                </ul>
                            </li> */}
                            {/* <li className="relative group">
                                <div onClick={ClickHandler} className='flex justify-center items-center'>Pages <RiArrowDropDownLine /></div>
                                <ul className="absolute hidden group-hover:flex bg-white w-[10rem] shadow-xl border z-50 rounded-lg flex-col">
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/service-single/Tourist-Visa">Service Details</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/coaching">Coaching</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/coaching-single/Take-IELTS">Coaching Details</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/visa">Visa</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/visa-single/Commercial-Visa">Visa Details</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/team-single/Esther-Howard">Team Details</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/testimonial">Testimonials</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                </ul>
                            </li> */}
                            <li><Link onClick={ClickHandler} to="/about">About us</Link></li>
                            {/* <li className="relative group hidden md:block">
                                <div onClick={ClickHandler} className='flex justify-center items-center'>Country <RiArrowDropDownLine /></div>
                                <ul className="absolute hidden group-hover:flex bg-white w-[9rem] shadow-xl border z-50  rounded-lg flex-col">
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/country">Country</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/country-single/Australia">Country Details</Link></li>
                                </ul>
                            </li>
                            <li className="relative group hidden md:block">
                                <Link onClick={ClickHandler} to="/" className='flex justify-center items-center'>Blog <RiArrowDropDownLine /></Link>
                                <ul className="absolute hidden group-hover:flex bg-white w-[8rem] shadow-xl border z-50  rounded-lg flex-col">
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                    <li className='hover:bg-gray-200 pe-2 ps-3 rounded p-1'><Link onClick={ClickHandler} to="/blog-single/Cultural-adjustment-thriving-in-a-new-country">Blog Details</Link></li>
                                </ul>
                            </li> */}
                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className="md:hidden">
                        <button onClick={() => setMobailState(!mobailActive)} className="focus:outline-none">
                            <i className="fal fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`xb-header-wrap ${mobailActive ? "active" : ""}`}>
                <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
                    <div className="xb-header-menu-scroll">
                        <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobailState(!mobailActive)}></div>
                        <div className="flex justify-center items-center" >
                            <Link onClick={ClickHandler} to="/eduexpo" rel="home"><img src={eduExpologo} alt="" style={{ height: "6rem" }} /></Link></div>
                        {/* <div className="xb-header-mobile-search xb-hide-xl">
                            <form role="search" onSubmit={SubmitHandler}>
                                <input type="text" placeholder="Search..." name="s" className="search-field" />
                                <button type="submit" className="search-submit"></button>
                            </form>
                        </div> */}
                        <nav className="xb-header-nav">
                            <MobileMenu />
                        </nav>
                    </div>
                </div>
                <div className="xb-header-menu-backdrop" onClick={() => setMobailState(false)}></div>
            </div>
            {/* <div className={`header-search-form-wrapper ${searchActive ? "open" : ""}`}>
                <div className="xb-search-close xb-close" onClick={() => setSearchState(!searchActive)}></div>
                <div className="header-search-container">
                    <form role="search" className="search-form" onSubmit={SubmitHandler}>
                        <input type="search" className="search-field" placeholder="Search …" name="s" />
                    </form>
                </div>
            </div> */}
            {/* <div className={`body-overlay ${searchActive ? "active" : ""}`}></div> */}
        </header>
    );
};

export default EduExpoHeader;
