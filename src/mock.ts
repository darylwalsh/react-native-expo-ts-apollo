import { SchemaLink } from 'apollo-link-schema'
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools'

const typeDefs = `
type Query {
  posts: [Post]
}
type Post {
  id: Int!,
  text: String!,
  year: Int!,
}
type Mutation {
  addPost(id: Int!, text: String!, year: Int!): Post
}
`

const posts = [
  {
    id: 1001,
    text: 'This is the first post',
    year: 2019,
  },
  {
    id: 1002,
    text: 'This is the second',
    year: 2019,
  },
]

const mocks = {
  Mutation: () => ({
    addPost: (
      _root: unknown,
      { id, text, year }: { id: number; text: string; year: number }
    ) =>
      posts.push({
        text,
        id,
        year,
      }),
  }),
  Query: () => ({
    posts: () => posts,
  }),
}

const schema = makeExecutableSchema({ typeDefs })
addMockFunctionsToSchema({ mocks, schema })

export const mockedLink = new SchemaLink({ schema })

export default null
