/* eslint-disable no-unused-vars */
/* src/components/Partners.jsx */
import React from 'react'
import "./Global.css"
import client1 from "../../assets/about/part1.png"
import client2 from "../../assets/about/part2.png"
import client3 from "../../assets/about/part3.png"




const logos = [
    { src: client1, alt: 'lango' },
    { src: client2, alt: 'zenit' },
    { src: client3, alt: 'alterbury' },

]

export default function Partners() {


    return (
        <div className="overflow-hidden w-full py-4 md:py-10 px-4 bg-[#7E1835]">
            <div className='py-5'>
                <div className="wrapper">
                    <img src={client1} alt="brand" className="item item1 " loading="lazy" />
                    <img src={client2} alt="brand" className=" item item2 " loading="lazy" />
                    <img src={client3} alt="brand" className=" item item3 " loading="lazy" />
                </div>
            </div>
        </div>
    )
}
