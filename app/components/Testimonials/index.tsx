"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";

// بيانات الشهادات
interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "روبرت فوكس",
        profession: "الرئيس التنفيذي، باركفيو إنترناشونال",
        comment: "هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم، ولكن الغالبية قد تعرضت للتغيير بشكل ما.",
        imgSrc: "/images/testimonial/user1.svg",
    },
    {
        name: "ليزلي ألكسندر",
        profession: "الرئيس التنفيذي، باركفيو إنترناشونال",
        comment: "هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم، ولكن الغالبية قد تعرضت للتغيير بشكل ما.",
        imgSrc: "/images/testimonial/user2.svg",
    },
    {
        name: "كودي فيشر",
        profession: "الرئيس التنفيذي، باركفيو إنترناشونال",
        comment: "هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم، ولكن الغالبية قد تعرضت للتغيير بشكل ما.",
        imgSrc: "/images/testimonial/user3.svg",
    },
    {
        name: "روبرت فوكس",
        profession: "الرئيس التنفيذي، باركفيو إنترناشونال",
        comment: "هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم، ولكن الغالبية قد تعرضت للتغيير بشكل ما.",
        imgSrc: "/images/testimonial/user1.svg",
    },
    {
        name: "ليزلي ألكسندر",
        profession: "الرئيس التنفيذي، باركفيو إنترناشونال",
        comment: "هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم، ولكن الغالبية قد تعرضت للتغيير بشكل ما.",
        imgSrc: "/images/testimonial/user2.svg",
    },
    {
        name: "كودي فيشر",
        profession: "الرئيس التنفيذي، باركفيو إنترناشونال",
        comment: "هناك العديد من الأشكال المختلفة لنصوص لوريم إيبسوم، ولكن الغالبية قد تعرضت للتغيير بشكل ما.",
        imgSrc: "/images/testimonial/user3.svg",
    },
];

// إعدادات السلايدر
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32" id="testimonial-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-3">آراء عملائنا</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">آراء عملائنا</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">آراء عملائنا</h3>
                    </div>

                    <Slider {...settings}>
                        {postData.map((item, i) => (
                            <div key={i} className="relative">
                                <div className='bg-white test-sha m-3 p-10 my-20 rounded-3xl'>
                                    <Image src={item.imgSrc} alt="صورة المستخدم" width={71} height={71} className="inline-block m-auto absolute test-pos" />
                                    <h4 className='text-base font-medium text-testColor my-4'>{item.comment}</h4>
                                    <hr style={{ color: "lightgrey" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className='text-base font-medium pt-4 pb-2'>{item.name}</h3>
                                            <h3 className='text-xs font-medium pb-2 opacity-50'>{item.profession}</h3>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                            <StarIcon width={20} className="star" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );
    }
}
