import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import { ScrollToTop, App } from './components'
render(
    <Provider store={store}>
        <Router>
            <ScrollToTop>
                <App />
            </ScrollToTop>
        </Router>
    </Provider>,
    document.getElementById('app')
)
