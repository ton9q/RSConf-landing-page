import React, { Component } from 'react';
import { Trans } from 'react-i18next';

import producerState from '../utils/producerState';

import Person from './person';

export default class PersonOfTheDay extends Component {
  state = producerState

  handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      localStorage.setItem('producerName', `${e.currentTarget.className}`);
    }
  }

  render() {
    const { producers, pictures, producerOfTheDay } = this.state;
    const index = producerOfTheDay;

    const styleHeader = {
      textAlign: 'center',
      paddingTop: '15px',
      color: 'rgb(92, 0, 153)',
    };
    const styleFragment = {
      border: '2px solid rgb(92, 0, 153)',
      borderRadius: '5%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'rgba(214, 153, 255, 0.2)',
    };

    return (
      <div style={styleFragment}>
        <h2 style={styleHeader}>
          <Trans>ProducerOfTheDay</Trans>
        </h2>
        {/* eslint-disable-next-line */}
        <div
          className={producers[index].person}
          key={`${producers[index].person}`}
          onClick={this.handleClick}
        >
          <Person
            person={producers[index].person}
            linkImage={pictures[index][0]}
            linkButton="/person"
            buttonName={<Trans>More</Trans>}
            size="15"
          />
        </div>
      </div>
    );
  }
}
