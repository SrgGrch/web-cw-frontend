import React from 'react'
import ReactDOM from 'react-dom'
import {App} from './App'
import {createBrowserHistory, createMemoryHistory} from 'history'
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from "react-redux";
import {createStore} from "redux";
import { rootReducer } from './common/RootReducer'

const history =
    typeof document !== 'undefined'
        ? createBrowserHistory()
        : createMemoryHistory()

const store = createStore(rootReducer(history), {})

const element = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>
)

ReactDOM.render(element, document.getElementById('root'))