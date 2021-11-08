import React from 'react'
import { NavPage, SingleProject, Footer, SideBar } from '../index'

const defaultState = {
    navbar: false,
    sections: [],
}

export default class Projects extends React.Component {
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
            <div id='projects-outer-parent'>
                <div id='projects-outer-container'>
                    {this.state.navbar ? (
                        <NavPage handleClick={this.handleClick} />
                    ) : (
                        <div id='projects-container'>
                            <SingleProject projectName='You-Rock' />
                            <SingleProject projectName='Form-Motion' />
                            <SingleProject projectName='Columbia-Buy-Sell-Trade' />
                        </div>
                    )}
                    <SideBar
                        navbar={this.state.navbar}
                        sections={this.state.sections}
                        handleClick={this.handleClick}
                    />
                </div>
                <Footer />
            </div>
        )
    }
}
