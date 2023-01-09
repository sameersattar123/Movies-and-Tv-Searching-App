import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    const navData = [
        {name:"Home" , link:"/"},
        {name:"Tv Series" , link:"/series"},
        {name:"Movies" , link:"/movies"},
        {name:"Search" , link:"/search"},
        {name:"About" , link:"/about"},
    ]

  return (
    <div className="header">
    <Navbar bg="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">My Entertainment</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto my-2 my-lg-0"
        style={{ maxHeight : "100px" }} >
           {
              navData.map((item)=>{
                return(
                <Nav key={item.name}>
               <Link to={item.link}>
                {item.name}
               </Link>
                </Nav>
                )
              })
           }
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </div>
  )
}

export default Header
