import React from 'react'
import { store } from './Store'
import { Provider } from 'react-redux'

const ReduxProvider = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider