import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Card,
  Carousel,
  /* Button, CardGroup, */ Figure,
} from 'react-bootstrap'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'

// import Producer from '../components/producer/producer'

const Person = ({ person, linkImage }) => (
  <Layout>
    <SEO title="Person" />
    {/* <Producer />> */}
    <Link to="/">Назад</Link>
  </Layout>
)

export default Person
