import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    userInput: '',
    list: [],
  }

  changeUserInput(input) {
    this.setState({
      userInput: input,
    });
  }

  addToList(input) {
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: '',
    })
  }

  deleteToDo() {
    
  }

  render() {
    return (
      <div className="to-do-list-main">
        <h1>My To Do List</h1>
        <input
          onChange={(e) => this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type="text"
        />
        <button onClick={() => this.addToList(this.state.userInput)}>DO IT!</button>
        <ul>
          {this.state.list.map((value) =>
            <li>{value}
              <button onClick={this.deleteToDo}>DELETE</button>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default App;
