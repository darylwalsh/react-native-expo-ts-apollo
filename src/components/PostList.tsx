import gql from 'graphql-tag'
import React, { FC } from 'react'
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native'

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

// type MyListItem =
//   | ListRenderItemInfo<PostsInterface>
//   | ListRenderItemInfo<PostsData>

const QUERY_POSTS = gql`
  query queryPosts($year: Int!) {
    posts(year: $year) {
      id
      text
      year
    }
  }
`
export interface Props {
  post: any
}
export const PostList: FC<Props> = () => {
  const { loading, data, error } = useQuery<PostsData, PostsVars>(QUERY_POSTS, {
    variables: { year: 2019 },
  })
  console.log('start array')
  console.log(data.posts)
  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error:{error}</Text>
  if (!data) return <Text>No Data</Text>
  return (
    <View>
      <FlatList
        data={data.posts}
        renderItem={({ item }) => <Text>{item.text}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
  //   <FlatList<PostsInterface>
  // data={[{ name: 'a' }, { name: 'b' }]}
  //     data={data.posts}
  //     keyExtractor={post => String(post.id)}
  //     // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //     // @ts-ignore: unavailable type definitio
  //     renderItem={({ post }) => <Text>{post.id}</Text>}
  //   />
  // </View>
  // return (
  //   <div>
  //     <h3>Posts</h3>
  //     {loading ? (
  //       <p>Loading ...</p>
  //     ) : (
  //       <table>
  //         <thead>
  //           <tr>
  //             <th>ID</th>
  //             <th>Text</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data &&
  //             data.posts.map(post => (
  //               <tr>
  //                 <td>{post.id}</td>
  //                 <td>{post.text}</td>
  //               </tr>
  //             ))}
  //         </tbody>
  //       </table>
  //     )}
  //   </div>
  // )
}
