import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/*logo*/}
      <div className="navbar__logo">
        <h2>BuildaBot Cart</h2>
      </div>

      {/*links*/}
      <ul className="navbar__links">
        <li>
          <link to="cart">
            {/*icon*/}
            Cart
            <span className="cartlogo__badge">0</span>
          </link>
        </li>
      </ul>
    </nav>
  );
};

// function Menu() {
//   return (
//     <Navbar bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//         <Nav className="me-auto">
//           <Nav.Link href="#home">Home</Nav.Link>
//           <Nav.Link href="#features">Features</Nav.Link>
//           <Nav.Link href="#pricing">Pricing</Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// }

export default Menu;
