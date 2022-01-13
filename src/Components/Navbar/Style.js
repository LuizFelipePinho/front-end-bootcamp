import styled from "styled-components";
import { FaShoppingCart, FaUser } from "react-icons/fa";


export const Header = styled.header`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const MenuLink = styled.a`
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #f8f6f6e3;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: red;
  }
`;
export const Link = styled.a`
  display: none;  
  padding: 0.5rem 0.9rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #f8f6f6e3;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: red;
  };
  @media (max-width: 768px) {
    display:flex;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`;

export const Icon = styled(FaShoppingCart)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  color:#e9f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    color:black;
    transform: scale(1.1);
  }
`;
export const Login = styled(FaUser)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: black;
  color:#e9f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    color:black;
    transform: scale(1.1);
  }
`;

export const Nav = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
 
`;
export const Bars = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: black;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
`;



export const Logo = styled.div`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

export const Img = styled.img`
width:7rem;
height:5rem;
`

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #f8f6f6e3;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;