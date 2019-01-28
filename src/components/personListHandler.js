import React, { Component } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import producerState from '../utils/producerState';

import Person from './person';
import Search from './search';

export default class PersonListHandler extends Component {
  constructor(props) {
    super(props);

    this.inputTextHandler = this.inputTextHandler.bind(this);

    this.state = {
      resultSearch: '',
    };
  }

  static getFiltered(producers, filter) {
    if (filter.length === 0) {
      return producers;
    }

    const forfilter = filter.toLowerCase().trim();

    const producersFiltered = producers.filter((producer) => {
      const isNameMatch = producer.forSearch[0].toLowerCase().indexOf(forfilter) !== -1;
      const isCityMatch = producer.forSearch[1].toLowerCase().indexOf(forfilter) !== -1;
      const isBirthMatch = producer.forSearch[2].toLowerCase().indexOf(forfilter) !== -1;

      if (isNameMatch || isCityMatch || isBirthMatch) {
        return true;
      }

      return false;
    });

    return producersFiltered;
  }

  handleClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
      localStorage.setItem('producerName', `${e.currentTarget.className}`);
    }
  }

  inputTextHandler(text) {
    this.setState({
      resultSearch: text,
    });
  }

  render() {
    const { resultSearch } = this.state;

    const producers = PersonListHandler.getFiltered(producerState.producers, resultSearch);
    const persons = [];

    producerState.producers.map(producer => persons.push(producer.person));

    return (
      <CardGroup>
        <Search onChange={this.inputTextHandler} />
        {producers.map(person => (
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
              linkImage={producerState.pictures[persons.indexOf(person.person)][0]}
              linkButton="/person"
              buttonName={<Trans>More</Trans>}
              size="15"
            />
          </div>
        ))}
      </CardGroup>
    );
  }
}
