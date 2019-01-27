import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

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
          background: 'grey',
        }}
      >
        {links !== undefined &&
          links.map((link, index) => (
            <Carousel.Item>
              <img className="d-block w-25" src={link} alt={ alt === null ? ('producer photo') : (alt)} />
            </Carousel.Item>
          ))}
      </Carousel>
    )
  }
}
