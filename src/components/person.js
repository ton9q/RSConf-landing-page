import React from 'react'
import { Link } from 'gatsby'
import { Card, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Person = ({ nickname, person, linkImage, linkGit }) => (
  <Card style={{ width: '10rem', margin: '1em' }}>
    <Card.Img variant="top" src={linkImage} />
    <Card.Body>
      <Card.Title>{nickname}</Card.Title>
      <Card.Text>{person}</Card.Text>
      <Card.Link href={linkGit}>
        <Button variant="primary">gitHub</Button>
      </Card.Link>
    </Card.Body>
  </Card>
)

Person.propTypes = {
  nickname: PropTypes.string,
  person: PropTypes.string,
  linkImage: PropTypes.string,
  linkGit: PropTypes.string,
}

export default Person
