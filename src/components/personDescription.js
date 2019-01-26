import React from 'react'
import { Media } from 'react-bootstrap'

const personDescription = ({title, description, src}) => (
    <Media>
        <Media.Body>
            <h5>{title}</h5>
            <p>
            {description}
            </p>
        </Media.Body>
        <img
            width={64}
            height={64}
            className="mr-3"
            src= {src}
            alt="Producer picture"
        />
    </Media>
)

export default personDescription;
