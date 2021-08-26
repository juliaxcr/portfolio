import React from 'react'
import { Arrow } from '../index'

export const Intro = () => {
    return (
        <div className='intro-container' id='Intro'>
            <div className='center'>
                <h1 id='name'>JULIA CROOIJMANS</h1>
                <div className='center-title'>
                    <h2>Software Engineer</h2>
                    <h2 id='location'>New York, NY</h2>
                </div>
            </div>
            <div className='bottom-center'>
                <Arrow />
            </div>
        </div>
    )
}
