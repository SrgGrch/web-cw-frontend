import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import MainPage from "./MainPage";

const _App = () => {
    return (
        <div>
            {/*<Header />*/}
            <Route exact path="/event/" component={MainPage}/>
            <Route exact path="/" component={MainPage}/>
        </div>
    )
}

const App = withRouter(_App)

export {App}