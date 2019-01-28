import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import producerState from './producerState';

import Person from './person';

export default class PersonListHandler extends Component {
  state = producerState

  handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      localStorage.setItem('producerName', `${e.currentTarget.className}`);
    }
  }

  render() {
    const { producers, pictures } = this.state;

    return (
      <CardGroup>
        {producers.map((person, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <div
            role="button"
            tabIndex={0}
            className={person.person}
            key={`${person.person}`}
            onClick={this.handleClick}
          >
            <Person
              person={person.person}
              linkImage={pictures[index][0]}
              linkButton="/person"
              buttonName="more"
              size="15"
            />
          </div>
        ))}
      </CardGroup>
    );
  }
}
