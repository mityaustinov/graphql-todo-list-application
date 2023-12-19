import React from "react";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

// Define mutation
const COMPLETE_TASK = gql`
  mutation editTask($edits: EditTaskInput!, $id: ID!) {
    editTask(edits: $edits, id: $id) {
      completed
    }
  }
`; 

const Component = styled.button`
  width: 100%;
  padding: 10px;
  background:  var(--green);
  color:  var(--white);
  border: none;
  font-size: 16px;
  font-weight: bold;
`

const Button = ((props) => {
  
  const {taskId, title} = props

console.log(taskId);

  const [markCompleted, {data, loading, error}] = useMutation(COMPLETE_TASK, {
    variables: {
      "edits": {
        "completed": true
      },
      "id": `${taskId}`
    }
  })

  return(
    <Component onClick={() => markCompleted()}>
      {title}
    </Component>
)})

 export default Button