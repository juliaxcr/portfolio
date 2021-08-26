import React from 'react'
import Plx from 'react-plx'

const overviewData = [
    {
        start: '.overview-start',
        duration: '20vh',
        properties: [
            {
                startValue: 0,
                endValue: -10,
                unit: 'vh',
                property: 'translateY',
            },
            {
                startValue: 0,
                endValue: 1,
                property: 'opacity',
            },
        ],
    },
]

export const OverviewImgPlx = ({ name, img }) => {
    return (
        <div>
            <Plx
                className={name === 'You-Rock' ? 'Party-ov' : 'Overview'}
                parallaxData={overviewData}
            >
                <img src={img} />
            </Plx>
        </div>
    )
}
