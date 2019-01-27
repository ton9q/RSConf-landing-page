import React from 'react'
import { Navbar, Button, FormControl, Form } from 'react-bootstrap'

import Logo from './logo'
import Navigation from './navigation'
import Search from './search'

const Menu = () => (
  <Navbar bg="rebeccapurple" variant="dark">
    <Logo />
    <Navigation />
    <Search />
  </Navbar>
)

export default Menu
