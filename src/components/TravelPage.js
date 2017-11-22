import React, { Component } from 'react';

class TravelPage extends Component {
  render() {
    const { data } = this.props 
    console.log(data)
    const {
      lastPublicationDate,
      rawJSON,
      slug
    } = data 
    const { type: pType, text: pText } = rawJSON['travel-content'][0]
    const { type: titleType, text: titleText } = rawJSON['travel-title'][0]
    const { url: imageURL, dimensions } = rawJSON['travel-image']
    return (
      <div>
        <h1 className={`title-${titleType}`}>{titleText}</h1>
        <img src={imageURL} style={dimensions} />
        <p className={`p-${pType}`}>{pText}</p>
      </div>
    )
  }
}

export default TravelPage