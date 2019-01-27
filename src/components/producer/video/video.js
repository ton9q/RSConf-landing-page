import React, { Component, Fragment } from 'react'

import ModalVideo from 'react-modal-video'
import './modal-video.min.css'

export default class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      video: this.props.videoLink,
      isOpen: false,
    }

    this.openModal = this.openModal.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  onClick(e) {
    e.preventDefault()
    this.openModal()
  }

  render() {
    // const videoId = this.state.video.split('=')[1]
    // const video = this.state.video

    const videoId = 'hFgB5E0uL_Y'
    const video = 'https://www.youtube.com/embed/hFgB5E0uL_Y'

    return (
      <Fragment>
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
              position: 'relative',
              top: '175px',
              width: '560px',
              height: '315px',
              frameborder: '0',
            }}
          />

          {/* transparent block for video click */}
          <div
            onClick={this.onClick}
            style={{
              position: 'relative',
              width: '560px',
              height: '315px',
              top: '-175px',
              opacity: '0',
              cursor: 'pointer',
            }}
          />
        </div>

        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
      </Fragment>
    )
  }
}
