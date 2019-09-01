import gql from 'graphql-tag'
import React from 'react'
import { FlatList, Text } from 'react-native'

import { useQuery } from '@apollo/react-hooks'

interface PostsInterface {
  id: number
  text: string
  year: number
}

interface PostsData {
  posts: PostsInterface[]
}

interface PostsVars {
  year: number
}

const QUERY_POSTS = gql`
  query queryPosts($year: Int!) {
    posts(year: $year) {
      id
      text
    }
  }
`

export function PostList() {
  const { loading, data } = useQuery<PostsData, PostsVars>(QUERY_POSTS, {
    variables: { year: 2019 },
  })
  return (
    <div>
      <h3>Posts</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Text</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.posts.map(post => (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.text}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
