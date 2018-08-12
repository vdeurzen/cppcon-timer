import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from './layout'
import Timer from './scenes/Timer'
import Config from './scenes/Config'

const App = () => (
    <React.Fragment>
        <CssBaseline />
        <Layout>
            <Switch>
                <Route exact path="/" component={Timer} />
                <Route path="/config" component={Config} />
            </Switch>
        </Layout>
    </React.Fragment>
)

export default App;
