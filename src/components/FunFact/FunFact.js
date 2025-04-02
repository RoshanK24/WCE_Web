import React from 'react'
import CountUp, { useCountUp } from 'react-countup';
import sIcon1 from '../../images/icon/c_01.svg'
import sIcon2 from '../../images/icon/c_02.svg'
import sIcon3 from '../../images/icon/c_03.svg'
import sIcon4 from '../../images/icon/c_04.svg'
import Bg from '../../images/bg/counter_bg.jpg'


const FunFact = [
    {
        title: '300',
        subTitle: 'Students placed in top universitie',
        symbol: '+',
        icon: sIcon1,
    },
    {
        title: '50',
        subTitle: 'Global university partnerships',
        symbol: '+',
        icon: sIcon2,
        style: 'style-2',
    },
    {
        title: '90',
        subTitle: 'Visa approval success rate',
        symbol: '%',
        icon: sIcon3,
        style: 'style-3',
    },
    {
        title: '180',
        subTitle: 'Several scholarships secured',
        symbol: 'K+',
        icon: sIcon4,
        style: 'style-4',
    },


]


const FunFactSection = (props) => {

    useCountUp({
        end: '56656',
        ref: 'counter',
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
    });


    return (

        <section className="counter pt-[2rem] sm:pt-[4rem] pb-[2rem] sm:pb-[4rem] bg_img" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="sec-title mb-4 sm:mb-[3rem]">
                    <h3 className="wow skewIn mb-2 sm:mb-[2rem] text-[1.35rem] sm:text-4xl font-bold">Discovering Our Biggest Successes: The Stories <br /> <span className='text-gray-500'> Behind Our Great Achievements</span>
                    </h3>
                    <div className='text-base'>Embarking on a journey to reunite families, we recently had the privilege of assisting a <br />
                        couple in securing their spouse's visa. </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="xb-counter w-full flex flex-wrap">
                            {FunFact.map((funfact, fitem) => (
                                fitem == 3 ? <div className={`xb-item--item w-1/2 p-4 sm:flex sm:flex-shrink-0 ${funfact.style}`} key={fitem}>
                                    <div className="xb-item--icon mt-1 sm:mt-[20px] h-20 w-20 sm:h-24 sm:w-24 sm:min-w-24">
                                        <img src={funfact.icon} alt="" />
                                    </div>
                                    <div className="xb-item--holder mt-1 sm:mt-[20px] sm:ms-10 flex items-center">
                                        <h5 className="text-lg sm:text-xl md:text-2xl">{funfact.subTitle}</h5>
                                    </div>
                                </div> : <div className={`xb-item--item w-1/2 p-4 sm:flex sm:flex-shrink-0 ${funfact.style}`} key={fitem}>
                                    <div className="xb-item--icon mt-1 sm:mt-[20px] h-20 w-20 sm:h-24 sm:w-24 sm:min-w-24">
                                        <img src={funfact.icon} alt="" />
                                    </div>
                                    <div className="xb-item--holder mt-1 sm:mt-[20px] sm:ms-10">
                                        <h2 className="font-semibold"><span className="xbo text-3xl sm:text-4xl md:text-6xl"><CountUp end={funfact.title} enableScrollSpy /></span><span
                                            className="text-3xl sm:text-4xl md:text-5xl transform -translate-y-4">{funfact.symbol}</span></h2>
                                        <h5 className="xb-item--title">{funfact.subTitle}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    )
}

export default FunFactSection;