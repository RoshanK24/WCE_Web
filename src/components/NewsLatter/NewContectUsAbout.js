import React from 'react'
// import Bg from '../../images/bg/newsletter_img.png'
import { RiClockwiseFill, RiFacebookFill, RiGlobeFill, RiInstagramFill, RiLinkedinFill, RiMailFill, RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri'


// const SubmitHandler = (e) => {
//     e.preventDefault()
// }


const NewContactUsAbout = (props) => {
    return (
        <section className="bg-gray-100 py-6 md:py-8 lg:py-12 xl:py-16">
            <div className='container'>
                <div className="shadow-md shadow-inherit rounded-3xl bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-3 py-4 md:py-12 lg:py-16 xb-contact pos-rel">
                        <div className=' sm:ps-6 md:ps-12'>
                            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Have questions about studying abroad? Need guidance on university applications, visas, or scholarships? Our expert consultants are here to help!
                            </p>

                            <div className="space-y-6">
                                <ContactDetail icon={<RiMapPin2Fill />} title="Office Address:" detail="Near Bank Of Baroda, Khatima Road, Nanakmatta (262311), India" />
                                <ContactDetail icon={<RiPhoneFill />} title="Phone Numbers:" detail={"+91-7618666001, +91-7618666002"} />
                                <ContactDetail icon={<RiMailFill />} title="Email:" detail="info@worldconnectedu.com" />
                                <ContactDetail icon={<RiGlobeFill />} title="Website:" detail="www.worldconnectedu.com" />
                                <ContactDetail icon={<RiClockwiseFill />} title="Office Hours:" detail="Monday – Saturday | 10:00 AM – 5:00 PM" />
                            </div>

                            <div className="mt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us on Social Media:</h3>
                                <p className="text-gray-600 mb-4">Stay updated with the latest study abroad news, scholarships, and events!</p>
                                <div className="flex text-indigo-600 flex-wrap gap-4">
                                    <SocialLink icon={<RiInstagramFill />} name="@WCE_StudyAbroad" />
                                    <SocialLink icon={<RiFacebookFill />} name="World Connect Education" />
                                    <SocialLink icon={<RiLinkedinFill />} name="WCE Global" />
                                </div>
                            </div>

                            <div className="mt-8 bg-indigo-100 p-4 rounded-lg text-center">
                                <p className="font-semibold text-indigo-700">Visit Us & Start Your Study Abroad Journey Today!</p>
                            </div>
                        </div>
                        <div className="google-map h-full">
                            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13966.293835650273!2d79.8143993!3d28.9407109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a05fee97f4d66f%3A0x535a6439d4098197!2sWorld%20Connect%20Education%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1716111687285!5m2!1sen!2sin"></iframe>
                        </div>
                        {/* <div className="hidden justify-center  lg:block">
                        <img src={Bg} alt="Contact Background" className='h-[40rem]' />
                    </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

const ContactDetail = ({ icon, title, detail }) => (
    <div className="flex items-start space-x-3">
        <div className="text-indigo-600 text-xl mt-1">{icon}</div>
        <div>
            <h3 className="text-lg font-medium text-gray-800">{title}</h3>
            <p className="text-gray-600">{detail}</p>
        </div>
    </div>
);

const SocialLink = ({ icon, name }) => (
    <div className="flex items-center space-x-2 text-gray-800">
        <div className="text-indigo-600 text-xl">{icon}</div>
        <span>{name}</span>
    </div>
);


export default NewContactUsAbout;