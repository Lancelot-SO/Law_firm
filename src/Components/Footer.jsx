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
        <div className="overflow-hidden">
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
                        <h1 className="text-3xl font-garamond text-white mb-8 pb-2 border-b-2 border-dashed border-[#7E1835]">
                            Get In Touch With Us
                        </h1>
                        <div className="space-y-4 text-white">
                            <p className="text-lg">
                                <span className="font-medium">Telephone Number:</span> 054 012 5722
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
            <footer className="bg-[#7E1835] text-white max-w-8xl mx-auto">
                <div className=" px-4 lg:px-12 4xl:px-32 py-12">
                    {/* TOP: mobile = 2 cols (logo/social | menus). lg = 4 cols */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Logo + Socials */}
                        <div className="space-y-6">
                            <img
                                src={logo}
                                alt="Kwame Akuffo & Co. logo"
                                className="h-[85px] w-[149px]"
                            />

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://www.facebook.com/KwameAkuffoCoUnlimited?mibextid=wwXIfr&rdid=3HRQDx8cthbffmTO#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-10 h-10 bg-[#D9D9D9]/30 rounded-full flex items-center justify-center hover:bg-[#D9D9D9]/40 transition-colors"
                                >
                                    <Facebook size={20} />
                                </a>
                                <a
                                    href="https://www.instagram.com/kwameakuffoandcounlimited/?utm_source=ig_web_button_share_sheet"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 bg-[#D9D9D9]/30 rounded-full flex items-center justify-center hover:bg-[#D9D9D9]/40 transition-colors"
                                >
                                    <Instagram size={20} />
                                </a>
                                <a
                                    href="https://x.com/KAcoUnlimited"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X (Twitter)"
                                    className="w-10 h-10 bg-[#D9D9D9]/30 rounded-full flex items-center justify-center hover:bg-[#D9D9D9]/40 transition-colors"
                                >
                                    <FaXTwitter size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Menus: stack & right-align on mobile; spread & left-align on lg */}
                        <div className="sm:col-span-1 lg:col-span-3">
                            <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3 md:text-center md:max-w-4xl ">
                                {/* Who We Are */}
                                <div>
                                    <h3 className="text-lg font-medium font-garamond mb-4 underline underline-offset-4">
                                        Who We Are
                                    </h3>
                                    <ul className="space-y-3 font-openSans">
                                        <li>
                                            <a
                                                href="/about"
                                                className="text-red-100 hover:text-white hover:underline transition-colors"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/insights"
                                                className="text-red-100 hover:text-white hover:underline transition-colors"
                                            >
                                                Insights
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Our Services */}
                                <div>
                                    <h3 className="text-lg font-medium font-garamond mb-4 underline underline-offset-4">
                                        Our Services
                                    </h3>
                                    <ul className="space-y-3 font-openSans">
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
                                                className="text-red-100 hover:text-white hover:underline transition-colors"
                                            >
                                                Case Studies
                                            </a>
                                        </li>
                                        {/* If you later add a third link here to match the image’s extra line: */}
                                        {/* <li><a href="/insights" className="text-red-100 hover:text-white hover:underline transition-colors">Insights</a></li> */}
                                    </ul>
                                </div>

                                {/* Our Terms */}
                                <div>
                                    <h3 className="text-lg font-medium font-garamond mb-4 underline underline-offset-4">
                                        Our Terms
                                    </h3>
                                    <ul className="space-y-3 font-openSans">
                                        <li>
                                            <button
                                                onClick={() => setIsTermsOpen(true)}
                                                className="text-red-100 hover:text-white hover:underline transition-colors"
                                            >
                                                Terms &amp; Conditions
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => setIsPrivacyOpen(true)}
                                                className="text-red-100 hover:text-white hover:underline transition-colors"
                                            >
                                                Privacy Policy
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider + Copyright */}
                    <hr className="border-[#D1D5DD]/60 my-8" />
                    <div className="border-t border-[#7E1835] pt-3 text-center">
                        <p className="text-red-100 font-openSans">
                            Kwame Akuffo &amp; Co. ©{new Date().getFullYear()}. • All Rights Reserved
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
