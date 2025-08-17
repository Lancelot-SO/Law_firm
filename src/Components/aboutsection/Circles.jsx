import "./Animation.css"
export default function Circles() {
    return (
        <main className="lg:h-[515px] bg-white flex items-center justify-center p-4">
            <div className="w-full ">
                <svg viewBox="0 0 800 300" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                    {/* Left circle - bottom half */}
                    <path
                        d="M 40 150 A 120 120 0 0 0 280 150"
                        fill="none"
                        stroke="#7E1835"
                        strokeWidth="1"
                        className="circle-draw"
                    />
                    {/* Left circle text */}
                    <text
                        x="160"
                        y="150"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="font-medium text-fade text-fade-delay-1"
                    >
                        <tspan x="160" dy="-1em" className="font-garamond text-[16px] fill-black">
                            22500+
                        </tspan>
                        <tspan x="160" dy="1.2em" className="font-garamond text-[8px]" fill="#7E1835">
                            COMPANIES WE HAVE HELPED
                        </tspan>
                    </text>

                    {/* Middle circle - complete circle */}
                    <circle
                        cx="400"
                        cy="150"
                        r="120"
                        fill="none"
                        stroke="#7E1835"
                        strokeWidth="1"
                        className="circle-draw circle-draw-delay-1"
                    />
                    {/* Middle circle text */}
                    <text
                        x="400"
                        y="150"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="font-medium text-fade text-fade-delay-2"
                    >
                        <tspan x="400" dy="-1em" className="font-garamond text-[16px] fill-black">
                            22500+
                        </tspan>
                        <tspan x="400" dy="1.2em" className="font-garamond text-[8px]" fill="#7E1835">
                            LEGAL CONSULTATIONS
                        </tspan>
                    </text>

                    {/* Right circle - bottom half */}
                    <path
                        d="M 520 150 A 120 120 0 0 1 760 150"
                        fill="none"
                        stroke="#7E1835"
                        strokeWidth="1"
                        className="circle-draw circle-draw-delay-2"
                    />
                    {/* Right circle text */}
                    <text x="640" y="150" textAnchor="middle" dominantBaseline="middle" className="text-fade text-fade-delay-3">
                        <tspan x="640" dy="-1em" className="font-garamond text-[16px] fill-black">
                            22500+
                        </tspan>
                        <tspan x="640" dy="1.2em" className="font-garamond text-[8px]" fill="#7E1835">
                            YEARS OF EXPERIENCE
                        </tspan>
                    </text>

                    {/* Left dot - intersection of left and middle circles */}
                    <circle cx="280" cy="150" r="6" fill="#7E1835" className="dot-appear dot-appear-delay-1" />

                    {/* Right dot - intersection of middle and right circles */}
                    <circle cx="520" cy="150" r="6" fill="#7E1835" className="dot-appear dot-appear-delay-2" />
                </svg>
            </div>
        </main>
    )
}
