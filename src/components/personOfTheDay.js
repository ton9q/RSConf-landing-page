import React, { Component, Fragment } from 'react'

import producerState from './producerState'

import Person from '../components/person'

export default class PersonOfTheDay extends Component {
  state = producerState

  handleClick = e => {
    if (e.target.tagName === 'BUTTON') {
      localStorage.setItem('producerName', `${e.currentTarget.className}`)
    }
  }

  render() {
    const { producers, pictures, lang } = this.state
    const index = Math.floor(Math.random() * producers.length)

    const styleHeader = {
      textAlign: 'center',
      paddingTop: '15px',
      color: 'rgb(92, 0, 153)',
    }
    const styleFragment = {
      border: '2px solid rgb(92, 0, 153)',
      borderRadius: '5%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(214, 153, 255, 0.2)',
    }

    return (
      <div style={styleFragment}>
        {lang === 'rus' ? (
          <h2 style={styleHeader}>Продюсер дня</h2>
        ) : (
          <h2 style={styleHeader}>Producer of the day</h2>
        )}
        <div
          className={producers[index].person}
          key={`${index} - ${producers[index].person}`}
          onClick={this.handleClick}
        >
          <Person
            person={producers[index].person}
            linkImage={pictures[index][0]}
            linkButton="/person"
            buttonName="more"
            size="15"
          />
        </div>
      </div>
    )
  }
}
