/* eslint-disable no-unused-vars */
import React from 'react'
import icon1 from "../assets/practical/icon1.png"
import icon2 from "../assets/practical/icon2.png"
import practicebook from "../assets/practical/practicebook.png"


import { ArrowRight } from "lucide-react"
import { Link } from 'react-router-dom'

const Practices = () => {
    return (
        <div>
            {/* Litigation Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon1}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Litigation (Hearings, Appeals, and Review Applications)
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                From first hearings to Supreme Court reviews, we bring precision, preparation, and persuasive advocacy to every stage of litigation. Our focus is on outcomes that protect our clients’ rights and advance their interests.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/litigation"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Due transactional business law Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Transactional Business Law
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                In today’s fast-moving business world, the strength of a transaction depends on the foresight and clarity behind it. We guide clients through every stage of structuring and executing deals to ensure they are legally sound and commercially viable.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/transactional"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Due Transactional Advisory Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Transactional Advisory
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                Every transaction carries risk and opportunity. Our role is to ensure you see both clearly, so you can move forward with confidence at every stage, from planning to execution to post-deal integration.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/advisory"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Due corporate Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Corporate and Commercial Law
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                Behind every successful business is a solid legal framework. From compliance to contracts to restructuring, we provide the clarity and strategy that keep companies secure, compliant, and prepared for growth.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/corporate"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Due banking Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Banking and Financial Institutional Matters
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                Banking and finance demand clarity, compliance, and certainty. We provide legal support that helps institutions manage risk, meet regulatory obligations, and complete transactions with confidence.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/banking"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Due legal Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Legal Due Diligence Investigation
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                Every transaction carries hidden risks. Our legal due diligence services uncover liabilities, validate compliance, and give you the information you need to move forward with certainty.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/legal-investigation"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Due complex Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Complex Debt Recovery
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                Unpaid debts can drain businesses and stall growth. We provide clear, lawful, and results-driven strategies to recover what is owed while safeguarding our clients’ interests.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/complex"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Due property Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Property and Conveyancing
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                Property transactions require accuracy, compliance, and foresight. We ensure every sale, lease, and registration is handled with the precision needed to safeguard our clients’ rights and investments.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/property"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Due labour Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Labour and Employment Law
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                The workplace is where business goals meet human rights. We provide legal clarity on contracts, compliance, and disputes to ensure fairness, protect interests, and maintain strong employer–employee relationships.                            </span>

                            {/* Route Button */}
                            <Link
                                to="/labour"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Due arbitration Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Arbitration and Dispute Resolution
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                Not every conflict belongs in the courtroom. We provide efficient, confidential, and practical dispute resolution services that protect our clients’ interests while minimizing disruption and preserving valuable relationships.                            </span>

                            {/* Route Button */}
                            <Link
                                to="/arbitration"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>


            {/* Due entertainment Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Entertainment Law
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                The creative industry thrives on ideas, talent, and innovation. We provide the legal framework that ensures creators, producers, and media companies can focus on their craft while their rights and interests remain protected.                            </span>

                            {/* Route Button */}
                            <Link
                                to="/entertainment"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Due freezing Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Freezing and Disclosure Orders
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                In high-value disputes, timing and strategy make the difference. We help clients secure freezing and disclosure orders to protect assets and reveal critical information before it’s too late.                            </span>

                            {/* Route Button */}
                            <Link
                                to="/diligence"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Due crisis Card */}
            <div className="flex flex-col items-center justify-center py-4">
                <div className="group flex flex-col lg:flex-row w-full h-auto px-4 lg:px-12 4xl:px-32 border-b-2 border-[#ECDCE1]">

                    {/* Icon */}
                    <div className="flex w-full lg:w-1/3 items-center justify-center lg:justify-start mb-4 lg:mb-0">
                        <img
                            src={icon2}
                            alt="Placeholder"
                            loading="lazy"
                            className="w-12 h-12 lg:w-auto lg:h-auto"
                        />
                    </div>

                    {/* Text + Button */}
                    <div className="flex flex-col w-full lg:w-2/3">
                        <h3 className="font-garamond font-bold text-[24px] lg:text-[32px] leading-[32px] lg:leading-[48px] tracking-[-2%] text-[#7E1835]">
                            Crisis & Risk Management
                        </h3>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between gap-3 lg:gap-0">
                            <span className="text-[14px] lg:text-[16px] font-outfit font-medium text-[#7E1835] w-full lg:w-[611px] leading-[180%] lg:leading-[240%]">
                                In times of uncertainty, you need more than advice — you need strategy. We help clients prepare for risks before they escalate and respond decisively when crises arise.
                            </span>

                            {/* Route Button */}
                            <Link
                                to="/diligence"
                                className="flex-shrink-0 bg-[#ECDCE1] text-[#7E1835] rounded-full p-2 self-end lg:self-auto"
                            >
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Hover Image */}
                        <div
                            className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 mt-4"
                        >
                            <img
                                src={practicebook}
                                alt="Placeholder"
                                className="object-cover h-[173px] w-full mb-2"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Practices