import { useQuery, gql } from "@apollo/client";

const GET_TASKS = gql` 
  query {
    tasks{
      id
      title
      description
      completed
    }
  }
`

const useTasks = () => {
  const {error, data, loading} = useQuery(GET_TASKS)
  //console.log(error, loading, data);

  return {error, data, loading}
}

export default useTasks