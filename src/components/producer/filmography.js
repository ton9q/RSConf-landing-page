import React, { Component, Fragment } from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export default class Filmography extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.filmography,
      lang: this.props.lang,
    }
  }

  render() {
    const { data, lang } = this.state

    return (
      <Fragment>
        {lang === 'rus' ? <h2>Фильмография</h2> : <h2>Filmography</h2>}

        <Timeline>
          {Object.keys(data).map(key => (
            <TimelineItem key={key} dateText={key} style={{ color: '#e86971' }}>
              {data[key].map(item => (
                <p>{item}</p>
              ))}
            </TimelineItem>
          ))}
        </Timeline>
      </Fragment>
    )
  }
}
