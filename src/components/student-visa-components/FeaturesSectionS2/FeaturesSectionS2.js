import React from 'react'
import fIcon1 from '../../../images/icon/fr_01.svg'
import fIcon2 from '../../../images/icon/fr_02.svg'
import fIcon3 from '../../../images/icon/fr_03.svg'

import fhIcon1 from '../../../images/icon/fr_01_h.svg'
import fhIcon2 from '../../../images/icon/fr_02_h.svg'
import fhIcon3 from '../../../images/icon/fr_03_h.svg'

import aIcon1 from '../../../images/icon/h_star.png'

import shape1 from '../../../images/shape/f_shape1.png'
import shape2 from '../../../images/shape/f_shape2.png'



const Features = [
    {
        title: 'University Information',
        icon: fIcon1,
        icon2: fhIcon1,
        des: 'University information is a crucial component of your..',
    },
    {
        title: 'Student Visa',
        icon: fIcon2,
        icon2: fhIcon2,
        des: 'A student visa is a legal authorization that allows international..',
    },
    {
        title: 'Our Coaching',
        icon: fIcon3,
        icon2: fhIcon3,
        des: 'Our Coaching offers life coaching that helps clients navigate..',
    }

]


const FeaturesSectionS2 = (props) => {

    return (

        <section className="feature pos-rel gray-bg-2 py-[4rem]">
            <div className="container">
                <div className="sec-title style-2 text-center mb-60 z-index-2">
                    <span className="sec-title--sub"><img src={aIcon1} alt="" />How we Help Client<img src={aIcon1} alt="" /></span>
                    <h3 className="sec-title--heading mb-30">Expertise from Seasoned <br /> Professionals</h3>
                </div>
            </div>
            <div className="xb-feature2__wrap">
                <div className="container">
                    <div className="row justify-content-md-center g-0">
                        {Features.map((features, fitem) => (
                            <div className="col-lg-4 col-md-6" key={fitem}>
                                <div className="xb-feature xb-feature2 text-center">
                                    <div className="xb-item--line"></div>
                                    <div className="xb-item--inner">
                                        <div className="xb-item--icon">
                                            <span className="default"><img src={features.icon} alt="" /></span>
                                            <span className="hover"><img src={features.icon2} alt="" /></span>
                                        </div>
                                        <div className="xb-item--holder">
                                            <h3 className="xb-item--title">{features.title}</h3>
                                            <div className="xb-item--content">
                                                {features.des}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="xb-feature-right-line"></div>
                </div>
            </div>
            <div className="feature-shape">
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
        </section>
    )
}

export default FeaturesSectionS2;