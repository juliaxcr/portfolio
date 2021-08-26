import React from 'react'
import {
    LinkedinFilled,
    GithubFilled,
    FacebookFilled,
    InstagramFilled,
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export const Footer = (props) => {
    return (
        <div id='HomeContact' className='home-contact-container'>
            <div id='social' className={props.foreground ? 'foreground' : ''}>
                <a href='https://www.linkedin.com/in/juliacro/'>
                    <LinkedinFilled className='icon' />
                </a>
                <a href='https://github.com/juliaxcr'>
                    <GithubFilled className='icon' />
                </a>
                <a href='https://www.facebook.com/juliakrasilnikova11'>
                    <FacebookFilled className='icon' />
                </a>
                <a href='https://www.instagram.com/juliaxcr/'>
                    <InstagramFilled className='icon' />
                </a>
                <a href='mailto: juliacrooijmans@gmail.com'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                </a>
            </div>
        </div>
    )
}
