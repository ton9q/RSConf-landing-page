import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Figure } from 'react-bootstrap'

import Biography from './biography'
import Filmography from './filmography'
import Photos from './photo/photos'
import Video from './video'
import Map from './map'

import pic from '../../images/producers/0/2.jpg'
import pic1 from '../../images/producers/0/1.jpg'

const dataFilmorgaphy = {
  'Режиссёр мультипликационных фильмов': [
    '1980 — «Сказка о весёлом клоуне»',
    '1982 — «Песнь о зубре»',
  ],
  Сценарист: [
    '1980 — «Нестерка»',
    '1982 — «Песнь о зубре»',
    '1985 — «Ковбойские игры»',
  ],
}

const dataBiography = [
  ['дата 1', 'текс 1'],
  ['дата 2', 'текс 2'],
  ['дата 3', 'текс 3'],
]

const lang = 'eng'
const mapCoordinates =
  'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d75241.51082857055!2d27.5830197!3d53.8909211!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1548525658390'

const Person = ({ person, src }) => (
  <Fragment>
    <h1>{person}</h1>

    <Figure>
      <Figure.Image width={400} height={500} alt={person} src={src} />
    </Figure>

    <Biography biography={dataBiography} lang={lang} />
    <Filmography filmography={dataFilmorgaphy} lang={lang} />
    <Photos photoLinks={[pic, pic1, pic1, pic1]} person="anton kuchma" />
    <Video videoLink="https://www.youtube.com/embed/hFgB5E0uL_Y" />
    <Map mapCoordinates={mapCoordinates} />
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
