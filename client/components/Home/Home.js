import React from 'react'
//import children components
import {
    NavPage,
    Intro,
    HomeAbout,
    HomeProjects,
    HomePhotography,
    Footer,
    SideBar,
} from '../../components'

//declare and populate initial state
const defaultState = {
    navbar: false,
    sections: ['Intro', 'HomeAbout', 'HomeProjects', 'HomePhotography'],
}

export default class Home extends React.Component {
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
    }

    render() {
        return (
            <div id='home-container'>
                <div id='home-main'>
                    {this.state.navbar ? (
                        <NavPage handleClick={this.handleClick} />
                    ) : (
                        <div>
                            <Intro />
                            <HomeAbout />
                            <HomeProjects />
                            <div className='photo-transition'></div>
                            <HomePhotography />
                            <Footer foreground={true} />
                        </div>
                    )}
                </div>
                <SideBar
                    navbar={this.state.navbar}
                    sections={this.state.sections}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}
