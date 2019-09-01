import graphqlTag from 'graphql-tag'
import * as React from 'react'
import { Mutation } from 'react-apollo'
import { TextInput } from 'react-native'

interface Props {
  onSubmit: (text: string) => void
}

interface State {
  text: string
}

class MyTextInput extends React.Component<Props, State> {
  public state = {
    text: '',
  }

  private onSubmit = () => {
    const { onSubmit } = this.props
    const { text } = this.state
    onSubmit(text)
    this.setState({ text: '' })
  }

  private onChange = (text: string) => {
    this.setState({ text })
  }

  public render() {
    const { text } = this.state
    return (
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Enter text..."
        onSubmitEditing={this.onSubmit}
        onChangeText={this.onChange}
        value={text}
      />
    )
  }
}

export default MyTextInput
