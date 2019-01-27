import React from 'react'
import { Card, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Person = ({ nickname, person, linkImage, linkButton, buttonName, size }) => (
  <Card style={{ width: `${size}rem`, margin: '1em' }}>
    <Card.Img
      style={{ width: `${size}rem`, height: `${size}rem` }}
      variant="top"
      src={linkImage}
    />
    <Card.Body>
      {nickname !== '' && <Card.Title>{nickname}</Card.Title>}
      <Card.Text style={{ height: '50px' }}>{person}</Card.Text>
      <Card.Link href={linkButton}>
        <Button variant="primary">{buttonName}</Button>
      </Card.Link>
    </Card.Body>
  </Card>
)

Person.defaultProps = {
  nickname: '',
  buttonName: 'gitHub',
  size: '12'
}

Person.propTypes = {
  nickname: PropTypes.string,
  person: PropTypes.string,
  linkImage: PropTypes.string,
  linkButton: PropTypes.string,
  buttonName: PropTypes.string,
  size: PropTypes.string,
}

export default Person
