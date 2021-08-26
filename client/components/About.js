import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons'
import { NavPage, Footer } from './index'
import { SideBar } from './SideBar'

//declare and populate initial state
const defaultState = {
    navbar: false,
    black: false,
    sections: ['about-intro', 'past-present', 'skills'],
}

export default class About extends React.Component {
    constructor() {
        super()
        this.state = defaultState
        this.handleClick = this.handleClick.bind(this)
        this.listenScrollEvent = this.listenScrollEvent.bind(this)
    }

    handleClick() {
        const prevState = this.state.navbar
        this.setState({
            navbar: !prevState,
        })
    }

    listenScrollEvent(evt) {
        if (window.scrollY > 1500) {
            this.setState({ black: true })
        } else {
            this.setState({ black: false })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    componentWillMount() {
        window.removeEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        return (
            <div id='about-outer-container'>
                <div id='about-container'>
                    {this.state.navbar ? (
                        <NavPage handleClick={this.handleClick} />
                    ) : (
                        <div id='about-main'>
                            <div id='about-intro'>
                                <img src='/images/about/me.png'></img>
                                <h3 id='firstname'>Julia</h3>
                                <h3 id='lastname'>Crooijmans</h3>
                                <div id='intro-box'>
                                    <p className='bold'>Hi, I'm Julia!</p>
                                    {/* <p>
                                        {' '}
                                        A software engineer based in NYC
                                    </p> */}
                                    {/* <p>
										{' '}
										I am passionate about building software and creating
										experiences that not only look great, but are also
										accessible and add real value.
									</p> */}
                                </div>
                            </div>
                            <div id='past-present'>
                                <p>
                                    {' '}
                                    I was introduced to computer science in college through a
                                    data science course taught in Python. Through that course, I
                                    discovered my passion for programming. Enrolling in The Grace
                                    Hopper Program at FullStack, an intensive software engineering
                                    bootcamp, was my next step in my journey towards a career in
                                    tech.
                                </p>
                                <p>
                                    {' '}
                                    I will be graduating from Barnard College, Columbia University
                                    with a BA in Economics and Statistics and starting my career
                                    as a software engineer in May 2022.
                                </p>
                                <p>
                                    {' '}
                                    I am passionate about full-stack development and am
                                    excited by new machine learning and artificial intelligence
                                    technologies.{' '}
                                </p>
                                <p>
                                    Apart from work, you can find me cooking world cuisines,
                                    running half marathons, and reading Russian literature!{' '}
                                </p>
                            </div>
                            <div id='skills' className={'skills'}>
                                <h3> Skills: </h3>
                                <div id='skills-list'>
                                    <ul id='ul-left'>
                                        <li>
                                            <CaretRightOutlined />
                                            Javascript
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Python
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Java
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            React
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Redux
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Node.js{' '}
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Express.js
                                        </li>
                                        {/* <li>
											<CaretRightOutlined />
											Passport.js
										</li> */}
                                        <li>
                                            <CaretRightOutlined />
                                            Sequelize
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            PostgreSQL
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            SQL
                                        </li>
                                    </ul>
                                    <ul id='ul-right'>
                                        <li>
                                            <CaretRightOutlined />
                                            HTML
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            CSS
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Github
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Git
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Mocha
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Jasmine
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Chai
                                        </li>
                                        <li>
                                            <CaretRightOutlined />
                                            Heroku
                                        </li>
                                        {/* <li>
											<CaretRightOutlined />
											Travis
										</li> */}
                                        <li>
                                            <CaretRightOutlined />
                                            Phaser
                                        </li>
                                    </ul>
                                </div>
                            </div>
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
