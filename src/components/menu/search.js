/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { Trans } from 'react-i18next';

export default class PersonListHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.searchProducer = this.searchProducer.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  searchProducer(value) {
    // change main page on the meaning 'value'
    //console.log(`value for search: ${value}`);
  }

  render() {
    return (
      <Fragment>
        <FormControl
          type="text"
          // placeholder= {<Trans>Search</Trans>}
          className="mr-sm-2"
          onChange={this.handleChange}
        />
        <Button variant="outline-info" onClick={() => this.searchProducer(this.state.value)}>
          <Trans>Search</Trans>
        </Button>
      </Fragment>
    );
  }
}
