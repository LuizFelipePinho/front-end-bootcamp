import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  OpenLinksButton,
  NavbarLinkExtended,} from './Style'

export default function Sidebar(){
    const [extendNavbar, setExtendNavbar] = useState(false);
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked(!checked);
    };

    return(
        <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
          <LeftContainer>
            <NavbarLinkContainer>
              <NavbarLink type="checkbox" name="chek" label="My Value"
        value={checked}
        onChange={handleChange} />
              <NavbarLink type="checkbox" />
              <NavbarLink type="checkbox" />
              <NavbarLink type="checkbox" />
              <NavbarLink type="checkbox" />
              
              <OpenLinksButton
                onClick={() => {
                  setExtendNavbar((curr) => !curr);
                }}
              >
                {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
              </OpenLinksButton>
            </NavbarLinkContainer>
          </LeftContainer>
        </NavbarInnerContainer>
        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/products"> Products</NavbarLinkExtended>
            <NavbarLinkExtended to="/contact"> Contact Us</NavbarLinkExtended>
            <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </NavbarContainer>
    )
}