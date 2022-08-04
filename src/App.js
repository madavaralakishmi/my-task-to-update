import './App.css'
import {Component} from 'react'
import {v4} from 'uuid'
import TagsList from './Components/TagsList'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {SearchInput: '', SelectedId: tagsList[0].id, newList: []}

  onButtonStatus = event => {
    event.preventDefault()

    const {SearchInput, SelectedId} = this.state

    const newDataList = {
      id: v4(),
      input: SearchInput,
      Select: SelectedId,
    }

    this.setState(prevState => ({newList: [...prevState.newList, newDataList]}))
  }

  inputValue = event => {
    this.setState({SearchInput: event.target.value})
  }

  onSelect = event => {
    this.setState({SelectedId: event.target.value})
  }

  onButtonClicked = displayText => {
    const {newList} = this.state
    const res = newList.filter(each => each.SelectedId.includes(displayText))
    this.setState({newList: res})
  }

  render() {
    const {SearchInput, SelectedId, newList} = this.state
    console.log(SearchInput, SelectedId, newList)

    return (
      <div className="bg-color">
        <div className="color1">
          <h1>Create a task!</h1>
          <form className="color1" onSubmit={this.onButtonStatus}>
            <label htmlFor="task">Task</label>
            <br />
            <input
              id="task"
              type="text"
              placeholder="Enter the task here"
              onChange={this.inputValue}
              value={SearchInput}
            />
            <br />
            <label htmlFor="tag">Tags</label>
            <br />
            <select id="tag" onChange={this.onSelect} value={SelectedId}>
              {tagsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div className="merge-space">
          <p className="h1">Tags</p>
          <ul>
            {tagsList.map(each => (
              <TagsList
                key={each.id}
                details={each}
                onButtonClicked={this.onButtonClicked}
              />
            ))}
          </ul>
          <ul className="ul-element">
            {newList.map(each => (
              <li key={each.id} className="li-element">
                <p className="para">{each.input}</p>
                <button type="button">{each.Select}</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
