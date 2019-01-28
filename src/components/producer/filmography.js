import React, { Component, Fragment } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import PropTypes from 'prop-types';
import { Trans } from 'react-i18next';

export default class Filmography extends Component {
  constructor({ filmography }) {
    super(filmography);

    this.state = {
      data: filmography,
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <h2>
          <Trans>Filmography</Trans>
        </h2>

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
};

Filmography.propTypes = {
  filmography: PropTypes.string,
};
