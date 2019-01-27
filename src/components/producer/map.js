import React, { Component } from 'react'

export default class Map extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     coordinates: this.props.mapCoordinates,
  //   }
  // }

  render() {
    // const { coordinates } = this.state
    const coordinates =
      'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d75241.51082857055!2d27.5830197!3d53.8909211!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1548525658390'

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
