import React, { Component } from 'react'
import { CardGroup } from 'react-bootstrap'

import producers from '../../data/producers-rus.json'

import Person from './person'

import pic0 from '../images/producers/0/0.jpg'
import pic1 from '../images/producers/1/0.jpg'
import pic2 from '../images/producers/2/0.jpg'
import pic3 from '../images/producers/3/0.jpg'
import pic4 from '../images/producers/4/0.jpg'
import pic5 from '../images/producers/5/0.jpg'

export default class PersonListHandler extends Component {
  state = {
    producers,
    pictures: [pic0, pic1, pic2, pic3, pic4, pic5],
  }

  handleClick = () => {}

  render() {
    const { producers, pictures } = this.state

    return (
      <CardGroup>
        {producers.map((person, index) => (
          <div key={`${index} - ${person}`} onClick={this.handleClick}>
            <Person
              person={person.person}
              linkImage={pictures[index]}
              linkButton="/person"
              buttonName="more"
            />
          </div>
        ))}
      </CardGroup>
    )
  }
}
