import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainApp from './client/MainApp'
import TravelApp from './client/TravelApp'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
  }
}

const App = () => (
  <div>
    <Main />
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={MainApp}/>
      <Route path='/travel/:slug' component={TravelApp} />
    </Switch>
  </main>
)
export default Routes

