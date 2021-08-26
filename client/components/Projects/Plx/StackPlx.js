import React from 'react'
import Plx from 'react-plx';

const stackData = [
    {
        start: '.tech-start',
        duration: '40vh',
        properties: [
            {
                startValue: 88,
                endValue: 15,
                unit: 'vh',
                property: 'translateX',
            },
        ]
    }
]


export const StackPlx = ({ tech }) => {
    return (
        <div>
            <Plx className="Stack" parallaxData={stackData}>
                <div id="stack">
                    {
                        tech.map(elt => <p className="stack-elt">{elt}</p>)
                    }
                </div>
            </Plx>
        </div>
    );
}