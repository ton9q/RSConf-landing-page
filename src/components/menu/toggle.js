/* eslint-disable */
import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Trans } from 'react-i18next';

export default class Toggle extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1} onClick={() => this.props.onClick('ru')}>
            <Trans>Rus</Trans>
          </ToggleButton>
          <ToggleButton value={2} onClick={() => this.props.onClick('en')}>
            <Trans>Eng</Trans>
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}
