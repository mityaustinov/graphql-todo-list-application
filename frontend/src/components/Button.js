import React from "react";
import styled from "styled-components";

const Component = styled.button`
  width: 100%;
  padding: 10px;
  background:  var(--green);
  color:  var(--white);
  border: none;
  font-size: 16px;
  font-weight: bold;
`

const Button = (() => {

  const markComplete = () => {
    console.log('completed');
  }

  return(
    <Component onClick={() => markComplete()}>
      Complete
    </Component>
)})

 export default Button