import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Figure } from 'react-bootstrap'

import Biography from './biography'
import Filmography from './filmography'
import Photos from './photo/photos'
import Video from './video'
import Map from './map'

const Person = ({ person, src }) => (
  <Fragment>
    <h1>{person}</h1>

    <Figure>
      <Figure.Image width={400} height={500} alt={person} src={src} />
      {/* <Figure.Caption>
      {person}
      </Figure.Caption> */}
    </Figure>

    <Biography />
    <Filmography />
    <Photos />
    <Video />
    <Map />
  </Fragment>
)

Person.defaultProps = {
  person: 'Albert Einstein',
  src: 'https://duckduckgo.com/i/45956a7f.jpg',
}

Person.propTypes = {
  person: PropTypes.string,
  src: PropTypes.string,
}

export default Person
