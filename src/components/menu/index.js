import PropTypes from 'prop-types';
import React from 'react';

import Menu from './menu';

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        vw: 100,
      }}
    >
      <Menu />
    </div>
  </div>
);

Header.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
