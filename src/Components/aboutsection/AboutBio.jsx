/* eslint-disable react/no-unescaped-entities */
export default function AboutBio() {
    return (
        <div className="border-[#7E1835] border-b-2 mb-4">
            <div className="h-[235px] bg-white px-4 lg:px-12 4xl:px-32 ">
                {/* Main Content - ABOUT US and description in row */}
                <main className="py-12">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center flex-shrink-0">
                            <div className="w-2 h-2 bg-[#7E1835] rounded-full mr-3"></div>
                            <span className="text-sm font-medium text-[#7E1835] tracking-wide">ABOUT US</span>
                        </div>

                        <div className="w-[900px]">
                            <p className="text-gray-700 text-[14px] leading-[30px]">
                                At Kwame Akuffo & Co, We Take Time To Understand Our Clients By Constantly Changing And Adapting To New
                                Demands And Business Trends To Adapt To The Ever-Changing Needs Of Our Clients. We Make A Conscious Effort
                                To Understand What Clients Need Today And Better Prepare Them For What They Will Need Tomorrow. We Achieve
                                This By Providing The Highest Standards Of Legal Services To Our Clients By Putting Them At The Center Of
                                All We Do; Paying Particular Attention To The Details Of Clients' Business With The Understanding That No
                                Two Clients Are The Same.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
