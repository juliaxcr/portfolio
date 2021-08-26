import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import Home from './Home/Home'
import { Routes } from './index'

export const App = () => {
    return (
        <div id='app-container'>
            <Routes />
        </div>
    )
}
