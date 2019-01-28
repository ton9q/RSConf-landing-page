import React from 'react';
import { Nav } from 'react-bootstrap';
import { Trans } from 'react-i18next';

const Navigation = () => (
  <Nav className="mr-auto" style={{ fontSize: '1.5em' }}>
    <Nav.Link href="/">
      <Trans>Home</Trans>
    </Nav.Link>

    <Nav.Link href="/team">
      <Trans>OurTeam</Trans>
    </Nav.Link>
  </Nav>
);

export default Navigation;
