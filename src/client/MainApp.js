import React, { Component } from 'react';
import { withQuery } from 'react-prismic-hocs'
import PageList from '../components/PageList'
import { Predicates } from 'prismic-javascript'

class MainApp extends Component {
  render() {
    const pages = this.props.prismic.results || []
    const travelPages = pages.filter((page) => {
      return page.type === 'blog-post'
    })
    const meta = pages.filter((page) => page.type === 'meta')[0]
    return (
      <div className="MainApp">
        <PageList pages={travelPages} />
      </div>
    );
  }
}

export default withQuery({
  url: 'https://franny-test.prismic.io/api/v2',
  query: ''
})(MainApp)

