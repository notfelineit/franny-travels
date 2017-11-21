import React, { Component } from 'react';
import { withQuery, withDocumentByUid, Query } from 'react-prismic-hocs'
import { Predicates } from 'prismic-javascript'
import PageList from '../components/PageList'

class MainApp extends Component {
  render() {
    const pages = this.props.prismic.results
    return (
      <div className="MainApp">
        <PageList pages={pages} />
      </div>
    );
  }
}

export default withQuery({
  url: 'https://franny-test.prismic.io/api/v2',
  query: ""
})(MainApp)

