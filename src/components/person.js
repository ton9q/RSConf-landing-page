import React from 'react'
import { Link } from 'gatsby'
import { Card, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Person = ({ nickname, person, linkImage, linkButton, buttonName }) => (
  <Card style={{ width: '10rem', margin: '1em' }}>
    <Card.Img variant="top" src={linkImage} />
    <Card.Body>
      {nickname !== '' && <Card.Title>{nickname}</Card.Title>}
      <Card.Text>{person}</Card.Text>
      <Card.Link href={linkButton}>
        <Button variant="primary">{buttonName}</Button>
      </Card.Link>
    </Card.Body>
  </Card>
)

Person.defaultProps = {
  nickname: '',
  buttonName: 'gitHub',
}

Person.propTypes = {
  nickname: PropTypes.string,
  person: PropTypes.string,
  linkImage: PropTypes.string,
  linkButton: PropTypes.string,
  buttonName: PropTypes.string,
}

export default Person
