import React from 'react'
import { Link } from 'gatsby'

import { Card, Button, CardGroup, Figure } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Person from '../components/person'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <h1>"Group 23" Team</h1>

    <CardGroup>
      <Person
        nickname="Saniok017"
        person="Aliaksandr Naumenka"
        linkImage="https://avatars3.githubusercontent.com/u/39351424?s=400&v=4"
        linkGit="https://github.com/saniok017"
      />
      <Person
        nickname="sergey496"
        person="Siarhei Zylevich"
        linkImage="https://avatars0.githubusercontent.com/u/21264092?s=400&v=4"
        linkGit="https://github.com/sergey496"
      />
      <Person
        nickname="ton9q"
        person="Anton Kuchma"
        linkImage="https://avatars3.githubusercontent.com/u/26420726?s=400&v=4"
        linkGit="https://github.com/ton9q"
      />
      <Person
        nickname="alexeykuril0"
        person="Alexey Kurilo"
        linkImage="https://avatars0.githubusercontent.com/u/43179292?s=400&v=4"
        linkGit="https://github.com/alexeykuril0"
      />
    </CardGroup>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
