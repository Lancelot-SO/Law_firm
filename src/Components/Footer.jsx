import { Facebook, Instagram, Twitter } from "lucide-react"
import footerbg from "../assets/footerbg.png"

export default function Footer() {
    return (
        <div className="">
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
                <div className=" mx-auto flex justify-between items-start">
                    <div className="space-y-6">
                        <h1 className="text-4xl font-serif text-white mb-8">Get In Touch With Us</h1>
                        <div className="space-y-4 text-white">
                            <p className="text-lg">
                                <span className="font-medium">Telephone Number:</span> 0207 099 2940
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Email:</span> Info@eld.Com
                            </p>
                            <p className="text-lg">
                                <span className="font-medium">Location:</span> Kanda High-Street
                            </p>
                        </div>
                    </div>

                    <button className="bg-[#7E1835] hover:bg-[#7E1835]/90 text-white px-8 py-3 text-lg font-medium">
                        Get a Consultation
                    </button>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#7E1835] text-white py-12 px-4 lg:px-12 4xl:px-32">
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Logo and Social Media */}
                        <div className="space-y-6">
                            <div>
                                <div className="text-6xl font-bold mb-2">KA</div>
                                <div className="text-sm font-medium tracking-wider">KWAME AKUFFO & CO.</div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-[#7E1835] rounded-full flex items-center justify-center hover:bg-[#7E1835]/90 cursor-pointer">
                                    <Facebook size={20} />
                                </div>
                                <div className="w-10 h-10 bg-[#7E1835] rounded-full flex items-center justify-center hover:bg-[#7E1835]/90 cursor-pointer">
                                    <Instagram size={20} />
                                </div>
                                <div className="w-10 h-10 bg-[#7E1835] rounded-full flex items-center justify-center hover:bg-[#7E1835]/90 cursor-pointer">
                                    <Twitter size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start justify-between lg:w-[1050px]">
                            {/* Who We Are */}
                            <div>
                                <h3 className="text-lg font-medium mb-4 underline">Who We Are</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            Insights
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Our Services */}
                            <div>
                                <h3 className="text-lg font-medium mb-4 underline">Our Services</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            Practice Area
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            Case Studies
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            Insights
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Our Terms */}
                            <div>
                                <h3 className="text-lg font-medium mb-4 underline">Our Terms</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-red-100 hover:text-white transition-colors">
                                            Cookies Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-[#7E1835] mt-12 pt-8 text-center">
                        <p className="text-red-100">Kwame Akuffo & Co @2025. • All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
