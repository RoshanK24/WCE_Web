import React from 'react';
import Slider from "react-slick";
import logo from '../../images/icon/trustpilot.png'
import rating from '../../images/icon/tr_rattig.png'
import Bg from '../../images/bg/tm_bg.png'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";



const testimonial = [
    {
        id: '01',
        Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Title: 'Goladria Gomez',
    },
    {
        id: '02',
        Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Title: 'Adam Pedro',
    },
    {
        id: '03',
        Des: "From start to finish, evisa made my visa application a breeze.Their expertise and friendly guidance turned a complex process into a walk in the park. Grateful for their seamless service!",
        Title: 'Alkira Jemin',
    }
]

const Testimonial = () => {

    const settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const testimonial1 = [
        {
            Des: "WCE made my dream come true! From university selection to visa approval, their support was exceptional.",
            Title: "Student Name, University of Toronto (Canada)",
            Course: "Computer Science",
            Achievement: "Full-tuition scholarship"
        },
        {
            Des: "The visa process was so smooth! Thanks to WCE, I now study in one of the best business schools.",
            Title: "Student Name, University of Melbourne (Australia)",
            Course: "Business Administration",
            Achievement: "Secured an internship at a top multinational company"
        },
        {
            Des: "I was lost before I found WCE! Their counseling and test prep helped me get into my dream university.",
            Title: "Student Name, University of Oxford (UK)",
            Course: "Law",
            Achievement: "100% Scholarship"
        }
    ];

    const slider = React.useRef(null);


    return (
        <section className="testimonial bg_img pt-[2rem] sm:pt-[4rem] pb-[2rem] sm:pb-[4rem]" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="sec-title margin-none-md mb-3 sm:mb-[3rem] mx-2">
                            <h3 className="mb-70 wow skewIn mb-3 sm:mb-[2rem] text-[1.35rem] sm:text-5xl font-bold">Happy Clients Reflect on Their <br />
                                <span className='text-gray-500'> Journey with Us</span></h3>
                            <div className='text-base sm:text-lg'>Embark on a Global Exploration: <br /> Experience Joy in 190+ Countries <br /> and Across the
                                World</div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="xb-swiper-sliders">
                            <div className="xb-carousel-inner">
                                <div className="xb-testimonial-slider xb-swiper-container">

                                    <Slider ref={slider} {...settings}>
                                        {testimonial1.map((testimonial, tsm) => (
                                            <div className="xb-testimonial h-full" key={tsm}>
                                                <div className="xb-item--inner text-center w-[22rem] h-full py-[12px] px-[10px] sm:py-[50px] sm:px-[35px] flex flex-col">
                                                    <div className="xb-item--img">
                                                        <img src={logo} alt="" />
                                                    </div>
                                                    <div className="xb-item--content flex-grow">
                                                        "{testimonial.Des}"
                                                    </div>
                                                    <div className="xb-item--bottom mt-auto">
                                                        <div className="xb-item--ratting">
                                                            <img src={rating} alt="" />
                                                        </div>
                                                        <h3 className="xb-item--title">{testimonial.Title}</h3>
                                                        <div className="xb-item--details mt-2">
                                                            <p className="font-medium">• <strong>Course:</strong> {testimonial.Course}</p>
                                                            <p className="font-medium">• <strong>Achievement:</strong> {testimonial.Achievement}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                    <div className="w-11 h-11 shadow-xl rounded-full bg-gray-200 absolute top-1/2 left-0 flex justify-center items-center" onClick={() => slider?.current?.slickPrev()}><GrFormPrevious className='text-2xl' /></div>
                                    <div className="w-11 h-11 shadow-xl rounded-full bg-gray-200 absolute top-1/2 right-0 flex justify-center items-center" onClick={() => slider?.current?.slickNext()}><GrFormNext className='text-2xl' /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;