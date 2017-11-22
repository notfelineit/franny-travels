import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment'

class PageList extends Component {
  render() {
   const { pages } = this.props
   return <ul>{pages.map((page) => PageLink(page))}</ul>
  }
}

const PageLink = (props) => {
  const { lastPublicationDate, rawJSON, slug } = props
  const title = rawJSON['travel-title']
  const { text } = title[0]
  return (
    <li key={slug}>
      <Link to={`travel/${slug}`}> {text} </Link>
      <div> {moment(lastPublicationDate).format('MMMM Do YYYY [at] h:mm:ss a')} </div>
    </li>
  )
}

PageList.defaultProps = {
  pages: []
};

export default PageList