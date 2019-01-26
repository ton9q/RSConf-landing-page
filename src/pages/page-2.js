import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import PersonDescription from '../components/personDescription';
import PersonListHandler from '../components/personListHandler';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <PersonListHandler />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
