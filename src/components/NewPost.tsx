import gql from 'graphql-tag'
import React, { FC, useState } from 'react'
import { TextInput } from 'react-native'

import { useMutation } from '@apollo/react-hooks'

const ADD_POST = gql`
  mutation addPost($text: String!) {
    addPost(text: $text)
  }
`

interface PostsInterface {
  id: number
  text: string
  year: number
}

interface PostDetails {
  id: number
  text: string
  year: number
}

export const NewPost: FC = () => {
  const [id, setId] = useState(1003)
  const [text, setText] = useState('')
  const [year, setYear] = useState(2019)

  const [addPost, { error, data }] = useMutation<
    { addPost: PostsInterface },
    { post: PostDetails }
  >(ADD_POST, {
    variables: { post: { id, text, year } },
  })

  return (
    <div>
      <h3>Add a Post</h3>
      {error ? <p>Oh no! {error.message}</p> : null}
      {data && data.addPost ? <p>Saved!</p> : null}
      <form>
        <p>
          <label>Text</label>
          <input name="text" onChange={e => setText(e.currentTarget.value)} />
        </p>
        <button onClick={() => text && addPost()}>Add</button>
      </form>
    </div>
  )
}
