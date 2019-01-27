import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

import Photo from './photo'

export default class Photos extends Component {
  constructor(props) {
    super(props)

    this.state = {
      links: this.props.photoLinks,
      alt: this.props.person,
    }
  }

  render() {
    const { links, alt } = this.state

    return (
      <Carousel
        style={{
          width: '1000px',
          height: '400px',
          background: 'grey',
        }}
      >
        {links !== undefined &&
          links.map(link => <Photo linkPhoto={link} altPhoto={alt} />)}
      </Carousel>
    )
  }
}
