import React, { Component } from 'react';
import css from './TravelPage.css'
import top from '../images/top.svg'
import bottom from '../images/bottom.svg'
import rating from '../images/rating.png'
import arrow from '../images/arrow.png'
import ReactSVG from 'react-svg';
import moment from 'moment'
import { Link } from 'react-router-dom'

console.log('css: ', css)

class TravelPage extends Component {
  render() {
    const { data, pageList } = this.props 
    const {
      lastPublicationDate,
      rawJSON,
      slug,
      uid
    } = data 
    const { type: pType, text: pText } = rawJSON['travel-content'][0]
    const { type: titleType, text: titleText } = rawJSON['travel-title'][0]
    const { url: imageURL, dimensions } = rawJSON['travel-image']
    const date = rawJSON['travel-time']
    const smudgeTopColor = rawJSON['travel-color-1']
    const smudgeBottomColor = rawJSON['travel-color-2']
    const ratingNumber = rawJSON['travel-rating']

    const ratings = [...Array(ratingNumber).keys()].map((num) => {
      return <img key={`${num}_rating`} src={rating} className='rating' />
    })
    return (
      <div>
        <ReactSVG
          path={top}
          callback={svg => console.log(svg)}
          className='smudge top'
          style={{fill: smudgeTopColor}}
        />
        <ReactSVG
          path={bottom}
          callback={svg => console.log(svg)}
          className='smudge bottom'
          style={{fill: smudgeBottomColor}}
        />
        <div className='contentWrapper'>
          <img className='travelPhoto' src={imageURL} style={scale(dimensions)} />
          <div className='travelContent'>
            <h1 className={`title-${titleType}`}>{titleText}</h1>
            <h4 className='travelDate'>{moment(date).format('MMMM Do YYYY')}</h4>
            <p className={`p-${pType}`}>{pText}</p>
            <div className='ratingContainer'>{ratings}</div>
          </div>
        </div>
        <a href={`./${chooseNextPage(pageList,uid)}`}>
          <img className='link' src={arrow} />
        </a>
      </div>
    )
  }
}

const scale = (dim) => {
  console.log('Original dimensions: ', dim)
  const ratio = dim.height/500
  console.log('Ratio: ', ratio)
  return {
    width: dim.width/ratio,
    height: dim.height/ratio
  }
}

const chooseNextPage = (list, curr) => {
  const currIndex = list.indexOf(curr)
  const nextPage = currIndex === list.length - 1 ? list[0] : list[currIndex + 1]
  return nextPage
}
export default TravelPage