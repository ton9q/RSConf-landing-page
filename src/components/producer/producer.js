import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Figure } from 'react-bootstrap'

const Person = ({ person, src }) => (
  <Fragment>
    <Figure>
      <Figure.Image
        width={400}
        height={500}
        alt={person}
        src={src}
      />
      <Figure.Caption>
      {person}
      </Figure.Caption>
    </Figure>
    {/* here comes the other parts */}
  </Fragment>
)

Person.defaultProps = {
  person: 'Albert Einstein',
  src: 'https://duckduckgo.com/i/45956a7f.jpg',
}

Person.propTypes = {
  person: PropTypes.string,
  src: PropTypes.string,
}

export default Person
