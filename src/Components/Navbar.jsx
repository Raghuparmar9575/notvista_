import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Col,
  InputGroup,
} from "react-bootstrap";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaStore,
  FaSearch,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

const NavBar = () => {
  // Close the Navbar after NavItem is clicked
  const [expanded, setExpanded] = useState(false);
  const handleNavItemClick = () => {
    setExpanded(false);
  };

  // Style for center the icon and text
  const iconContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Navbar
      expand="lg"
      className="main-nav"
      sticky="top"
      fixed="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Navbar.Brand as={NavLink} to="/">
        <img src="/images/mainlogo.png" alt="Notevista Logo" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="right-align">
        <InputGroup>
          <FormControl
            type="text"
            name="search"
            placeholder="Search for notes, projects and more"
            style={{ width: "100%" }}
          />
          <div className="search-icon">
            <FaSearch />
          </div>
        </InputGroup>

        <Nav className="nav-item " onClick={handleNavItemClick}>
          <Nav.Link as={NavLink} to="/">
            <div style={iconContainerStyle}>
              <FaUser />
              <span>Login</span>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/">
            <div style={iconContainerStyle}>
              <FaHeart />
              <span>Wishlist</span>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cartpage">
            <div style={iconContainerStyle}>
              <FaShoppingCart />
              <span>Cart</span>
            </div>
          </Nav.Link>
          <Nav.Link as={NavLink} to="/" className="single-line-link">
            <div style={iconContainerStyle}>
              <FaStore />
              <span>Become seller</span>
            </div>
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/"
            style={{ marginRight: "20px", marginTop: "10px" }}
          >
            <div style={iconContainerStyle}>
              <BsThreeDotsVertical size={25} />
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
