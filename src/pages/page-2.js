import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import personDescription from '../components/personDescription';
import { Media } from 'react-bootstrap'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
        <h5>Media Heading</h5>
        <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
        </p>
        </Media.Body>
    </Media>
    <hr />
    <Media>
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
      <img
        width={64}
        height={64}
        className="ml-3"
        src="holder.js/64x64"
        alt="Generic placeholder"
      />
    </Media>
    <hr />
    <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
        <h5>Media Heading</h5>
        <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
        </p>
        </Media.Body>
    </Media>
    <hr />
    <Media>
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
      <img
        width={64}
        height={64}
        className="ml-3"
        src="holder.js/64x64"
        alt="Generic placeholder"
      />
    </Media>
    <hr />
    <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
        <Media.Body>
        <h5>Media Heading</h5>
        <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
        </p>
        </Media.Body>
    </Media>
    <hr />
    <Media>
      <Media.Body>
        <h5>Media Heading</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
          ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
          tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
          Donec lacinia congue felis in faucibus.
        </p>
      </Media.Body>
      <img
        width={64}
        height={64}
        className="ml-3"
        src="holder.js/64x64"
        alt="Generic placeholder"
      />
    </Media>
    <personDescription />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
