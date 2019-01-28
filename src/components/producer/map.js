import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Map extends Component {
  constructor({ mapCoordinates }) {
    super(mapCoordinates);

    this.state = {
      coordinates: mapCoordinates,
    };
  }

  render() {
    const { coordinates } = this.state;

    return (
      <div
        style={{
          width: '800px',
          margin: '30px auto',
        }}
      >
        <iframe
          title="001"
          src={coordinates}
          style={{
            width: '800px',
            height: '450px',
            frameborder: '0',
            border: '0',
          }}
          allowFullScreen
        />
      </div>
    );
  }
}

Map.defaultProps = {
  mapCoordinates: '',
};

Map.propTypes = {
  mapCoordinates: PropTypes.string,
};
