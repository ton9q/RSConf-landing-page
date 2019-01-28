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
    const video = this.state.video
    const videoId = video.slice(video.lastIndexOf('/') + 1, video.length)

    console.log(video, videoId)
    return video === '' ? (
      <h2
        style={{
          textAlign: 'center',
          margin: '150px auto',
        }}
      >
        Sorry, but we dont have a video
      </h2>
    ) : (
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
