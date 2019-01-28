import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Trans } from 'react-i18next';

import './bootstrap.min.css';

import './layout.css';

import Menu from './menu/index';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Menu siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            <Trans>BuiltWith</Trans>
            {' '}
            <a href="https://www.gatsbyjs.org"><Trans>Gatsby</Trans></a>
          </footer>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
