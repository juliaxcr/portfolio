import React from 'react'
import { Link } from 'react-router-dom'
import { fetchAllProjects } from '../../store'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen, faExpandAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


class SingleProject extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllProjects()
    }

    render() {
        if (this.props.projectsLoading) return <div id="spinner"><Loader type="TailSpin" color="#294c60" height={50} width={50} /></div>
        const project = this.props.projects.filter(project => (
            project.name === this.props.projectName
        ))[0]
        return (
            <div id="single-project">
                <div id="single-project-top">
                    <div id="folder-logo">
                        <Link to={`/projects/${project.name}`}>
                            <FontAwesomeIcon icon={faFolderOpen} className="single-proj-fa" />
                        </Link>
                    </div>
                    <div id="social-media-logo">
                        <a href={project.github} target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="single-proj-smaller-fa" />
                        </a>
                        <a href={project.heroku} target="_blank">
                            <FontAwesomeIcon icon={faExpandAlt} className="single-proj-smaller-fa" />
                        </a>
                    </div>
                </div>
                <div id="single-project-content">
                    <h4>{project.name}</h4>
                    <p>{project.shortContent}</p>
                </div>
            </div>
        )
    }

}

const mapState = state => ({
    projects: state.project.projects,
    projectsLoading: state.project.projectsLoading
})

const mapDispatch = dispatch => ({
    fetchAllProjects: () => dispatch(fetchAllProjects())
})

export default connect(mapState, mapDispatch)(SingleProject)