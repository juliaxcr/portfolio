import React from 'react'
import { SideBar, Footer, NavPage } from '../index'
import { connect } from 'react-redux'
import { fetchProject } from '../../store'
import Loader from 'react-loader-spinner'
import { OverviewImgPlx } from './Plx/OverviewImgPlx'
import { TechPlx } from './Plx/TechPlx'
import { StackPlx } from './Plx/StackPlx'

const defaultState = {
    navbar: false,
    sections: [],
    // sections: ['overview', 'technologies']
}

class ProjectDetail extends React.Component {
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

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectName)
    }

    render() {
        if (this.props.loading)
            return <Loader type='ThreeDots' color='Salmon' height={50} width={50} />
        const { name, date, longContent, imgOverview, imgTech, tech } =
            this.props.project
        return (
            <div id='project-detail-outer-container'>
                {this.state.navbar ? (
                    <NavPage />
                ) : (
                    <div id='project-detail-container'>
                        <div id='project-detail-intro'>
                            <h2 id='project-detail-intro-left'>{name.toUpperCase()}</h2>
                            <h2 id='project-detail-intro-right'>{date}</h2>
                        </div>
                        <h3>Overview</h3>
                        <div id='project-detail-overview' className='overview-start'>
                            <h6>{longContent}</h6>
                            <OverviewImgPlx name={name} img={imgOverview} />
                        </div>
                        <div id='project-detail-tech' className='tech-start'>
                            <StackPlx tech={tech} />
                            <TechPlx img={imgTech} />
                        </div>
                        <div style={{ height: '6rem' }}></div>
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

const mapState = (state) => ({
    project: state.project.project,
    loading: state.project.loading,
})

const mapDispatch = (dispatch) => ({
    fetchProject: (projectName) => dispatch(fetchProject(projectName)),
})

export default connect(mapState, mapDispatch)(ProjectDetail)
