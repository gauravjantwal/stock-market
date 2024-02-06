import React from 'react'
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap'

const Menu = () =>{
    return (
      <Nav className="flex-column">
      <Nav.Link as={Link} to="/">
        Dashboard
      </Nav.Link>
      <Nav.Link as={Link} to="/watchlist">
        Watch List
      </Nav.Link>
      <Nav.Link as={Link} to="/ipo">
        IPO
      </Nav.Link>      
      <Nav.Link as={Link} to="/about">
        About
      </Nav.Link>      
    </Nav>
    )
}

export default Menu;