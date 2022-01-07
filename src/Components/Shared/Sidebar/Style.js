import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "2rem")};
  background-color: black;
  display: flex;
  @media (min-width: 700px) {
    width:25%;
    height: 15rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  padding-left: 5%;
  flex-direction: column;
  
`;


export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const NavbarLink = styled.input`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 2rem;
  text-decoration:none;
`;

export const OpenLinksButton = styled.button`
  width: 3rem;
  height: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-contet: flex-end;
  @media (min-width: 700px) {
    display: none;
  }
`;