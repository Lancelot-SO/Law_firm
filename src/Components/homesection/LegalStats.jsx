/* eslint-disable no-unused-vars */
import React from 'react'
import { BookOpen, Gavel, Scale, Users } from 'lucide-react'

const stats = [
    {
        id: 1,
        eyebrow: '1',
        titleNumber: '600+',
        titleRest: 'Consultations',
        description:
            "Over 600 people have trusted us for legal clarity when it mattered most. One conversation can change everything, and we've had hundreds that have.",
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
            "We don’t just take cases; we close them with confidence. With 50+ wins under our belt, we know what it takes to deliver results that matter.",
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
            "For over two decades, we’ve stood at the intersection of law and strategy. That’s 20+ years of navigating complexity and coming out on top.",
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
            "Our clients walk away satisfied, and many come back or refer others. It’s not just what we win; it’s how we work that earns trust.",
        icon: Users,
        cardClass: 'bg-white',
        accentClass: 'text-[#7f1326]',
        iconTintClass: 'text-zinc-200',
    },
    {
        id: 5,
        eyebrow: '5',
        titleNumber: '5+',
        titleRest: 'Top-Ranked Partners',
        description:
            "Behind every case is a powerhouse team. With 20+ partners ranked among the best, we bring brains, boldness, and experience that get things done.",
        icon: Gavel,
        cardClass: 'bg-emerald-50',
        accentClass: 'text-[#7f1326]',
        iconTintClass: 'text-emerald-200/20',
    },
]

const CARD_HEIGHT = 'h-[458px]'
const MOBILE_HEIGHT = 'h-[250px]'

import PropTypes from 'prop-types'

function StatCard({ stat }) {
    const Icon = stat.icon
    return (
        <div
            className={`relative overflow-hidden shadow-sm p-6 border-none ${CARD_HEIGHT} ${stat.cardClass}`}
        >
            {/* Index number */}
            <div className="text-[32px] font-semibold text-[#7E1835]/30">{stat.eyebrow}</div>

            {/* Decorative icon */}
            <Icon
                aria-hidden="true"
                className={`pointer-events-none absolute top-4 right-4 h-40 w-40 sm:h-44 sm:w-44 opacity-60 ${stat.iconTintClass}`}
            />

            {/* Content */}
            <div className="mt-48 space-y-3 md:mt-60">
                <h3 className="text-2xl">
                    <span className={`mr-2 text-3xl font-bold font-garamond ${stat.accentClass}`}>
                        {stat.titleNumber}
                    </span>
                    <span className="text-[#7E1835] text-[20px] font-bold font-garamond">{stat.titleRest}</span>
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
}

export default function LegalStats() {
    return (
        <section
            aria-label="Firm statistics"
            className="relative w-full "
        >
            <div className="absolute inset-0" />
            <div className="absolute inset-0 " />

            <div className="relative mx-auto py-16 px-2 md:py-20 mr-4 lg:mr-10 4xl:mr-32">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {/* placeholder for alignment on md+ */}
                    <div className="hidden md:block" aria-hidden="true">
                        <div className={`${MOBILE_HEIGHT} md:${CARD_HEIGHT}`} />
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