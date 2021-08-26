import React from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../store'
import { NavPage, SideBar, Footer } from './index'
import { SwapRightOutlined } from '@ant-design/icons'

const defaultState = {
    name: '',
    email: '',
    message: '',
    navbar: false,
    sections: [],
    touched: {
        email: false,
        password: false,
    },
}

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = defaultState
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.validateSubmission = this.validateSubmission.bind(this)
        this.shouldMarkError = this.shouldMarkError.bind(this)
        this.isDisabled = this.isDisabled.bind(this)
    }

    async handleSubmit(evt) {
        evt.preventDefault()
        await this.props.sendMessage(this.state)
        this.props.status.msg === 'success'
            ? alert('Message sent!')
            : 'Message failed to send. Please try again.'
    }

    handleClick() {
        const prevState = this.state.navbar
        this.setState({
            navbar: !prevState,
        })
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value,
        })
    }

    handleBlur(evt) {
        this.setState({
            touched: { ...this.state.touched, [evt.target.name]: true },
        })
    }

    validateSubmission() {
        return {
            name: this.state.name.length === 0,
            email: this.state.email.length === 0,
        }
    }

    shouldMarkError(field) {
        const errors = this.validateSubmission(
            this.state.email,
            this.state.password
        )
        return this.state.touched[field] && errors[field]
    }

    isDisabled() {
        const errors = this.validateSubmission()
        return Object.keys(errors).some((field) => errors[field])
    }

    render() {
        return (
            <div id='contact-outer-parent'>
                <div id='contact-parent'>
                    {this.state.navbar ? (
                        <NavPage handleClick={this.handleClick} />
                    ) : (
                        <div id='contact-outer-container'>
                            <div id='contact-prompt'>
                                <p>Get in touch</p>
                            </div>
                            <form
                                id='contact-form'
                                onSubmit={(evt) => this.handleSubmit(evt)}
                            >
                                <div id='personal-info'>
                                    <div className='form-field'>
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Name*'
                                            onChange={(evt) => this.handleChange(evt)}
                                            onBlur={(evt) => this.handleBlur(evt)}
                                            className={this.shouldMarkError('name') ? 'error' : ''}
                                        />
                                        {this.shouldMarkError('name') ? (
                                            <p className='error'>Invalid name</p>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                    <div className='form-field'>
                                        <input
                                            type='text'
                                            name='email'
                                            placeholder='Email*'
                                            onChange={(evt) => this.handleChange(evt)}
                                            onBlur={(evt) => this.handleBlur(evt)}
                                            className={this.shouldMarkError('email') ? 'error' : ''}
                                        />
                                        {this.shouldMarkError('email') ? (
                                            <p className='error'>Invalid email</p>
                                        ) : (
                                            ''
                                        )}
                                    </div>
                                </div>
                                <div className='form-field'>
                                    <textarea
                                        rows='5'
                                        name='message'
                                        placeholder='Message'
                                        onChange={(evt) => this.handleChange(evt)}
                                    ></textarea>
                                </div>
                                <div className='submit-button'>
                                    <button
                                        disabled={this.isDisabled()}
                                        type='submit'
                                        className={this.isDisabled() ? 'disabled' : 'enable-submit'}
                                    >
                                        Send
                                        <span id='arrow'>
                                            <SwapRightOutlined />
                                        </span>
                                    </button>
                                </div>
                            </form>
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

const mapState = (state) => ({
    status: state.contact,
})

const mapDispatch = (dispatch) => ({
    sendMessage: (message) => dispatch(sendMessage(message)),
})

export default connect(mapState, mapDispatch)(Contact)
