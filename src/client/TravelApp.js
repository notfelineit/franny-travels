import React, { Component } from 'react';
import { DocumentByUid  } from 'react-prismic-hocs'
import { Predicates } from 'prismic-javascript'
import TravelPage from '../components/TravelPage'

class TravelApp extends Component {
  render() {
    const { match: { params: { slug } } } = this.props
    const url = 'https://franny-test.prismic.io/api/v2'
    const uid = slug
    const type = 'blog-post'
    return (
      <DocumentByUid
        url={url}
        uid={slug}
        type={type}
      >
        {(res) => res.prismic && <TravelPage data={res.prismic} />}
      </DocumentByUid>
    )
  }
}

export default TravelApp


