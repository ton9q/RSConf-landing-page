import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Photos extends Component {
  constructor({ photoLinks, person }) {
    super(photoLinks, person);

    this.state = {
      links: photoLinks,
      alt: person,
    };
  }

  render() {
    const { links, alt } = this.state;

    return (
      <Carousel
        style={{
          background: 'grey',
        }}
      >
        {links !== undefined
          && links.map(link => (
            <Carousel.Item>
              <img
                className="d-block w-25"
                src={link}
                alt={alt === null ? 'producer photo' : alt}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    );
  }
}

Photos.defaultProps = {
  photoLinks: '',
  person: '',
};

Photos.propTypes = {
  photoLinks: PropTypes.string,
  person: PropTypes.string,
};
