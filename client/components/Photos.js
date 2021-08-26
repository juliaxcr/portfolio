import React from 'react'
import { NavPage, SideBar, Footer } from './index'
import simpleParallax from 'simple-parallax-js'

//declare and populate initial state
const defaultState = {
    navbar: false,
    sections: [],
}

export default class Photos extends React.Component {
    constructor() {
        super()
        this.state = defaultState
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        const prevState = this.state.navbar
        this.setState({
            navbar: !prevState,
        })
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        const images = document.getElementsByClassName('plx')
        new simpleParallax(images, {
            delay: 0,
            orientation: 'down',
            scale: 1.9,
        })
    }

    render() {
        return (
            <div id='photos-outer-container'>
                {this.state.navbar ? (
                    <NavPage handleClick={this.handleClick} />
                ) : (
                    <div id='photos-inner-container'>
                        <div id='photo-title'>
                            <h1>Photographs</h1>
                        </div>
                        <div id='photos'>
                            <div id='first-row'>
                                <img className='first-row' src='/images/columbia.png' />
                                <img className='first-row' src='/images/barcelona.png' />
                            </div>
                            <div id='second-row'>
                                <img className='second-row' src='/images/central-park.png' />
                                <img
                                    className='second-row'
                                    id='ontop'
                                    src='/images/photos/4.jpeg'
                                />
                            </div>
                            <img className='plx' src='/images/photos/5.jpeg' />
                            <div id='fourth-row'>
                                <img className='fourth-row' src='/images/photos/6.jpeg' />
                                <img className='fourth-row' src='/images/photos/7.jpeg' />
                            </div>
                            <div id='fifth-row'>
                                <img className='fifth-row' src='/images/photos/8.jpeg' />
                                <img className='fifth-row' src='/images/photos/9.jpeg' />
                                <img
                                    className='fifth-row'
                                    id='right'
                                    src='/images/photos/10.jpeg'
                                />
                            </div>
                            {/* <img className="plx" id="large" src="/images/photos/12.jpeg"/> */}
                            <img className='last' src='/images/photos/12.jpeg' />
                        </div>
                        <Footer />
                    </div>
                )}
                <SideBar
                    navbar={this.state.navbar}
                    sections={this.state.sections}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}
