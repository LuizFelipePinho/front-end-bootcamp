import React, { useState } from "react";
import {
       Nav,
       Logo,
       Img,
       Hamburger,
       Menu,
       MenuLink,
       Icon,
       Login,
       Container,
       Header,
       Bars,
       Link
} from "./Style"
import IMG from "../../Assets/logo.png"




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Header>
     <Logo >
        <Img src={IMG} alt="logo"/>
      </Logo>
    <Nav>
      <Container>
      <MenuLink href="/login"><Login/></MenuLink>
      <MenuLink href="/cart"><Icon/></MenuLink>
      
      </Container>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link href="/register">Register</Link>
        <Link href="/"> I want to sell!! </Link>
        <Link href="">categories</Link>
      </Menu>
    </Nav>
    
    <Bars>
    <Menu >
        <MenuLink href="/register">Register</MenuLink>
        <MenuLink href="/seller"> I want to sell!! </MenuLink>
        <MenuLink href="/contact">Contact</MenuLink>
        <MenuLink href="">categories</MenuLink>
      </Menu>
    </Bars>
    </Header>
  );
};

export default Navbar;