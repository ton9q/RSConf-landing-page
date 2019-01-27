import React, { Component, Fragment } from 'react'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

export default class Biography extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: this.props.biography,
      lang: this.props.lang
    }
  }

  render() {
    const { data, lang } = this.state

    return (
      <Fragment>
        {lang === 'rus' ? (<h2>Биография</h2>) : (<h2>Biography</h2>)}

        <Timeline lineColor={'#ddd'}>
          {data.map((part, index) => (
            <div>
              {index % 2 === 0 ? (
                <TimelineItem
                  key={index}
                  dateText={part[0]}
                  style={{ color: '#e86971' }}
                >
                  <p>{part[1]}</p>
                </TimelineItem>
              ) : (
                <TimelineItem
                  key="002"
                  dateText="04/2009 – 11/2010"
                  dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <p>{part[1]}</p>
                </TimelineItem>
              )}
            </div>
          ))}
        </Timeline>
      </Fragment>
    )
  }
}
