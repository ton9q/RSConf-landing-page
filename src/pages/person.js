import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Producer from '../components/producer/producer'

// import GlobalState from 'globalstate'

const Person = () => (
  <Layout>
    <SEO title="Person" />
    <Producer  person={localStorage.getItem('producerName')} /* src={'GlobalState.linkImage'} */ />
    <Link to="/">Назад</Link>
  </Layout>
)

export default Person
