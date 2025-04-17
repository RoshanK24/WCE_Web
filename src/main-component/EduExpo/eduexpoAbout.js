import React from 'react';
import { Link } from 'react-router-dom'
import aIcon1 from '../../images/icon/h_star.png'
import about from '../../images/about/about_img2.png'
import shape1 from '../../images/shape/a_shape1.png'
import shape2 from '../../images/shape/a_shape2.png'

const EduexpoAbout = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const downloadFile = (fileUrl, fileName) => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.setAttribute("download", fileName || "file"); // fallback filename
        link.setAttribute("target", "_blank"); // optional: opens in new tab
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="about pos-rel py-[4rem]">
            <div className="container">
                {/* <div className="sec-title sec-title--big style-2 mb-20"> */}
                <span className="flex text-xl md:text-2xl font-bold items-center gap-1"><img src={aIcon1} alt="" className='w-5 h-5' />About us<img src={aIcon1} alt="" className='w-5 h-5' /></span>
                {/* <h3 className="sec-title--heading mb-30">Since 1998 - Unparalleled Comprehensive <br /> Student Visa Guide</h3> */}
                <p className='text-lg w-[100%] lg:w-[65%]'>Edu Expo 2K25 is an exhibition platform to link students with universities, colleges, as well as education consultants to help them towards studying abroad. From targeting students to converting them with value-driven engagement, expert advice, and exclusive opportunities.</p>
                {/* </div> */}
                <div className="row">
                    <div className="col-xl-3 col-lg-4 mt-8">
                        <div className="about-btn">
                            <Link onClick={ClickHandler} className="grd-btn" to="registration">Register Now</Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 mt-8">
                        <div className="xb-about-content">
                            <p>Unlock Your Educational Journey Abroad: The Essential Student Visa GuideYour Gateway to Global Learning</p>
                            <Link onClick={ClickHandler} to="/about">Explore More Insight About us<i className="far fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mt-30">
                        <div className="xb-about-img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-shape">
                <div className="shape shape--1">
                    <div className="shape-inner" data-parallax='{"x":-50,"y":-80}'>
                        <img src={shape1} alt="" />
                    </div>
                </div>
                <div className="shape shape--2">
                    <div className="shape-inner" data-parallax='{"x":50,"y":-80}'>
                        <img src={shape2} alt="" />
                    </div>
                </div>
            </div>
            <div className="container bg-white rounded-2xl py-6 px-4 sm:px-8 mt-4 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-2 text-gray-800">Download Event Info</h2>
                <p className="text-gray-600 mb-6">
                    Get detailed insights about our upcoming events and opportunities. Choose your interest
                    and download the brochure to explore everything in detail.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                    <button
                        onClick={() => downloadFile("https://aagyo-v2.s3.ap-south-1.amazonaws.com/wce/bb6152f6-4cca-46e2-95b0-8e0f7810dbfb-event-details.pdf", "event-details.pdf")}
                        className="min-w-fit w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                    >
                        📄 Download Event Details
                    </button>

                    <button
                        onClick={() => downloadFile("https://aagyo-v2.s3.ap-south-1.amazonaws.com/wce/d7db759d-86c5-44f4-98e7-5b5fa0a21c0e-eduexpo.pdf", "eduexpo.pdf")}
                        className="min-w-fit w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
                    >
                        🎓 Download Eduexpo Guide
                    </button>
                </div>
            </div>

        </section>
    )
}

export default EduexpoAbout;