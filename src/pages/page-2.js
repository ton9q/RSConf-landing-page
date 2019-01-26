import React from 'react'
import { Link } from 'gatsby'

import { Media } from 'react-bootstrap'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PersonDescription from '../components/personDescription'

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <PersonDescription />
    <hr />
    <PersonDescription />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
