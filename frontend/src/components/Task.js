import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom";
import Button from "./Button";

const Component = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background: rgb(255, 168, 0);
  border-bottom: 2px solid black;

  .item_title {
    width: 100%;
    padding: 7px 12px;
    font-size: 1.2rem;
    
    &.completed {
      text-decoration: line-through;
    }
  }
`
const Task = ((props) => {
  const {title, completed, id} = props.task
  const bgStep = props.bg

  return(
    <Component style={{backgroundColor:`rgb(${bgStep})`}}>
      <Link to={`/${id}`} >
        <div className={`item_title ${completed ? 'completed' : ''}`}>{title}</div>
      </Link>

      {!completed && 
        <div className="">
          <Button title="Complete" taskId={id} />
        </div>
      }
    </Component>
)})

 export default Task