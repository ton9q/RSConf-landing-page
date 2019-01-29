import React, { Component, Fragment } from 'react';
import { FormControl } from 'react-bootstrap';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // eslint-disable-next-line react/prop-types
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    return (
      <Fragment>
        <FormControl
          type="text"
          className="mr-sm-2"
          style={{ margin: '30px 0' }}
          onChange={this.handleChange}
        />
      </Fragment>
    );
  }
}
