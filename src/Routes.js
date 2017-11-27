import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { withQuery } from 'react-prismic-hocs'
import MainApp from './client/MainApp'
import TravelApp from './client/TravelApp'

import happy from './images/happy@2x.png'
import sad from './images/sad@2x.png'
import neutral from './images/neutral@2x.png'
import angry from './images/angry@2x.png'

class Routes extends Component {
  render() {
    const pages = this.props.prismic.results || []
    const meta = pages.filter((page) => page.type === 'meta')[0]
    const { feeling, message } = meta ? meta.rawJSON : {}
    return (
      <BrowserRouter>
        <App feeling={feeling} message={message} />
      </BrowserRouter>
    )
  }
}

const App = (props) => (
  <div>
    <Header {...props} />
    <Main />
  </div>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/travel' component={MainApp}/>
      <Route path='/travel/:uid' component={TravelApp} />
    </Switch>
  </main>
)

const Header = (props) => {
  console.log('props: ', props)
  const { feeling, message } = props
  const messageText = message ? message[0].text : ''
  return (
    <div className='header'>
      <img src={getEmoticon(feeling)} />
      <div className='headerMessage'>
        {messageText}
      </div>
    </div>
  )
}

const getEmoticon = (feeling) => {
  switch(feeling) {
    case 'angry':
      return angry
    case 'sad':
      return sad
    case 'happy':
      return happy 
    case 'neutral':
      return neutral
  }
}

export default withQuery({
  url: 'https://franny-test.prismic.io/api/v2',
  query: ''
})(Routes)