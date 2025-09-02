/* eslint-disable no-irregular-whitespace */
import { Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";

import footerbg from "../assets/footerbg.png";
import logo from "../assets/footerlogo.png";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms";

export default function Footer() {
    const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);


    return (
        <div>
            {/* Hero Section with Contact Info */}
            <div
                className="relative text-white py-20 px-4 lg:px-12 4xl:px-32"
                style={{
                    backgroundImage: `url(${footerbg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundBlendMode: "overlay",
                }}
            >
                <div className="mx-auto flex flex-col md:flex-row justify-between items-start">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-garamond text-white mb-8 pb-2 border-b-2 border-dashed border-[#7E1835]">
                            Get In Touch With Us
                        </h1>
                        <div className="space-y-4 text-white">
                            <p className="text-lg">
                                <span className="font-medium">Telephone Number:</span> +233 303
                                966 645
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Email:</span> Info@kbakuffo.com
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Location:</span> 11 Patrice
                                Lumumba Road, Accra
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/consultation"
                        className="bg-[#7E1835] hover:bg-[#7E1835]/90 text-white px-8 py-3 text-lg font-medium mt-4 md:mt-0"
                    >
                        Get a Consultation
                    </Link>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#7E1835] text-white py-12 px-4 lg:px-12 4xl:px-32">
                <div className="w-full">
                    <div className="flex items-center justify-between grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Logo and Social Media */}
                        <div className="space-y-6">
                            <div>
                                <img src={logo} alt="Logo" className="h-[85px] w-[149px]" />
                            </div>

                            <div className="flex space-x-4">
                                <Link
                                    to="https://www.facebook.com/KwameAkuffoCoUnlimited?mibextid=wwXIfr&rdid=3HRQDx8cthbffmTO#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#D9D9D9]/30 rounded-full flex items-center justify-center hover:bg-[#7E1835]/90 cursor-pointer"
                                >
                                    <Facebook size={20} />
                                </Link>
                                <Link
                                    to="https://www.instagram.com/kwameakuffoandcounlimited/?utm_source=ig_web_button_share_sheet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#D9D9D9]/30 rounded-full flex items-center justify-center hover:bg-[#7E1835]/90 cursor-pointer"
                                >
                                    <Instagram size={20} />
                                </Link>
                                <Link
                                    to="https://x.com/KAcoUnlimited"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-[#D9D9D9]/30 rounded-full flex items-center justify-center hover:bg-[#7E1835]/90 cursor-pointer"
                                >
                                    <FaXTwitter size={20} />
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start justify-between lg:w-[650px] 4xl:w-[1050px]">
                            {/* Who We Are */}
                            <div>
                                <h3 className="text-lg font-medium font-garamond mb-4 underline">
                                    Who We Are
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="/about"
                                            className="text-red-100 hover:text-white hover:underline transition-colors font-sans"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/insights"
                                            className="text-red-100 hover:text-white hover:underline transition-colors font-sans"
                                        >
                                            Insights
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Our Services */}
                            <div>
                                <h3 className="text-lg font-medium font-garamond mb-4 underline">
                                    Our Services
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="/practice-area"
                                            className="text-red-100 hover:text-white hover:underline transition-colors"
                                        >
                                            Practice Area
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/case"
                                            className="text-red-100 hover:text-white hover:underline transition-colors font-sans"
                                        >
                                            Case Studies
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Our Terms */}
                            <div>
                                <h3 className="text-lg font-medium font-garamond mb-4 underline">
                                    Our Terms
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <button
                                            onClick={() => setIsTermsOpen(true)}
                                            className="text-red-100 hover:text-white hover:underline transition-colors font-sans"
                                        >
                                            Terms & Conditions
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setIsPrivacyOpen(true)}
                                            className="text-red-100 hover:text-white hover:underline transition-colors font-sans"
                                        >
                                            Privacy Policy
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr className="border-[#D1D5DD] my-8" />

                    {/* Copyright */}
                    <div className="border-t border-[#7E1835] mt-6 pt-2 text-center">
                        <p className="text-red-100 font-sans">
                            Kwame Akuffo & Co @2025. • All Rights Reserved
                        </p>
                    </div>
                </div>
            </footer>

            {/* ✅ Privacy Policy Modal */}
            <PrivacyPolicy
                isOpen={isPrivacyOpen}
                onClose={() => setIsPrivacyOpen(false)}
            />

            {/* ✅ Terms Modal */}
            <Terms
                isOpen={isTermsOpen}
                onClose={() => setIsTermsOpen(false)}
            />

        </div>
    );
}
