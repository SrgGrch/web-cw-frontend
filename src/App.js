import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import MainPage from "./MainPage";
import EventDetails from "./presentation/events/EventDetails";

const _App = () => {
    return (
        <div>
            {/*<Header />*/}
            <Route exact path="/:eventId/" component={EventDetails}/>
            <Route exact path="/" component={MainPage}/>
        </div>
    )
}

const App = withRouter(_App)

export {App}