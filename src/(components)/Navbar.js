import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Images/logo.png'
import Image from 'next/image';


export default function HomeNav() {
    return(
        <>
      <Navbar bg="black" data-bs-theme="black">
        <Container >
          <Navbar.Brand className='mx-0 '><Image src={logo}  alt="Picture of the Logo" width={90}/>  </Navbar.Brand>
          <Nav className="ml-auto ">
            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
            <Nav.Link href="#features"  className='text-white'>Services</Nav.Link>
            <Nav.Link href="#pricing"  className='text-white'>About Us</Nav.Link>
            <Nav.Link href="#features"  className='text-white'>Contact Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}