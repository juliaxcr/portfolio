import React from 'react'
import { ProjectPlx } from './Plx/ProjectPlx'
import simpleParallax from 'simple-parallax-js'

export class HomeProjects extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        const image = document.getElementById('project-plx')
        new simpleParallax(image, {
            delay: 0,
            orientation: 'down',
            scale: 1.6,
        })
    }

    render() {
        return (
            <div className='home-projects-container' id='HomeProjects'>
                <ProjectPlx />
                <img id='project-plx' src='/images/columbia.png ' />
            </div>
        )
    }
}
