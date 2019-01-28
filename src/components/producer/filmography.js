import React, { Component, Fragment } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import PropTypes from 'prop-types';

export default class Filmography extends Component {
  constructor({ filmography, lang }) {
    super(filmography, lang);

    this.state = {
      data: filmography,
      lang,
    };
  }

  render() {
    const { data, lang } = this.state;

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
    );
  }
}

Filmography.defaultProps = {
  filmography: '',
  lang: '',
};

Filmography.propTypes = {
  filmography: PropTypes.string,
  lang: PropTypes.string,
};
