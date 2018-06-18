import React, { Component } from 'react'
import DevTools from 'mobx-react-devtools'
import TodoList from './components/TodoList/TodoList'
import SumNum from './components/SumNum/SumNum'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DevTools />
        <TodoList />
        <SumNum />
      </div>
    )
  }
}

export default App
