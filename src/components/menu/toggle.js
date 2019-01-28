import React from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import { Trans } from 'react-i18next';

const Toggle = () => (
  <ButtonToolbar>
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
      <ToggleButton value={1}><Trans>Rus</Trans></ToggleButton>
      <ToggleButton value={2}><Trans>Eng</Trans></ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
);

export default Toggle;
