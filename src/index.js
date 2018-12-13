import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './reducers'

export const store = createStore(
        rootReducer,
)

export default ({ element }) => <Provider store={store}>{element}</Provider>
