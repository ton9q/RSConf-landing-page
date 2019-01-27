import React from 'react'
import PropTypes from 'prop-types'

import { Carousel } from 'react-bootstrap'

const Photo = ({ linkPhoto, altPhoto }) => (
  <Carousel.Item>
    <img className="d-block w-100" src={linkPhoto} alt={altPhoto} />
    {/* <Carousel.Caption>
      <h3>Название фото</h3>
      <p>Фото</p>
    </Carousel.Caption> */}
  </Carousel.Item>
)

Photo.defaultProps = {
  altPhoto: 'producer photo',
}

Photo.propTypes = {
  linkPhoto: PropTypes.string,
  altPhoto: PropTypes.string,
}

export default Photo
