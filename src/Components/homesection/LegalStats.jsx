/* eslint-disable no-unused-vars */
import React from 'react'
import { BookOpen, Gavel, Scale, Users } from 'lucide-react'
import PropTypes from 'prop-types'

const stats = [
    {
        id: 1,
        eyebrow: '1',
        titleNumber: '600+',
        titleRest: 'Consultations',
        description:
            "From private individuals to multinational clients, we’ve provided strategic legal guidance tailored to each case, each goal, and each unique legal challenge.",
        icon: Scale,
        cardClass: 'bg-rose-50',
        accentClass: 'text-[#7f1326]',
        iconTintClass: 'text-rose-200/30',
    },
    {
        id: 2,
        eyebrow: '2',
        titleNumber: '50+',
        titleRest: 'Cases Won',
        description:
            "We’ve successfully led litigation in matters that demanded sharp advocacy, courtroom strength, and a deep understanding of law at its most complex.",
        icon: BookOpen,
        cardClass: 'bg-white',
        accentClass: 'text-[#7f1326]',
        iconTintClass: 'text-zinc-200',
    },
    {
        id: 3,
        eyebrow: '3',
        titleNumber: '20+',
        titleRest: 'Years Of Experience',
        description:
            "Our partners bring decades of combined legal experience, offering clients a rare blend of institutional memory and forward-thinking legal strategy.",
        icon: Scale,
        cardClass: 'bg-amber-50',
        accentClass: 'text-[#7f1326]',
        iconTintClass: 'text-amber-200/20',
    },
    {
        id: 4,
        eyebrow: '4',
        titleNumber: '98%',
        titleRest: 'Client Satisfaction',
        description:
            "Clients choose us—and return—because we listen, communicate clearly, act decisively, and deliver legal outcomes that hold up to scrutiny.",
        icon: Users,
        cardClass: 'bg-white',
        accentClass: 'text-[#7f1326]',
        iconTintClass: 'text-zinc-200',
    },
    {
        id: 5,
        eyebrow: '5',
        titleNumber: '3',
        titleRest: 'Top-Ranked Partners',
        description:
            "Our leadership team includes some of Ghana’s most respected legal minds, known for their insight, professionalism, and contribution to the legal profession.",
        icon: Gavel,
        cardClass: 'bg-emerald-50',
        accentClass: 'text-[#7f1326]',
        iconTintClass: 'text-emerald-200/20',
    },
]

function StatCard({ stat, className }) {
    const Icon = stat.icon
    return (
        <div
            className={`relative overflow-hidden shadow-sm p-6 border-none 
                        h-[350px] md:h-[350px] lg:h-[458px] 
                        ${stat.cardClass} ${className || ''}`}
        >
            {/* Index number */}
            <div className="text-[32px] font-semibold text-[#7E1835]/30">{stat.eyebrow}</div>

            {/* Decorative icon */}
            <Icon
                aria-hidden="true"
                className={`pointer-events-none absolute top-4 right-4 h-28 w-28 md:h-32 md:w-32 lg:h-44 lg:w-44 opacity-60 ${stat.iconTintClass}`}
            />

            {/* Content */}
            <div className="mt-28 md:mt-32 lg:mt-60 space-y-3">
                <h3 className="text-2xl">
                    <span className={`mr-2 text-3xl font-bold font-garamond ${stat.accentClass}`}>
                        {stat.titleNumber}
                    </span>
                    <span className="text-[#7E1835] text-[20px] font-bold font-garamond">
                        {stat.titleRest}
                    </span>
                </h3>
                <p className="max-w-prose font-outfit text-sm leading-6 text-zinc-600">
                    {stat.description}
                </p>
            </div>
        </div>
    )
}

StatCard.propTypes = {
    stat: PropTypes.shape({
        id: PropTypes.number.isRequired,
        eyebrow: PropTypes.string.isRequired,
        titleNumber: PropTypes.string.isRequired,
        titleRest: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        icon: PropTypes.elementType.isRequired,
        cardClass: PropTypes.string.isRequired,
        accentClass: PropTypes.string.isRequired,
        iconTintClass: PropTypes.string.isRequired,
    }).isRequired,
    className: PropTypes.string,
}

function LegalStatsMd() {
    return (
        <section aria-label="Firm statistics" className="relative w-full hidden md:block lg:hidden">
            <div className="absolute inset-0" />
            <div className="absolute inset-0 " />

            <div className="relative mx-auto py-16 px-2 lg:py-20 mr-4 lg:mr-10 4xl:mr-32">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <StatCard stat={stats[0]} />
                    <StatCard stat={stats[1]} />
                    <StatCard stat={stats[2]} />
                    <StatCard stat={stats[3]} />
                    {/* Last card spans 2 cols on md for center alignment */}
                    <StatCard stat={stats[4]} className="md:col-span-1 md:mx-auto" />
                </div>
            </div>
        </section>
    )
}

// Height constants for placeholder div
const MOBILE_HEIGHT = "h-[250px]";
const CARD_HEIGHT = "h-[458px]";
const TABLET_HEIGHT = "h-[350px]";

function LegalStatsLg() {
    return (
        <section aria-label="Firm statistics" className="relative w-full md:hidden lg:block" >
            <div className="absolute inset-0" />
            <div className="absolute inset-0 " />
            <div className="relative mx-auto py-16 px-2 lg:py-20 mr-4 lg:mr-10 4xl:mr-32">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* placeholder for alignment on md+ */}
                    <div className="hidden lg:block" aria-hidden="true">
                        <div className={`${MOBILE_HEIGHT} lg:${CARD_HEIGHT} md:${TABLET_HEIGHT}`} />
                    </div>
                    <StatCard stat={stats[0]} />
                    <StatCard stat={stats[1]} />
                    <StatCard stat={stats[2]} />
                    <StatCard stat={stats[3]} />
                    <StatCard stat={stats[4]} />
                </div>
            </div>
        </section>
    )
}

export default function LegalStats() {
    return (
        <>
            <LegalStatsMd />
            <LegalStatsLg />
        </>
    );
}