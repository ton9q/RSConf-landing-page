import React, { Component } from 'react'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      coordinates: this.props.mapCoordinates,
    }
  }

  render() {
    const { coordinates } = this.state

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
          allowfullscreen
        />
      </div>
    )
  }
}
