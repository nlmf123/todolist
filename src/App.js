import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Todolist from './components/Todolist'

const App = () => {
    return (
        <div className="app-main">
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/todolist" component={Todolist} />
                <Route path="/" component={Home} />
            </Switch>
        </div>
    )
}

export default App