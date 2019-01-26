import React from 'react'
import { Navbar, Button, FormControl, Nav, Form } from 'react-bootstrap'
import logo from '../images/RSS.png'

const Menu = () => (
    <Navbar bg="rebeccapurple" variant="dark">
        <img src={logo} alt="RSSchool logo" style={{maxInlineSize: '4em', marginRight: '3em'}} />
        <Nav className="mr-auto" style={{fontSize: '1.5em'}}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Main Page</Nav.Link>
            <Nav.Link href="#pricing">Some other page</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
    </Navbar>
)

export default Menu;
