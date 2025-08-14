/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen(v => !v)

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Practice Area', path: '/practice-area' },
        { name: 'Our Team', path: '/team' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Insights', path: '/insights' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 lg:px-10 4xl:px-32 backdrop-blur-md bg-[#2C2C2C]/80 text-[#F5F5DC]">
            {/* ─── Mobile logo & hamburger ───────────────────────────── */}
            <Link to="/" className="flex items-center gap-2 lg:hidden">
                <img src={logo} alt="KA Logo" className="h-10 w-auto object-cover" />
            </Link>
            <button
                onClick={toggleMenu}
                className="lg:hidden text-[#F5F5DC] p-2"
                aria-label="Toggle navigation menu"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* ─── Desktop logo & nav & CTA ───────────────────────────── */}
            <Link to="/" className="hidden lg:flex items-center gap-2">
                <img src={logo} alt="KA Logo" className="h-[54px] w-[94px] object-cover" />
            </Link>

            <nav className="hidden lg:flex flex-1 justify-center ml-10">
                <ul className="flex items-center gap-8">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                className="relative group font-medium text-sm text-white hover:text-gray-300"
                            >
                                <span className="mr-2 text-xs">•</span>
                                {link.name}
                                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#7E1835] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="hidden lg:block ml-auto">
                <Link
                    to="/consultation"
                    className="bg-[#7E1835] hover:bg-[#7E1835]/90 text-white px-6 py-3 rounded-sm"
                >
                    Get a Consultation
                </Link>
            </div>

            {/* ─── Mobile drawer ───────────────────────────── */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-[#2C2C2C] p-6">
                    <div className="flex justify-between items-center">
                        <Link to="/" onClick={toggleMenu} className="flex items-center gap-2">
                            <img src={logo} alt="KA Logo" className="h-10 w-auto object-cover" />
                        </Link>
                        <button onClick={toggleMenu} className="text-white text-2xl leading-none">
                            &times;
                        </button>
                    </div>

                    <nav className="mt-8 space-y-4 bg-[#2C2C2C]">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={toggleMenu}
                                className="flex items-center py-2 text-lg font-semibold text-[#F5F5DC] hover:text-white"
                            >
                                <span className="mr-2 text-xs">•</span>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="mt-8">
                        <Link
                            to="/consultation"
                            onClick={toggleMenu}
                            className="block bg-[#7E1835] hover:bg-[#7E1835]/90 text-white text-center px-6 py-3 rounded-sm"
                        >
                            Get a Consultation
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}
