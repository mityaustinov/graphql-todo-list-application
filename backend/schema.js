export const typeDefs = `#graphql
  type Task {
    id: ID!
    title: String!
    description: String
    completed: Boolean!
  }
  type Query {
    tasks: [Task]
    task(id: ID!): Task
  }
  type Mutation {
    editTask(id: ID!, edits: EditTaskInput!): Task
  }
  input AddTaskInput {
    title: String!
  }
  input EditTaskInput {
    completed: Boolean
  }
`

// int, float, string, boolean, ID
