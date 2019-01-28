/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

import ModalVideo from 'react-modal-video';
import './modal-video.min.css';

export default class Video extends Component {
  constructor({ videoLink }) {
    super(videoLink);

    this.state = {
      video: videoLink,
      isOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.openModal();
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    const { video } = this.state;
    const videoId = video.slice(video.lastIndexOf('/') + 1, video.length);

    return video === '' ? (
      <h2
        style={{
          textAlign: 'center',
          margin: '150px auto',
        }}
      >
        <Trans>HaventVideoMessage</Trans>
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
            allowFullScreen
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
            role="button"
            tabIndex={0}
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
          // eslint-disable-next-line react/destructuring-assignment
          isOpen={this.state.isOpen}
          videoId={videoId}
          onClose={() => this.setState({ isOpen: false })}
        />
      </Fragment>
    );
  }
}

Video.defaultProps = {
  videoLink: '',
};

Video.propTypes = {
  videoLink: PropTypes.string,
};
