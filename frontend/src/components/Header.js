import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../atoms/logo";


const Component = styled.header`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  background:  var(--black);
  color:  var(--white);
  display: flex;
  align-items: center;
`

const Header = ((props) => {
  return(
    <Component>
      <div className="wrapper">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </Component>
)})

 export default Header