import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import PersonListHandler from '../components/personListHandler'
import PersonOfTheDay from '../components/personOfTheDay'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PersonOfTheDay />
    <PersonListHandler />
  </Layout>
)

export default IndexPage
