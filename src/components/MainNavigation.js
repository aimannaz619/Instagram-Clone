// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';

// const Header = () => {
//   return (
//     <Navbar bg="dark" variant="dark" expand="lg">
//       <Container>
//         {/* Logo on the left side */}
//         <Navbar.Brand href="/">
//           <img
//             src="/path/to/logo.png"
//             width="30"
//             height="30"
//             // className="d-inline-block align-top"
//             alt="Logo"
//           />{' '}
//           Your Website Name
//         </Navbar.Brand>

//         {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mlAuto">
//             {/* Profile logo on the right side */}
//             <Nav.Link href="/profile">
//               <img
//                 src="/path/to/profile_logo.png"
//                 width="30"
//                 height="30"
//                 className="d-inline-block align-top"
//                 alt="Profile Logo"
//               />
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            width="150"
            height="60"
            className=" align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        <Link className="d-flex" to="/">
          {" "}
          <img
            src="https://media.istockphoto.com/id/155097073/photo/old-beech-tree-in-summer.jpg?s=612x612&w=0&k=20&c=cTuBEG1nIVC9FAlwSpIAbUxUc_QSUgUzjWDFzYA_8ek="
            style={{ borderRadius: "50%", width: "60px", height: "60px" }}
            className="d-inline-block align-top"
            alt="Profile Logo"
          />
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
