import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircle,
    faGripLines,
    faTimes,
} from '@fortawesome/free-solid-svg-icons'

export default class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            navbar: false,
            sections: {},
        }
        this.changeSection = this.changeSection.bind(this)
        this.selectSection = this.selectSection.bind(this)
    }
    //function to select a section in page
    selectSection(idx) {
        const selections = {}
        this.props.sections.forEach((section, i) => {
            if (i === idx) {
                selections[section] = true
            } else {
                selections[section] = false
            }
        })
        return selections
    }

    componentDidMount() {
        //on mount display the first section
        this.setState = {
            sections: this.selectSection(0),
        }
    }

    changeSection(idx) {
        const newSelections = selectSection(idx)
        this.setState({
            sections: newSelections,
        })
    }

    render() {
        const { navbar, sections, handleClick } = this.props
        return (
            <div className='sidebar-container'>
                <div id='home-side-nav'>
                    <div id='menu-icon'>
                        {navbar ? (
                            <FontAwesomeIcon
                                icon={faTimes}
                                className='faMenu'
                                onClick={() => handleClick()}
                            />
                        ) : (
                            <FontAwesomeIcon
                                icon={faGripLines}
                                className='faMenu'
                                onClick={() => handleClick()}
                            />
                        )}
                    </div>
                    <div id='section-icon'>
                        {sections.map((section, idx) => (
                            <div>
                                <Link
                                    activeClass='selected'
                                    to={section}
                                    spy={true}
                                    smooth={true}
                                >
                                    <FontAwesomeIcon
                                        icon={faCircle}
                                        className='faCircle'
                                        onClick={() => this.changeSection(idx)}
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
