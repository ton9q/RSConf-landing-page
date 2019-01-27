import React, { Component, Fragment } from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export default class Filmography extends Component {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     data: this.props.filmography
  //   }
  // }

  render() {
    // const { data } = this.state.filmography
    const data = [
      ['дата 1', 'Самый лучший фильм №1'],
      ['дата 2', 'Самый лучший фильм №2'],
      ['дата 3', 'Самый лучший фильм №3'],
    ]

    return (
      <Fragment>
        <h2>Фильмография</h2>

        <Timeline>
          {data.map((part, index) => (
            <TimelineItem
              key={index}
              dateText={part[0]}
              style={{ color: '#e86971' }}
            >
              <p>{part[1]}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </Fragment>
    )
  }
}
