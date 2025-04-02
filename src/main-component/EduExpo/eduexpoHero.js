import React from 'react';
import { Link } from 'react-router-dom'
// import Bg from '../../images/bg/hero_bg-2.jpg'
import Bg from '../../images/bg/eduexpoBg3.jpg'

// import hero1 from '../../images/hero/img_01.png'
import shape1 from '../../images/icon/h_star.png'
// import shape2 from '../../images/icon/arrow_right.svg'
import { Slide } from "react-awesome-reveal";
import eduExpologo from '../../images/logo/eduexpo2.png';
import wecWordlogo from '../../images/logo/wec_word.png';


const EduExpoHero2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="py-6 md:py-24 hero relative">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 w-full h-full">
                <img src={Bg} alt="Background" className="w-full h-full object-cover opacity-70" />
                {/* Custom Light Overlay for Dark Text */}
                <div className="absolute inset-0 bg-white opacity-0"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10">
                <div className="row align-items-end">
                    <div className="col-12">
                        <div className="wow text-center pos-rel">

                            {/* Subtitle */}
                            <Slide direction="up" triggerOnce={false} duration={1500}>
                                <span className="flex text-black text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] justify-center items-center font-extrabold">

                                    <img src={wecWordlogo} alt="Edu Expo Logo" className="w-52 sm:w-80 md:w-100 lg:w-[30rem] mx-auto shadow-lg bg-white py-2 px-4 rounded-lg" />

                                    {/* <img src={shape1} alt="" className="w-8 h-8" />
                                    <p className="px-2 border-b-2 border-yellow-500">Welcome to World Connect Education</p>
                                    <img src={shape1} alt="" className="w-8 h-8" /> */}
                                </span>
                            </Slide>

                            {/* Main Heading */}
                            <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-extrabold text-black my-[2rem] md:my-[3rem] stroke-text">
                                <Slide direction="right" triggerOnce={false} duration={1000}>
                                    <img src={eduExpologo} alt="Edu Expo Logo" className="w-32 sm:w-40 md:w-48 lg:w-60 mx-auto shadow-lg bg-white py-2 px-4 rounded-lg" />

                                    {/* <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-black border-b-4 border-yellow-500 pb-2">
                                        EduExpo 2K25
                                    </span> */}
                                </Slide>
                            </h2>

                            {/* Subheading */}
                            <h2 className="pb-4 md:pb-24 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-black">
                                <span className="text-black text-highlight" style={{ textShadow: "5px 3px 5px white" }}>
                                    Your Gateway to Best Global Education
                                </span>
                            </h2>

                            {/* Button */}
                            <div className="xb-hero--btn">
                                <Slide direction="up" triggerOnce={false} duration={1500}>
                                    <Link onClick={ClickHandler} to="registration" className="grd-btn bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-md font-bold shadow-lg">
                                        Register Now
                                    </Link>
                                </Slide>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default EduExpoHero2;