import React, { Component } from 'react'
import producers from "../../data/producers-rus.json"
import PersonDescription from './personDescription.js';
import pic0 from '../../data for project/Белоусов Олег Павлович/0.jpg'
import pic1 from '../../data for project/Гинцбург Александр Ильич/0.jpg'
import pic2 from '../../data for project/Голуб Лев Владимирович/0.jpg'
import pic3 from '../../data for project/Пташук Михаил Николаевич/0.jpg'
import pic4 from '../../data for project/Тарич Юрий Викторович/0.jpg'
import pic5 from '../../data for project/Туров Виктор Тимофеевич/1.jpg'

export default class PersonListHandler extends Component {
    state = {
        producers,
        pictures: [pic0, pic1, pic2, pic3, pic4, pic5]
    }

handleClick = () => {

}

  render() {
      const { producers, pictures } = this.state;

    return (
        producers.map((person, index) => (
            <div key={`${index} - ${person}`} onClick={this.handleClick}>
                <PersonDescription title={person.person} description={person.forSearch} src={pictures[index]} />
            </div> 
        ))
        
    )
  }
}
