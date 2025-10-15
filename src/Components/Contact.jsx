/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Facebook, Instagram, Twitter, Send } from "lucide-react";

export default function ContactSection() {
    const services = [
        "Commercial Litigation",
        "Corporate Advisory",
        "Dispute Resolution",
        "Employment & Labour",
        "Energy & Natural Resources",
        "Real Estate",
    ];

    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        description: "",
    });

    const selectService = (service) =>
        setSelectedService((prev) => (prev === service ? null : service));

    const handleSubmit = async (e) => {
        e.preventDefault();

        // If your backend expects JSON:
        const payload = {
            ...formData,
            services: selectedService || "", // <-- include selected service as "services"
        };

        // Example POST (uncomment and set your endpoint)
        // try {
        //   const res = await fetch("/api/contact", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(payload),
        //   });
        //   if (!res.ok) throw new Error("Network response was not ok");
        //   alert("Thanks! Your message has been sent.");
        // } catch (err) {
        //   console.error(err);
        //   alert("Something went wrong. Please try again.");
        // }

        console.log("Submitting JSON payload:", payload);
        alert("Thanks! Your message has been sent.");

        // (Optional) reset
        // setFormData({ name: "", contact: "", email: "", description: "" });
        // setSelectedService(null);

        // If your backend expects form-data instead, you can use:
        // const fd = new FormData(e.currentTarget); // picks all inputs, incl. hidden
        // fd.set("services", selectedService || "");
        // await fetch("/api/contact", { method: "POST", body: fd });
    };

    return (
        <div className="bg-white flex items-center justify-center py-8 px-4 lg:px-12 4xl:p-32">
            {/* Parent wrapper: items-stretch ensures both columns are equal height */}
            <div className="flex flex-col lg:flex-row items-stretch overflow-hidden w-full transform transition-all duration-300 hover:shadow-xl hover:scale-[1.01]">
                {/* Left Column - Contact Details (auto height, matches right) */}
                <div className="bg-rose-100 rounded-[5px] md:p-12 p-4 flex flex-col lg:w-[464px]">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-2 h-2 bg-[#7E1835] rounded-full animate-pulse" />
                            <span className="text-[#7E1835] text-sm font-medium tracking-wide">
                                CONTACT DETAILS
                            </span>
                        </div>
                        <h1 className="text-4xl font-serif text-gray-800 mb-8 animate-fade-in">
                            Get In Touch
                        </h1>
                    </div>

                    {/* Content - Mobile stacked, md grid */}
                    <div className="flex-1 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                        {/* Left side */}
                        <div className="space-y-8">
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                                <h3 className="text-[#7E1835] font-medium mb-4">Office Location:</h3>
                                <div className="text-gray-800 space-y-1">
                                    <p>11 Patrice Lumumba Road</p>
                                    <p>Airport Residential Area, Accra</p>
                                    <p className="mt-3">Digital Address : GL-056-923</p>
                                </div>
                            </div>

                            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                                <h3 className="text-[#7E1835] font-medium mb-4">Socials:</h3>
                                <div className="flex gap-4">
                                    <a
                                        href="https://www.facebook.com/KwameAkuffoCoUnlimited?mibextid=wwXIfr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Facebook"
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer"
                                    >
                                        <Facebook className="w-5 h-5 text-[#7E1835]" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/kwameakuffoandcounlimited/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Instagram"
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer"
                                    >
                                        <Instagram className="w-5 h-5 text-[#7E1835]" />
                                    </a>
                                    <a
                                        href="https://x.com/KAcoUnlimited"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Twitter/X"
                                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center transform transition-all duration-200 hover:scale-110 hover:shadow-md cursor-pointer"
                                    >
                                        <Twitter className="w-5 h-5 text-[#7E1835]" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="space-y-8">
                            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                                <h3 className="text-[#7E1835] font-medium mb-4">Telephone:</h3>
                                <p className="text-gray-800">(233) 303 966 645</p>
                            </div>

                            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                                <h3 className="text-[#7E1835] font-medium mb-4">For General Enquiries:</h3>
                                <p className="text-gray-800">Kwame@Kbakuffo.Com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column - Contact Form */}
                <div className="flex-1 bg-white md:pt-4 pt-8 md:px-8">
                    <div>
                        <h2 className="text-2xl font-serif text-gray-800 mb-2 animate-slide-in-right">
                            Need Legal Expertise?
                        </h2>
                        <h3
                            className="text-2xl font-serif text-[#7E1835] mb-8 animate-slide-in-right"
                            style={{ animationDelay: "0.1s" }}
                        >
                            Let's Talk.
                        </h3>

                        <div className="mb-8">
                            <h4 className="text-[#7E1835] font-medium mb-6">Select A Service</h4>
                            <div className="flex flex-wrap gap-3 mb-4">
                                {services.map((service, index) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => selectService(service)}
                                        className={`h-12 px-4 rounded border text-sm border-gray-300 transform transition-all duration-300 hover:scale-105 animate-fade-in-up ${selectedService === service
                                            ? "bg-[#7E1835] text-white border-[#7E1835] hover:bg-red-900 scale-105 shadow-lg"
                                            : "hover:bg-gray-50 bg-transparent hover:shadow-md"
                                            }`}
                                        style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 max-w-lg animate-fade-in-up"
                            style={{ animationDelay: "0.5s" }}
                        >
                            {/* Hidden field so native form posts include the service */}
                            <input type="hidden" name="services" value={selectedService || ""} />

                            <div className="transform transition-all duration-200 hover:translate-x-1">
                                <label className="text-[#7E1835] font-medium mb-2 block">Your Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                                    }
                                    placeholder="Davida Dzato" required
                                    className="w-full h-12 border border-gray-300 px-3 rounded focus:border-[#7E1835] focus:ring-[#7E1835] transition-all duration-200 focus:scale-[1.02]"
                                />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="transform transition-all duration-200 hover:translate-x-1">
                                    <label className="text-[#7E1835] font-medium mb-2 block">Your contact</label>
                                    <input
                                        type="text"
                                        value={formData.contact}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, contact: e.target.value }))
                                        }
                                        placeholder="+233 24 522 6993" required
                                        className="w-full h-12 border border-gray-300 px-3 rounded focus:border-[#7E1835] focus:ring-[#7E1835] transition-all duration-200 focus:scale-[1.02]"
                                    />
                                </div>
                                <div className="transform transition-all duration-200 hover:translate-x-1">
                                    <label className="text-[#7E1835] font-medium mb-2 block">Your Email</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                                        }
                                        placeholder="davidadzato45@gmail.com" required
                                        className="w-full h-12 border border-gray-300 px-3 rounded focus:border-[#7E1835] focus:ring-[#7E1835] transition-all duration-200 focus:scale-[1.02]"
                                    />
                                </div>
                            </div>

                            <div className="transform transition-all duration-200 hover:translate-x-1">
                                <label className="text-[#7E1835] font-medium mb-2 block">
                                    Description (Optional)
                                </label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, description: e.target.value }))
                                    }
                                    placeholder="Write your message here..."
                                    className="w-full min-h-24 border border-gray-300 px-3 py-2 rounded resize-none focus:border-[#7E1835] focus:ring-[#7E1835] transition-all duration-200 focus:scale-[1.02]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-[#7E1835] hover:bg-red-900 text-white h-12 px-8 flex items-center gap-2 rounded transform transition-all duration-200 hover:scale-105 hover:shadow-lg group"
                            >
                                Send Message
                                <Send className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
