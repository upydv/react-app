import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import Container from 'react-bootstrap/Container';
const Navbars = () => {
  return (
    <>
  <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="/update">MERN</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href='/'>Create Post</Nav.Link>
        <Nav.Link href="/All">All Post</Nav.Link> 
      </Nav>
    </Container>
  </Navbar>
  </>
  )
}

export default Navbars
