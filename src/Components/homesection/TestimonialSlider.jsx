/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import testimonial from "../../assets/home/testimonial.png"

const testimonials = [
    {
        id: 1,
        quote:
            "Working With Kwame Akuffo & Co. Has Been A Transformative Experience For Our Legal Department. Their Team Doesn't Just Offer Legal Advice—They Immerse Themselves In The Intricacies Of Our Business, Asking The Right Questions And Offering Insights That Help Us Stay Ahead Of Challenges Before They Arise. It's Rare To Find A Law Firm That Blends Legal Precision With Such Practical Commercial Acumen.",
        name: "Sarah Johnson",
        position: "Group Legal Advisor, National Trust Holding Company",
        company: "Managing Director, Accra Mall / Junction Mall",
        image: testimonial,
    },
    {
        id: 2,
        quote:
            "The level of expertise and attention to detail provided by this firm is exceptional. Their team doesn't just deliver legal solutions—they provide strategic guidance that has helped us navigate complex regulatory challenges with confidence and precision.",
        name: "Michael Chen",
        position: "Managing Director, Financial Services",
        company: "Head Of Legal Affairs, Universal Merchant Bank",
        image: testimonial,
    },
    {
        id: 3,
        quote:
            "It's rare to find a law firm that blends legal precision with such practical commercial acumen. Their insights have been invaluable in helping us structure deals and manage risk effectively across our operations in multiple jurisdictions.",
        name: "Amara Okafor",
        position: "Chief Legal Officer, Investment Holdings",
        company: "Senior Partner, Corporate Law Division",
        image: testimonial,
    },
];

const PrevArrow = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7E1835] bg-white shadow-sm hover:bg-[#7E1835] hover:text-white"
        aria-label="Previous testimonial"
    >
        <ChevronLeft className="h-4 w-4 text-gray-600" />
    </button>
);
PrevArrow.propTypes = { onClick: PropTypes.func.isRequired };

const NextArrow = ({ onClick }) => (
    <button
        type="button"
        onClick={onClick}
        className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#7E1835] bg-white shadow-sm hover:bg-[#7E1835] hover:text-white"
        aria-label="Next testimonial"
    >
        <ChevronRight className="h-4 w-4 text-gray-600" />
    </button>
);
NextArrow.propTypes = { onClick: PropTypes.func.isRequired };

export default function TestimonialSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const sliderRef = React.useRef(null);
    const sliderRefMobile = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        arrows: false,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    const goToPrev = () => {
        sliderRef.current?.slickPrev();
        sliderRefMobile.current?.slickPrev();
    };
    const goToNext = () => {
        sliderRef.current?.slickNext();
        sliderRefMobile.current?.slickNext();
    };

    // Helpers for mobile meta layout
    const splitLines = (text) => (text ? text.split(" / ") : []);
    const splitByComma = (text) => (text ? text.split(", ") : []);

    return (
        <div className="w-full min-h-screen bg-white">
            {/* ========== MOBILE (matches provided design) ========== */}
            <div className="block lg:hidden">
                {/* Image slider */}
                <div className="relative w-full h-[62vh] overflow-hidden">
                    <Slider {...settings} ref={sliderRefMobile}>
                        {testimonials.map((t) => (
                            <div key={`m-image-${t.id}`}>
                                <div className="relative h-[62vh] w-full">
                                    <img
                                        src={t.image || "/placeholder.svg"}
                                        alt={t.name}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* White panel content */}
                <div className="mx-auto max-w-2xl px-5 pb-10 pt-6 bg-white">
                    {/* Header row */}
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="mr-3 h-2 w-2 rounded-full bg-[#7E1835]" />
                            <span className="text-sm font-medium uppercase tracking-wider text-[#7E1835]">
                                TESTIMONIALS
                            </span>
                        </div>

                        <div className="text-lg font-light text-[#7E1835]">// {String(currentSlide + 1).padStart(2, "0")}</div>

                        <div className="flex items-center">
                            <button
                                type="button"
                                onClick={goToPrev}
                                className="mr-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7E1835]"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="h-4 w-4 text-white" />
                            </button>
                            <button
                                type="button"
                                onClick={goToNext}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#7E1835]"
                                aria-label="Next"
                            >
                                <ChevronRight className="h-4 w-4 text-white" />
                            </button>
                        </div>
                    </div>

                    {/* Meta grid (company left, position right) */}
                    <div className="mb-6 grid grid-cols-2 gap-4 border-b border-gray-200 pb-6">
                        <div className="space-y-1 text-[13px] leading-5 text-gray-400">
                            {splitLines(testimonials[currentSlide].company).map((line, i) => (
                                <div key={`c-${i}`}>{line}</div>
                            ))}
                        </div>
                        <div className="space-y-1 text-right text-[13px] leading-5 text-red-800">
                            {splitByComma(testimonials[currentSlide].position).map((line, i) => (
                                <div key={`p-${i}`}>{line}</div>
                            ))}
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="mt-6 text-left">
                        <blockquote className="text-[15px] leading-7 text-gray-700">
                            {testimonials[currentSlide].quote}
                        </blockquote>
                    </div>
                </div>
            </div>

            {/* ========== DESKTOP/TABLET (UNCHANGED) ========== */}
            <div className="hidden lg:block">
                <div className="relative z-10">
                    {/* Image Slider */}
                    <div className="relative w-full h-[70vh] overflow-hidden">
                        <Slider {...settings} ref={sliderRef}>
                            {testimonials.map((t) => (
                                <div key={`image-${t.id}`}>
                                    <div className="relative h-[70vh] w-full">
                                        <img
                                            src={t.image || "/placeholder.svg"}
                                            alt={t.name}
                                            className="h-full w-full object-cover"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Header with label, counter, and arrows */}
                    <div className="mx-auto px-4 lg:px-12 4xl:px-32 py-8">
                        <div className="mb-8 flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="mr-3 h-2 w-2 rounded-full bg-[#7E1835]" />
                                <span className="text-sm font-medium uppercase tracking-wider text-[#7E1835]">
                                    TESTIMONIALS
                                </span>
                            </div>

                            <div className="text-lg font-light text-[#7E1835]">
                // {String(currentSlide + 1).padStart(2, "0")}
                            </div>

                            <div className="flex items-center">
                                <PrevArrow onClick={goToPrev} />
                                <NextArrow onClick={goToNext} />
                            </div>
                        </div>

                        {/* Sliding content row */}
                        <div className="relative overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {testimonials.map((t) => (
                                    <div key={`content-${t.id}`} className="w-full flex-shrink-0">
                                        {/* Top row: position / name / company */}
                                        <div className="mb-8 flex w-full flex-col gap-4 border-b border-gray-200 pb-8 md:flex-row md:items-center md:justify-between">
                                            <div className="text-left">
                                                <h2 className="text-[16px] font-normal text-gray-600 ">{t.position}</h2>
                                            </div>

                                            <div className="text-left md:text-center">
                                                <h3 className="text-[24px] font-bold text-[#7E1835]">{t.name}</h3>
                                            </div>

                                            <div className="text-left md:text-right">
                                                <h2 className="text-[16px] font-normal text-gray-600 ">{t.company}</h2>
                                            </div>
                                        </div>

                                        {/* Quote */}
                                        <div className="mx-auto mt-8 max-w-4xl text-center">
                                            <blockquote className="text-base font-normal leading-relaxed text-gray-700 md:text-lg">
                                                {t.quote}
                                            </blockquote>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* end desktop */}
                </div>
            </div>
        </div>
    );
}