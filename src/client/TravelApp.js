import React, { Component } from 'react';
import { DocumentByUid, withQuery } from 'react-prismic-hocs'
import { Predicates } from 'prismic-javascript'
import TravelPage from '../components/TravelPage'

class TravelApp extends Component {
  render() {
    const { match: { params: { uid } } } = this.props
    const url = 'https://franny-test.prismic.io/api/v2'
    const type = 'blog-post'
    const pages = this.props.prismic.results || []
    const uids = pages.filter((page) => page.type === 'blog-post').map((page) => page.uid)
    return (
      <DocumentByUid
        url={url}
        uid={uid}
        type={type}
      >
        {(res) => res.prismic && <TravelPage data={res.prismic} pageList={uids} />}
      </DocumentByUid>
    )
  }
}


export default withQuery({
  url: 'https://franny-test.prismic.io/api/v2',
  query: ''
})(TravelApp)


