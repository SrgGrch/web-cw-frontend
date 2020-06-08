import React from 'react'
import {withRouter, Route} from 'react-router-dom'
import EventList from "./EventList";

const _App = () => {
    return (
        <div>
            {/*<Header />*/}
            <Route exact path="/events" component={EventList}/>
            <Route exact path="/" component={EventList}/>
        </div>
    )
}

const App = withRouter(_App)

export {App}