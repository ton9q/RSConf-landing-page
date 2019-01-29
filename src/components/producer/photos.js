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
    const size = 400;

    return (
      <Carousel
        style={{
          background: 'grey',
          maxWidth: `${size}px`,
          margin: 'auto',
        }}
      >
        {links !== undefined
          && links.map(link => (
            <Carousel.Item
              style={{
                maxHeight: `${size}px`,
              }}
            >
              <img
                width={size}
                height={size}
                className="d-block"
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
