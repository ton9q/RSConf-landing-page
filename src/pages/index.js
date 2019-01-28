import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

import PersonListHandler from '../components/personListHandler';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <PersonListHandler />
  </Layout>
);

export default IndexPage;
