import React, { Component } from 'react';
import logo from './logo.svg';
import { withQuery, withDocumentByUid, Query } from 'react-prismic-hocs'
import { Predicates } from 'prismic-javascript'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import MainApp from './client/MainApp'

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
    </Switch>
  </main>
)
export default Routes

