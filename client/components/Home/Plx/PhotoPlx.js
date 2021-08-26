import React from 'react'
import Plx from 'react-plx'
import { NavLink } from 'react-router-dom'

const titleData = [
    {
        start: '.home-photo-container',
        startOffset: '10vh',
        duration: '35vh',
        properties: [
            {
                startValue: 15,
                endValue: 115,
                unit: 'vh',
                property: 'translateX',
            },
        ],
    },
]

export const PhotoPlx = () => {
    return (
        <div>
            <Plx className='Button' id='BiggerButton' parallaxData={titleData}>
                <NavLink to='/photographs' className='Button'>
                    <button>Photographs</button>
                </NavLink>
            </Plx>
        </div>
    )
}
