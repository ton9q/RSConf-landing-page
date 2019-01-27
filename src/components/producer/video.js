import React, { Component } from 'react'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      video: this.props.videoLink,
    }
  }

  render() {
    const { video } = this.state

    return (
      <div
        style={{
          width: '560px',
          margin: '30px auto',
        }}
      >
        <iframe
          src={video}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="002"
          style={{
            width: '560px',
            height: '315px',
            frameborder: '0',
          }}
        />
      </div>
    )
  }
}
