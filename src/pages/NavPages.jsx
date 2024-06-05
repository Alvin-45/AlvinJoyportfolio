import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
function NavPages() {
  return (
    <>
    <div className='nav2 w-100' style={{position:'fixed'}}>
      {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid>
              <Link to={'/'}>
                  <Navbar.Brand href="#home"><b className='text-light'>
                    <span className="title">Alvin Joy</span></b></Navbar.Brand>
              </Link>
              <Navbar.Toggle  className=' border' style={{color:'white'}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                
              >
                <Offcanvas.Header closeButton className='offhead'>
                  <Offcanvas.Title  style={{color:'white'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                    
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='offbdy' >
                  <Nav className="justify-content-end flex-grow-1 pe-3 navmenu">
                    <Link style={{textDecoration:'none'}} to={'/'}><Nav.Item className='text-light fw-bolder'><i className="fa-solid fa-home"></i> BACK TO HOME</Nav.Item></Link>
                    
                    
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
    </div>
    </>
  )
}

export default NavPages