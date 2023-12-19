import React from "react";
import useTask from "../hooks/useTask";
import { useParams } from "react-router";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  .task-details {
    padding: 0 20px 40px;
  }
`

const TaskView = (() => {

  const{id} = useParams()
  const {data, loading, error} = useTask(id)
  
  if (loading) return <div>Loading spinner is spinning</div>
  
  if (error) return <div>Something went wrong</div>

  const {task: {title, description, completed}} = data 
  
  return(
    <Container>
      <div className="task-details">

      <h2>{title}</h2>
      {description && <p>{description}</p>}
      </div>
      {!completed && 
        <div className="">
          <Button />
        </div>
      }
    </Container>
)})

 export default TaskView