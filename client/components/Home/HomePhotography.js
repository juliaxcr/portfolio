import React from 'react'
import { PhotoPlx } from './Plx/PhotoPlx'
import simpleParallax from 'simple-parallax-js'
import { PhotoGallery } from '../index'

export class HomePhotography extends React.Component {
    constructor() {
        super()
    }
    componentDidMount() {
        const image = document.getElementById('photo-plx')
        new simpleParallax(image, {
            delay: 0,
            orientation: 'down',
            scale: 1.5,
        })
    }

    render() {
        return (
            <div className='home-photo-container' id='HomePhotography'>
                <PhotoPlx />
                <img id='photo-plx' src='/images/central-park.png' />
            </div>
        )
    }
}
