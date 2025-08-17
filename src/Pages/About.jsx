/* eslint-disable no-unused-vars */
import React from 'react'
import AboutHero from '../Components/aboutsection/AboutHero'
import AboutBio from '../Components/aboutsection/AboutBio'
import NextAbout from '../Components/aboutsection/NextAbout'
import Circles from '../Components/aboutsection/Circles'
import AboutTower from '../Components/aboutsection/AboutTower'

const About = () => {
    return (
        <div><AboutHero />
            <AboutBio />
            <NextAbout />
            <Circles />
            <AboutTower />
        </div>
    )
}

export default About