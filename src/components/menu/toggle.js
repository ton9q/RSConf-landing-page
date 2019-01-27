import React, { Component } from 'react'
import {
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
  Form,
} from 'react-bootstrap'

const Toggle = () => (
  <ButtonToolbar>
    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
      <ToggleButton value={1}>Rus</ToggleButton>
      <ToggleButton value={2}>Eng</ToggleButton>
    </ToggleButtonGroup>
  </ButtonToolbar>
)

export default Toggle
