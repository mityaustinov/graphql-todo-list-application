import React from "react";
import useTasks from "../hooks/useTasks";
import Task from "../components/Task";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Component = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

 const ToDoList = (() => {

  const {error, loading, data} = useTasks()

  if (loading) return <div>Loading spinner is spinning</div>

  if (error) return <div>Something went wrong</div>

  return(
    <Component>
      {data.tasks.map((task, i) => {
        return(
          <Task task={task} bg={`255, 168, ${i * 25}`} key={task.id} />
        )
      })}
      {/* 
      {data.tasks.filter((item) => {
        if(!item.completed === true) {
          return true
        }
      }).map((task, i) => {
        return(
          <Link to={`/${task.id}`} key={task.id} >
            <Task task={task} bg={`255, 168, ${i * 25}`} />
          </Link>
        )
      })}
      */}
    </Component>)
  })

 export default ToDoList