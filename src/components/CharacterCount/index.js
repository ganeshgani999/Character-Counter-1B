import {Component} from 'react'
import {v4} from 'uuid'
import UserInput from '../UserInput'

import {
  BgContainer,
  LeftSide,
  InfoContainer,
  UserInputsList,
  EmptyImage,
  Info,
  RightSide,
  CounterHeading,
  AddInputContainer,
  Input,
  AddButton,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {
    userInputsList: [],
    userInput: '',
  }

  onChangeInput = e => {
    this.setState({userInput: e.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUserInput = {
      id: v4(),
      userEnteredText: userInput,
      textLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputsList: [...prevState.userInputsList, newUserInput],
      userInput: '',
    }))
  }

  renderUserInputs = () => {
    const {userInputsList} = this.state
    return userInputsList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputsList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state

    return (
      <BgContainer>
        <LeftSide>
          <InfoContainer>
            <Info>Count the characters like a boss...</Info>
          </InfoContainer>
          <UserInputsList>{this.renderUserInputs()}</UserInputsList>
        </LeftSide>
        <RightSide>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
            />
            <AddButton>Add</AddButton>
          </AddInputContainer>
        </RightSide>
      </BgContainer>
    )
  }
}
export default CharacterCounter
