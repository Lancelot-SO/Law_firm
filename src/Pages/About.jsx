/* eslint-disable no-unused-vars */
import React from 'react'
import AboutHero from '../Components/aboutsection/AboutHero'
import AboutBio from '../Components/aboutsection/AboutBio'
import NextAbout from '../Components/aboutsection/NextAbout'
import Circles from '../Components/aboutsection/Circles'
import AboutTower from '../Components/aboutsection/AboutTower'
import AboutBalance from '../Components/aboutsection/AboutBalance'
import Reach from '../Components/aboutsection/Reach'
import TestimonialSlider from '../Components/homesection/TestimonialSlider'
import Partners from '../Components/aboutsection/Partners'
import AboutBalanceSection from '../Components/homesection/AboutBalanceSection'

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutBio />
            <NextAbout />
            <Circles />
            <AboutTower />
            <AboutBalance />
            <AboutBalanceSection />
            <Reach />
            <Partners />
            <TestimonialSlider />
        </div>
    )
}

export default About