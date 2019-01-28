import React from 'react';
import { Nav } from 'react-bootstrap';

const Navigation = () => (
  <Nav className="mr-auto" style={{ fontSize: '1.5em' }}>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/team"> Our Team</Nav.Link>
    {/* <Nav.Link href="/person">Great Belorussian Producers</Nav.Link> */}
  </Nav>
);

export default Navigation;
