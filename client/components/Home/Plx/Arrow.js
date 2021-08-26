import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Plx from 'react-plx'

const parallaxData = [
    {
        start: 'self',
        duration: '50vh',
        properties: [
            {
                startValue: 40,
                endValue: -20,
                unit: 'vh',
                property: 'translateY',
            },
            {
                startValue: 1,
                endValue: 0,
                property: 'opacity',
            },
        ],
    },
]

export const Arrow = () => {
    return (
        <Plx className='Arrow' parallaxData={parallaxData}>
            <FontAwesomeIcon icon={faChevronDown} className='faChevron' />
        </Plx>
    )
}
