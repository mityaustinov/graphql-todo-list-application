import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'

// data
import data from './data.js'

// types
import { typeDefs } from "./schema.js";

// resolvers
const resolvers = {
  Query: {
    tasks() {
      return data.tasks
    },
    task(_, args) {
      return data.tasks.find((task) => task.id === args.id)
    }
  },
  
  Mutation: {
    editTask(_, args) {
      data.tasks = data.tasks.map((task) => {
        if(task.id === args.id) {
          return {...task, ...args.edits}
        }
        return task
      })
      return data.tasks.find((task) => task.id === args.id)
    }
  }
}

//server setup
const server = new ApolloServer({
  // typeDefs
  typeDefs,
  // resolvers
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000
  }
})

console.log('Server is up and running at port', 4000)