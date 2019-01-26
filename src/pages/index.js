import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import { Card, Button, CardGroup, Figure } from 'react-bootstrap'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="171x180"
        src="holder.js/171x180"
      />
      <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption>
    </Figure>;
    <h1>"Group 23" Team</h1>
    <CardGroup>
      <Card style={{ width: '10rem', margin: '1em' }}>
        <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/39351424?s=400&u=fd9ec7804f82f2f2a041cc3edb836200fccab937&v=4" />
        <Card.Body>
          <Card.Title>Saniok017</Card.Title>
          <Card.Text>
            Aliaksandr Naumenka
          </Card.Text>
          <Card.Link href="https://github.com/saniok017"><Button variant="primary">gitHub</Button></Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem', margin: '1em' }}>
        <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/21264092?s=400&v=4" />
        <Card.Body>
          <Card.Title>sergey496</Card.Title>
          <Card.Text>
            Siarhei Zylevich
          </Card.Text>
          <Card.Link href="https://github.com/sergey496"><Button variant="primary">gitHub</Button></Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem', margin: '1em' }}>
        <Card.Img variant="top" src="https://avatars3.githubusercontent.com/u/26420726?s=400&v=4" />
        <Card.Body>
          <Card.Title>ton9q</Card.Title>
          <Card.Text>
            Anton Kuchma
          </Card.Text>
          <Card.Link href="https://github.com/ton9q"><Button variant="primary">gitHub</Button></Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: '10rem', margin: '1em' }}>
        <Card.Img variant="top" src="https://avatars0.githubusercontent.com/u/43179292?s=400&v=4" />
        <Card.Body>
          <Card.Title>alexeykuril0</Card.Title>
          <Card.Text>
            Alexey Kurilo
          </Card.Text>
          <Card.Link href="https://github.com/alexeykuril0"><Button variant="primary">gitHub</Button></Card.Link>
        </Card.Body>
      </Card>
    </CardGroup>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
