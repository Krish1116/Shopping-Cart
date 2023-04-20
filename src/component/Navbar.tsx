import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useProductCart } from "../context/Cart-Context";

export function Navbar() {
  const { openCart, cartQuantity } = useProductCart();
  // NavbarBs bcz the function name is also same than I can change it's name
  return (
    <NavbarBs sticky="top" className="bg-custom shadow p-3 mb-5">
      <Container>
        <Nav className="me-auto mr-3">
          <Nav.Link to="/" as={NavLink} className="me-4 font-weight-bold">
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink} className="me-4 font-weight-bold">
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className="me-4 font-weight-bold">
            About
          </Nav.Link>
        </Nav>
        <Button className="cart" onClick={openCart}>
          <span className="me-2">Cart</span>
          <AiOutlineShoppingCart size={20} />
          <div className="rounded-circle bg-danger d-flex justify-content-center counter">
            {cartQuantity}
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}
