import React from 'react';
import about from '../../images/about/about_img.png'

const WhyAttendExpo = (props) => {

    return (
        <section className="about pos-rel pb-40 ">
            <div className="container">
                <div className="sec-title mb-[2rem] mx-2">
                    <h3 className="mb-10 wow skewIn font-bold sm:text-[1.8rem]" >Why Attend EduExpo 2K25?</h3>
                    {/* <div className='sm:text-xl text-[0.85rem]'>Our team of seasoned professionals understands the <br/> complexities of immigration laws and visa
                        procedures.</div> */}
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-10">
                        <div className="about__content">
                            <ul className="about-list ul_li list-unstyled">
                                <li className='mx-2'>
                                    <div className="xb-item--inner py-3 md:py-[2.5rem] border border-gray-300">
                                        <div className="xb-item--number">1</div>
                                        <div className="xb-item--holder">
                                            <h3 className=" mb-2 text-[1.3rem] sm:text-2xl">Meet University Representatives</h3>
                                            <div className="xb-item--description pb-1 text-xs sm:text-base mb-2">
                                                Speak directly with officials from top international universities.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='mx-2'>
                                    <div className="xb-item--inner py-3 md:py-[2.5rem] border border-gray-300">
                                        <div className="xb-item--number color-2">2</div>
                                        <div className="xb-item--holder">
                                            <h3 className="mb-2 text-[1.3rem] sm:text-2xl"> Free Profile Evaluation</h3>
                                            <div className="xb-item--description text-xs sm:text-base mb-2">
                                                Bring your academic documents for real-time eligibility assessment.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='mx-2'>
                                    <div className="xb-item--inner py-3 md:py-[2.5rem] border border-gray-300">
                                        <div className="xb-item--number color-3">3</div>
                                        <div className="xb-item--holder">
                                            <h3 className="mb-2 text-[1.3rem] sm:text-2xl">Visa & Immigration Guidance</h3>
                                            <div className="xb-item--description text-xs sm:text-base mb-2">
                                                Understand the latest student visa policies.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='mx-2'>
                                    <div className="xb-item--inner py-4 md:py-[2.5rem] border border-gray-300">
                                        <div className="xb-item--number color-4">4</div>
                                        <div className="xb-item--holder">
                                            <h3 className="mb-2 text-[1.3rem] sm:text-2xl">Live Career Counseling</h3>
                                            <div className="xb-item--description text-xs sm:text-base mb-2">
                                                One-on-one sessions with study abroad experts.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className='mx-2'>
                                    <div className="xb-item--inner py-4 md:py-[2.5rem] border border-gray-300">
                                        <div className="xb-item--number color-5">5</div>
                                        <div className="xb-item--holder">
                                            <h3 className="mb-2 text-[1.3rem] sm:text-2xl">Scholarship & Financial Aid Info</h3>
                                            <div className="xb-item--description text-xs sm:text-base mb-2">
                                                Explore fully-funded & merit-based scholarships.
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__img">
                <img src={about} alt="" />
            </div>
        </section>
    )
}

export default WhyAttendExpo;