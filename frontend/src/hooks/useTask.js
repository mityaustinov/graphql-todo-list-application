import { gql, useQuery } from "@apollo/client";

const GET_TASK =  gql`
  query GetTask($id: ID!) {
    task(id:$id) {
      id
      title
      description
      completed
    }
  }
`

const useTask = (id) => {
  const {data, error, loading} = useQuery(GET_TASK, {
    variables: {
      id, 
    }
  })
  return {data, error, loading}
}

export default useTask