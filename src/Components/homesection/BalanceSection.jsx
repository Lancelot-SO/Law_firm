/* eslint-disable no-unused-vars */
import React from 'react'
import balance from "../../assets/home/balance.png"
import court from "../../assets/home/court.png"
import LegalStats from './LegalStats'


const BalanceSection = () => {
    return (
        <div>
            <div className='relative'>
                <img src={balance} alt="Balance" loading='lazy' className='w-full h-[1950px] lg:h-[1100px] object-cover' />
                <img src={court} alt="Balance" loading='lazy' className='w-full h-[900px] lg:h-full object-cover' />

                <div className='absolute top-20 left-4 lg:left-12 4xl:left-32'>
                    <div
                        className="flex flex-col md:flex-row items-start md:items-center justify-center lg:justify-start gap-2 lg:gap-[325px] lg:text-[12px] tracking-[0.18em]"
                    >
                        <div className='flex flex-row gap-2 items-center'>
                            <span
                                className="inline-block h-2 w-2 rounded-full bg-[#7E1835]"
                                aria-hidden="true"
                            />
                            <span className="text-white text-[14px] font-playfair">Why Kwame Akuffo & Co.</span>
                        </div>

                        <div>
                            <h2 className=" text-white font-garamond font-semibold text-2xl sm:text-3xl lg:text-4xl">
                                We Don’t Play The Odds. We Shape Them.
                            </h2>

                            {/* CTA */}
                            <button className="mt-6 bg-white text-[#7E1835] px-10 py-4 font-medium hover:bg-gray-100 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <LegalStats />
                </div>


            </div>
        </div >
    )
}

export default BalanceSection
