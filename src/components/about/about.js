import React from 'react';
import about from '../../images/about/about_img.png'

const About = (props) => {

    return (
        <section className="about pos-rel pb-40 ">
            <div className="container">
                <div className="sec-title mb-[2rem] mx-2">
                    <h3 className="mb-10 wow skewIn font-bold sm:text-[1.6rem]" >Dependable and Trustworthy Visa & <br/>
                        <span className='text-lg sm:text-2xl'>Immigration Guidance</span></h3>
                    <div className='sm:text-xl text-[0.85rem]'>Our team of seasoned professionals understands the <br/> complexities of immigration laws and visa
                        procedures.</div>
                </div>
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
            </div>
            <div className="about__img">
                <img src={about} alt="" />
            </div>
        </section>
    )
}

export default About;