/* eslint-disable prefer-destructuring */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable */

import React, { Component, Fragment } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Trans } from 'react-i18next';

import i18n from 'i18next';

import producerState from '../utils/producerState';

import Person from './person';
import Search from './search';
import Toggle from './menu/toggle';

import engProducers from '../../data/producers-eng.json';
import ruProducers from '../../data/producers-rus.json';

export default class PersonListHandler extends Component {
  constructor(props) {
    super(props);

    this.inputTextHandler = this.inputTextHandler.bind(this);

    this.state = {
      resultSearch: '',
      producers: producerState.producers,
      lang: producerState.lang,
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
    let producers;
    i18n.changeLanguage(this.state.lang);
    if (this.state.lang === 'en') {
      producers = this.state.producers;
    } else {
      producers = this.state.producers;
    }

    const { resultSearch } = this.state;

    const producersFiltred = PersonListHandler.getFiltered(producers, resultSearch);
    const persons = [];

    producers.map(producer => persons.push(producer.person));

    return (
      <Fragment>
        <Toggle
          onClick={(i) => {
            if (i === 'en') {
              this.state.producers = engProducers;
              localStorage.setItem('producers', JSON.stringify(engProducers));
              this.state.lang = i;
              this.forceUpdate();
            } else if (i === 'ru') {
              this.state.producers = ruProducers;
              localStorage.setItem('producers', ruProducers);
              // producerState.producers = ruProducers;
              this.state.lang = i;
              this.forceUpdate();
            }
          }}
        />
        <CardGroup>
          <Search onChange={this.inputTextHandler} />
          {producersFiltred.map(person => (
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
      </Fragment>
    );
  }
}
