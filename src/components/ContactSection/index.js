import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
import shape from '../../images/icon/n_pad.svg'


const ContactSection = (props) => {
    return (
        <section className="contact md:py-8 lg:py-12 xl:py-16 gray-bg">
            <div className="container">
                <div className="xb-contact pos-rel">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="xb-item--inner">
                                <div className="xb-item--holder mb-25">
                                    <span><img src={shape} alt="" />Contact Us</span>
                                    <h3>Do you have questions or went more <br /> information?</h3>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    <div className="google-map">
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13966.293835650273!2d79.8143993!3d28.9407109!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a05fee97f4d66f%3A0x535a6439d4098197!2sWorld%20Connect%20Education%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1716111687285!5m2!1sen!2sin"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;