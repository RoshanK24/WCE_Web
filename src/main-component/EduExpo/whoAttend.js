import React from 'react'
// import eImg1 from '../../images/country/single.jpg'
import eImg from '../../images/icon/global.svg'
import eImg2 from '../../images/icon/profile-2user-2.svg'
import eImg3 from '../../images/icon/teacher.svg'
// import eImg4 from '../../images/icon/home-trend-up.svg'
// import eImg5 from '../../images/country/single2.jpg'
// import eImg6 from '../../images/icon/star.svg'

const WhoShouldAttend = () => {
    return (
        <div className='container'><h3>Why choose us?</h3>
            <div className="single-content__feature ul_li">
                <div className="single-content-feature">
                    <div className="xb-item--inner ul_li flex">
                        <div className="xb-item--icon">
                            <img src={eImg} alt="" />
                        </div>
                        <h3 className="xb-item--title">Students planning to study in USA, Canada, UK, Australia, Germany, New Zealand & more.</h3>
                    </div>
                </div>
                <div className="single-content-feature">
                    <div className="xb-item--inner color-2 ul_li">
                        <div className="xb-item--icon">
                            <img src={eImg2} alt="" />
                        </div>
                        <h3 className="xb-item--title">Those looking for scholarships and financial aid.</h3>
                    </div>
                </div>
                <div className="single-content-feature">
                    <div className="xb-item--inner color-3 ul_li">
                        <div className="xb-item--icon">
                            <img src={eImg3} alt="" />
                        </div>
                        <h3 className="xb-item--title">Students & parents seeking expert guidance on admissions & visa procedures.</h3>
                    </div>
                </div> 
            </div></div>
    )
}

export default WhoShouldAttend