//Se realizan las importaciones
import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MiApi from './components/MiApi';
import Buscador from './components/Buscador';
import img from './assets/digitalocean.svg'

function App() {

  // imagenes, es el estado que guarda los valores traídos desde la API
  const [imagenes, setImagenes] = useState([]);

  return (
    <>
    {/* Barra de navegación tomada de Bootstrap */}
      <Navbar bg="info" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">API</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Images</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
              <Button variant="">Sign in</Button>
              <Button variant="outline-dark">Sign up</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <h1 className="mt-3 text-center"> API De Lorem Picsum</h1>
        {/* Se pasa la propiedad imagenes al component Buscador */}
        <Buscador imagenes={imagenes} />
        {/* Se pasa la propiedad setImagenes al component MiApi */}
        <MiApi setImagenes={setImagenes}/>
      </div>
      {/* Pie de página contiene una imagen guardada en assets */}
      <footer className='bg-dark'><img className='img p-3' src={img} alt="" /></footer>
    </>
  )
}

export default App
