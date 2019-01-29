import React from 'react';
import { Trans } from 'react-i18next';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>
      <Trans>NotFound</Trans>
    </h1>
    <p>
      <Trans>messageError</Trans>
    </p>
  </Layout>
);

export default NotFoundPage;
