import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

import Plx from 'react-plx'

const parallaxData = [
    {
        start: 'self',
        duration: '10vh',
        startOffset: '30vh',
        properties: [
            {
                startValue: 0,
                endValue: -20,
                unit: 'vh',
                property: 'translateY',
            },
        ],
    },
    {
        start: '.button',
        startOffset: '20vh',
        duration: '80vh',
        properties: [
            {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
            },
        ],
    },
]

export const HomeAboutPlx = () => {
    return (
        <Plx className='HomeAbout' parallaxData={parallaxData}>
            <div id='home-about-content'>
                <p>Hi!</p>
                <br></br>
                <p>
                    {' '}
                    I'm <span className='darker'>Julia</span>, an aspiring software engineer
                    and rising senior at Barnard College, Columbia University in NYC.
                </p>
                <br></br>
                <p> Scroll down to see more!</p>
            </div>
            <div id='home-about-button'>
                <NavLink to='/about' className='Button'>
                    <button>Learn More</button>
                </NavLink>
            </div>
            <div className='button'></div>
        </Plx>
    )
}
