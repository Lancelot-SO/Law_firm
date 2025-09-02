/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
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
        { name: 'Case Studies', path: '/case' },
        { name: 'Insights', path: '/insights' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-4 lg:px-10 4xl:px-32 backdrop-blur-md bg-[#2C2C2C]/80 text-[#F5F5DC]">
            {/* ─── Mobile logo & hamburger ───────────────────────────── */}
            <NavLink to="/" className="flex items-center gap-2 lg:hidden">
                <img src={logo} alt="KA Logo" className="h-[54px] w-[94px] object-cover" />
            </NavLink>
            <button
                onClick={toggleMenu}
                className="lg:hidden text-[#F5F5DC] p-2"
                aria-label="Toggle navigation menu"
            >
                <Menu className="h-6 w-6" />
            </button>

            {/* ─── Desktop logo & nav & CTA ───────────────────────────── */}
            <NavLink to="/" className="hidden lg:flex items-center gap-2">
                <img src={logo} alt="KA Logo" className="h-[54px] w-[94px] object-cover" />
            </NavLink>

            <nav className="hidden lg:flex flex-1 justify-center ml-10">
                <ul className="flex items-center gap-8">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                end
                                className={({ isActive }) =>
                                    `relative font-medium text-[16px] transition-colors duration-200 ${isActive ? "text-[#F5F5DC] underline" : "text-gray-300 hover:text-white"
                                    }`
                                }
                            >
                                <span className="mr-2 text-xs">•</span>
                                {link.name}
                                <span
                                    className={({ isActive }) =>
                                        `absolute left-0 bottom-0 h-[2px] transition-all duration-300 ${isActive
                                            ? "w-full bg-[#7E1835]"
                                            : "w-0 group-hover:w-full bg-[#7E1835]"
                                        }`
                                    }
                                ></span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="hidden lg:block ml-auto">
                <NavLink
                    to="/consultation"
                    className="bg-[#7E1835] hover:bg-[#7E1835]/90 text-white px-6 py-3 rounded-sm"
                >
                    Get a Consultation
                </NavLink>
            </div>

            {/* ─── Mobile drawer ───────────────────────────── */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-50 bg-[#2C2C2C] p-6">
                    <div className="flex justify-between items-center">
                        <NavLink to="/" onClick={toggleMenu} className="flex items-center gap-2">
                            <img src={logo} alt="KA Logo" className="h-10 w-auto object-cover" />
                        </NavLink>
                        <button onClick={toggleMenu} className="text-white text-2xl leading-none">
                            &times;
                        </button>
                    </div>

                    <nav className="mt-8 space-y-4 bg-[#2C2C2C]">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                end
                                onClick={toggleMenu}
                                className={({ isActive }) =>
                                    `flex items-center py-2 text-lg font-semibold ${isActive ? "text-[#7E1835]" : "text-[#F5F5DC] hover:text-white"
                                    }`
                                }
                            >
                                <span className="mr-2 text-xs">•</span>
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="mt-8">
                        <NavLink
                            to="/consultation"
                            onClick={toggleMenu}
                            className="block bg-[#7E1835] hover:bg-[#7E1835]/90 text-white text-center px-6 py-3 rounded-sm"
                        >
                            Get a Consultation
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    )
}
