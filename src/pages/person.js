import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Producer from '../components/producer/producer'

const Person = () => (
  <Layout>
    <SEO title="Person" />
    <Producer  person={localStorage.getItem('producerName')} />
    <Link to="/">Назад</Link>
  </Layout>
)

export default Person
