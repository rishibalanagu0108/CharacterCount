import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class Counter extends Component {
  state = {
    counterList: [],
    userInput: '',
  }

  updateUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  addTask = () => {
    const {userInput, counterList} = this.state
    const newTask = {
      id: uuidv4(),
      userInput,
    }
    this.setState({counterList: [...counterList, newTask], userInput: ''})
  }

  displayTasks = task => {
    const {userInput} = task
    return (
      <li key={task.id} className="task-item">
        <p className="task-name">{userInput} :&nbsp;</p>
        <p className="task-length"> {userInput.length}</p>
      </li>
    )
  }

  render() {
    const {userInput, counterList} = this.state

    const renderNoTasksView = () => (
      <div className="no-tasks-view">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
          className="no-tasks-image"
        />
      </div>
    )

    return (
      <div className="bg-container">
        <div className="count-char-container">
          <h1 className="count-char-heading">
            Count the characters like <br /> a Boss...
          </h1>
          <div className="count-char-container">
            {counterList.length === 0 ? (
              renderNoTasksView()
            ) : (
              <div className="count-char-list-container">
                <ul className="count-char-list">
                  {counterList.map(item => this.displayTasks(item))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="char-input-container">
          <h1 className="char-input-heading">Character Counter</h1>
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter the Characters here"
              className="input-field"
              value={userInput}
              onChange={this.updateUserInput}
            />
            <button className="add-btn" type="button" onClick={this.addTask}>
              Add
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
