import React, { Component, Fragment } from 'react'
import { Button, FormControl, Form } from 'react-bootstrap'

export default class PersonListHandler extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.searchProducer = this.searchProducer.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    })
  }

  searchProducer(value) {
    // change main page on the meaning 'value'
    console.log('value for search: ' + value)
  }

  render() {
    return (
      <Fragment>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={this.handleChange}
        />
        <Button
          variant="outline-info"
          onClick={() => this.searchProducer(this.state.value)}
        >
          Search
        </Button>
      </Fragment>
    )
  }
}
