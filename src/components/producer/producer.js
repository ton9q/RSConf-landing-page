import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Figure } from 'react-bootstrap'

import Biography from './biography'
import Filmography from './filmography'
import Photos from './photos'
import Video from './video'
import Map from './map'
import producerState from "../producerState";

const currentProducer = producerState.producers.find((producer) => producer.person === localStorage.getItem('producerName'));
const currentProducerIndex = producerState.producers.findIndex((producer) => producer.person === localStorage.getItem('producerName'));

const dataFilmorgaphy = currentProducer.filmography;
const dataBiography = currentProducer.biography;
const lang = 'eng'
const mapCoordinates = currentProducer.markOnMap;
const photo = producerState.pictures[currentProducerIndex][0];
const allPhotos = producerState.pictures[currentProducerIndex];
const video = currentProducer.videoLinks;

const Person = ({ person }) => (
  <Fragment>
    <h1>{person}</h1>

    <Figure>
      <Figure.Image width={400} height={500} alt={person} src={photo} />
    </Figure>

    <Biography biography={dataBiography} lang={lang} />
    <Filmography filmography={dataFilmorgaphy} lang={lang} />
    <Photos photoLinks={allPhotos} person={person} />
    <Video videoLink={video} />
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
