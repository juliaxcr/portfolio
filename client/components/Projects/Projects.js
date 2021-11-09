import React from 'react'
import { NavPage, SingleProject, Footer, SideBar } from '../index'
import { Link } from 'react-router-dom'
import { fetchAllProjects } from '../../store'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


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
                            <div id="single-project">
                                <div id="single-project-top">
                                    <div id="folder-logo">
                                        <Link to={`/projects/$You-Rock`}>
                                            <FontAwesomeIcon icon={faFolderOpen} className="single-proj-fa" />
                                        </Link>
                                    </div>
                                    <div id="social-media-logo">
                                        <a href='https://github.com/Grace-Shopper-We-Rock/We-Rock' target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="single-proj-smaller-fa" />
                                        </a>
                                        <a href='https://you-rock.herokuapp.com/' target="_blank">
                                            <FontAwesomeIcon icon={faExpandAlt} className="single-proj-smaller-fa" />
                                        </a>
                                    </div>
                                </div>
                                <div id="single-project-content">
                                    <h4>You-Rock</h4>
                                    <p>An e-commerce site selling emotional support pet rocks.</p>
                                </div>
                            </div>
                            <div id="single-project">
                                <div id="single-project-top">
                                    <div id="folder-logo">
                                        <Link to={`/projects/Form-Motion`}>
                                            <FontAwesomeIcon icon={faFolderOpen} className="single-proj-fa" />
                                        </Link>
                                    </div>
                                    <div id="social-media-logo">
                                        <a href='https://github.com/FormMotion/FormMotion' target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="single-proj-smaller-fa" />
                                        </a>
                                        <a href='http://www.form-motion.com/' target="_blank">
                                            <FontAwesomeIcon icon={faExpandAlt} className="single-proj-smaller-fa" />
                                        </a>
                                    </div>
                                </div>
                                <div id="single-project-content">
                                    <h4>Form-Motion</h4>
                                    <p>FormMotion is a web-based app that allows users to draw their own character and virtual world - and then play in it!</p>
                                </div>
                            </div>
                            <div id="single-project">
                                <div id="single-project-top">
                                    <div id="folder-logo">
                                        <Link to={`/projects/Columbia-Buy-Sell-Trade`}>
                                            <FontAwesomeIcon icon={faFolderOpen} className="single-proj-fa" />
                                        </Link>
                                    </div>
                                    <div id="social-media-logo">
                                        <a href='https://github.com/juliaxcr/columbia-buy-sell-trade' target="_blank">
                                            <FontAwesomeIcon icon={faGithub} className="single-proj-smaller-fa" />
                                        </a>
                                        {/* <a href={this.state.project.heroku} target="_blank">
                                            <FontAwesomeIcon icon={faExpandAlt} className="single-proj-smaller-fa" />
                                        </a> */}
                                    </div>
                                </div>
                                <div id="single-project-content">
                                    <h4>Columbia-Buy-Sell-Trade</h4>
                                    <p>A mobile marketplace app that allows Columbia students to buy, sell, and trade their personal belongings.</p>
                                </div>
                            </div>
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

